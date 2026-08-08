/**
 * Post-build SEO step, invoked from vite.config.ts after the bundle is written.
 *
 * GitHub Pages returns a real 404 status for unknown paths, so client-side
 * routes alone are not indexable. This writes a genuine static page for every
 * language home (`/`, `/en/`, `/de/`, `/ru/`) AND every localized service
 * landing page (e.g. `/hizmetler/laptop-tamiri/`, `/en/services/laptop-repair/`),
 * each with localized title, description, canonical, hreflang and JSON-LD.
 * It also emits sitemap.xml and robots.txt.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { HTML_LANG, type Locale, LOCALES, type ServiceId } from "../src/i18n/translations";
import {
  alternateLinks,
  headMarkup,
  LOCALE_PATH,
  pageUrl,
  SERVICE_IDS,
  servicePath,
  SITE_URL,
} from "../src/lib/seo";

const START = "<!--seo:start-->";
const END = "<!--seo:end-->";

interface PageDef {
  locale: Locale;
  serviceId: ServiceId | null;
}

/** Every page of the site: 4 language homes + 4 services × 4 languages. */
const PAGES: PageDef[] = [
  ...LOCALES.map((locale): PageDef => ({ locale, serviceId: null })),
  ...LOCALES.flatMap((locale) => SERVICE_IDS.map((id): PageDef => ({ locale, serviceId: id }))),
];

function localizeHtml(template: string, page: PageDef): string {
  const start = template.indexOf(START);
  const end = template.indexOf(END);
  if (start === -1 || end === -1) {
    throw new Error(`index.html is missing the ${START} / ${END} markers`);
  }

  const head = `${START}\n${headMarkup(page.locale, page.serviceId)}\n    ${END}`;
  const withHead = template.slice(0, start) + head + template.slice(end + END.length);
  return withHead.replace(/<html lang="[^"]*"/, `<html lang="${HTML_LANG[page.locale]}"`);
}

/** dist-relative directory of a page ("" for the Turkish home). */
function pageDir(page: PageDef): string {
  const appPath = page.serviceId ? servicePath(page.locale, page.serviceId) : LOCALE_PATH[page.locale];
  return appPath.replace(/^\/|\/$/g, "");
}

function sitemapEntry(page: PageDef, lastmod: string): string {
  const alternates = alternateLinks(page.serviceId)
    .map((link) => `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
    .join("\n");
  const priority = page.serviceId ? "0.8" : page.locale === "tr" ? "1.0" : "0.9";

  return [
    "  <url>",
    `    <loc>${pageUrl(page.locale, page.serviceId)}</loc>`,
    alternates,
    `    <lastmod>${lastmod}</lastmod>`,
    "    <changefreq>monthly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

function buildSitemap(lastmod: string): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    PAGES.map((page) => sitemapEntry(page, lastmod)).join("\n"),
    "</urlset>",
    "",
  ].join("\n");
}

/** Writes localized static pages, sitemap.xml and robots.txt into `distDir`. */
export async function generateSeoFiles(distDir: string): Promise<void> {
  const indexPath = path.join(distDir, "index.html");
  const template = await readFile(indexPath, "utf8");

  for (const page of PAGES) {
    const html = localizeHtml(template, page);
    const dir = pageDir(page);
    if (dir.length === 0) {
      await writeFile(indexPath, html, "utf8");
      continue;
    }
    const target = path.join(distDir, dir);
    await mkdir(target, { recursive: true });
    await writeFile(path.join(target, "index.html"), html, "utf8");
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  await writeFile(path.join(distDir, "sitemap.xml"), buildSitemap(lastmod), "utf8");

  const robots = ["User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n");
  await writeFile(path.join(distDir, "robots.txt"), robots, "utf8");
}
