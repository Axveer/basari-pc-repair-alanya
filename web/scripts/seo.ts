/**
 * Post-build SEO step, invoked from vite.config.ts after the bundle is written.
 *
 * GitHub Pages returns a real 404 status for unknown paths, so a client-side
 * route alone is not indexable. This writes a genuine static page per language
 * (`/en/`, `/de/`, `/ru/`) with localized title, description, canonical,
 * hreflang and JSON-LD, rewrites the Turkish root page, and emits sitemap.xml
 * plus robots.txt.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { HTML_LANG, type Locale, LOCALES } from "../src/i18n/translations";
import { alternateLinks, canonicalUrl, headMarkup, LOCALE_PATH, SITE_URL } from "../src/lib/seo";

const START = "<!--seo:start-->";
const END = "<!--seo:end-->";

function localizeHtml(template: string, locale: Locale): string {
  const start = template.indexOf(START);
  const end = template.indexOf(END);
  if (start === -1 || end === -1) {
    throw new Error(`index.html is missing the ${START} / ${END} markers`);
  }

  const head = `${START}\n${headMarkup(locale)}\n    ${END}`;
  const withHead = template.slice(0, start) + head + template.slice(end + END.length);
  return withHead.replace(/<html lang="[^"]*"/, `<html lang="${HTML_LANG[locale]}"`);
}

function buildSitemap(lastmod: string): string {
  const alternates = alternateLinks()
    .map((link) => `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
    .join("\n");

  const urls = LOCALES.map((locale) =>
    [
      "  <url>",
      `    <loc>${canonicalUrl(locale)}</loc>`,
      alternates,
      `    <lastmod>${lastmod}</lastmod>`,
      "    <changefreq>monthly</changefreq>",
      `    <priority>${locale === "tr" ? "1.0" : "0.9"}</priority>`,
      "  </url>",
    ].join("\n"),
  ).join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

/** Writes localized static pages, sitemap.xml and robots.txt into `distDir`. */
export async function generateSeoFiles(distDir: string): Promise<void> {
  const indexPath = path.join(distDir, "index.html");
  const template = await readFile(indexPath, "utf8");

  for (const locale of LOCALES) {
    const html = localizeHtml(template, locale);
    if (locale === "tr") {
      await writeFile(indexPath, html, "utf8");
      continue;
    }
    const dir = path.join(distDir, LOCALE_PATH[locale].replace(/^\/|\/$/g, ""));
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "index.html"), html, "utf8");
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  await writeFile(path.join(distDir, "sitemap.xml"), buildSitemap(lastmod), "utf8");

  const robots = ["User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n");
  await writeFile(path.join(distDir, "robots.txt"), robots, "utf8");
}
