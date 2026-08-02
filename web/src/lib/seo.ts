import { HTML_LANG, type Locale, LOCALES, translations } from "../i18n/translations";
import { BUSINESS } from "./business";

/** Canonical origin of the production site (no trailing slash). */
export const SITE_URL = "https://basarinet.com";

/** One indexable URL per language. Turkish is the root / x-default page. */
export const LOCALE_PATH: Record<Locale, string> = {
  tr: "/",
  en: "/en/",
  de: "/de/",
  ru: "/ru/",
};

export const OG_LOCALE: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
  ru: "ru_RU",
};

/** Street-level coordinates of Ali Haydar Sokak, Kadıpaşa Mahallesi, Alanya. */
export const GEO = { latitude: 36.548, longitude: 31.9957 } as const;

export const OG_IMAGE = `${SITE_URL}/img/hero-shop.png`;
export const OG_IMAGE_WIDTH = 1000;
export const OG_IMAGE_HEIGHT = 585;

/** Studio that designed and built the site — credited in the footer and schema. */
export const CREATOR = {
  name: "Axveer",
  url: "https://axveer.com",
  logo: "https://axveer.com/images/logos/Axveer.png",
} as const;

export const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}`;

/** Absolute canonical URL of a language version. */
export function canonicalUrl(locale: Locale): string {
  return `${SITE_URL}${LOCALE_PATH[locale]}`;
}

/**
 * Reads the language from a router pathname (`/en`, `/de/`, …).
 * Falls back to Turkish, which lives at the root.
 */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.replace(/^\/+/, "").split("/")[0]?.toLowerCase() ?? "";
  const match = LOCALES.find((item) => item === segment);
  return match ?? "tr";
}

/** hreflang pairs for every language version plus x-default. */
export function alternateLinks(): { hreflang: string; href: string }[] {
  const links = LOCALES.map((item) => ({ hreflang: HTML_LANG[item], href: canonicalUrl(item) }));
  return [...links, { hreflang: "x-default", href: canonicalUrl("tr") }];
}

/**
 * Schema.org graph for a language version: the local business (shared @id so
 * Google merges the four pages into one entity), the site, and the page.
 */
export function buildJsonLd(locale: Locale): Record<string, unknown> {
  const t = translations[locale];
  const url = canonicalUrl(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ComputerStore", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: BUSINESS.name,
        alternateName: "Başarı Bilgisayar - Laptop - PC Servisi",
        description: t.meta.description,
        url: `${SITE_URL}/`,
        image: OG_IMAGE,
        logo: `${SITE_URL}/img/logo-basari.png`,
        foundingDate: String(BUSINESS.since),
        telephone: BUSINESS.phoneMobileTel,
        priceRange: "$$",
        currenciesAccepted: "TRY",
        paymentAccepted: "Cash, Credit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kadıpaşa Mahallesi, Ali Haydar Sokak No: 2",
          addressLocality: "Alanya",
          addressRegion: "Antalya",
          postalCode: "07400",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        hasMap: MAP_URL,
        areaServed: [
          { "@type": "City", name: "Alanya" },
          { "@type": "AdministrativeArea", name: "Antalya" },
        ],
        knowsLanguage: ["tr", "en", "de", "ru"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: BUSINESS.phoneMobileTel,
            contactType: "customer service",
            availableLanguage: ["Turkish", "English", "German", "Russian"],
          },
          {
            "@type": "ContactPoint",
            telephone: BUSINESS.phoneLandTel,
            contactType: "technical support",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.services.title,
          itemListElement: t.services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.short,
              serviceType: item.title,
              areaServed: { "@type": "City", name: "Alanya" },
              provider: { "@id": `${SITE_URL}/#business` },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: BUSINESS.name,
        inLanguage: HTML_LANG[locale],
        publisher: { "@id": `${SITE_URL}/#business` },
        creator: { "@id": `${SITE_URL}/#creator` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#creator`,
        name: CREATOR.name,
        url: CREATOR.url,
        logo: CREATOR.logo,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: HTML_LANG[locale],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        primaryImageOfPage: OG_IMAGE,
      },
    ],
  };
}

/** Escapes text for safe use inside an HTML attribute. */
function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * The full localized `<head>` SEO block. Rendered into every static page at
 * build time and mirrored at runtime when the visitor switches language.
 */
export function headMarkup(locale: Locale): string {
  const t = translations[locale];
  const url = canonicalUrl(locale);
  const title = escapeAttr(t.meta.title);
  const description = escapeAttr(t.meta.description);

  const alternates = alternateLinks()
    .map((link) => `    <link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
    .join("\n");

  const otherLocales = LOCALES.filter((item) => item !== locale)
    .map((item) => `    <meta property="og:locale:alternate" content="${OG_LOCALE[item]}" />`)
    .join("\n");

  return [
    `    <title>${title}</title>`,
    `    <meta name="description" content="${description}" />`,
    `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `    <link rel="canonical" href="${url}" />`,
    alternates,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="${escapeAttr(BUSINESS.name)}" />`,
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:locale" content="${OG_LOCALE[locale]}" />`,
    otherLocales,
    `    <meta property="og:image" content="${OG_IMAGE}" />`,
    `    <meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`,
    `    <meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`,
    `    <meta property="og:image:alt" content="${escapeAttr(BUSINESS.name)} — Alanya" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
    `    <meta name="twitter:image" content="${OG_IMAGE}" />`,
    `    <script type="application/ld+json" id="ld-business">`,
    JSON.stringify(buildJsonLd(locale)),
    `    </script>`,
  ].join("\n");
}
