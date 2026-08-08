import { HTML_LANG, type Locale, LOCALES, type ServiceId, translations } from "../i18n/translations";
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

/** All service page ids, in display order. */
export const SERVICE_IDS: readonly ServiceId[] = ["technical", "laptop", "apple", "parts"] as const;

/** Localized URL segment that hosts the service pages. */
export const SERVICE_SEGMENT: Record<Locale, string> = {
  tr: "hizmetler",
  en: "services",
  de: "leistungen",
  ru: "uslugi",
};

/** Localized, keyword-bearing slugs for each service landing page. */
export const SERVICE_SLUGS: Record<Locale, Record<ServiceId, string>> = {
  tr: {
    technical: "teknik-servis",
    laptop: "laptop-tamiri",
    apple: "macbook-apple-tamiri",
    parts: "yedek-parca",
  },
  en: {
    technical: "technical-service",
    laptop: "laptop-repair",
    apple: "macbook-repair",
    parts: "spare-parts",
  },
  de: {
    technical: "technischer-service",
    laptop: "laptop-reparatur",
    apple: "macbook-reparatur",
    parts: "ersatzteile",
  },
  ru: {
    technical: "tehnicheskiy-servis",
    laptop: "remont-noutbukov",
    apple: "remont-macbook",
    parts: "zapchasti",
  },
};

/** App-relative path of a service landing page (with trailing slash). */
export function servicePath(locale: Locale, serviceId: ServiceId): string {
  return `${LOCALE_PATH[locale]}${SERVICE_SEGMENT[locale]}/${SERVICE_SLUGS[locale][serviceId]}/`;
}

/** Detects which service page (if any) a router pathname points at. */
export function serviceIdFromPath(pathname: string): ServiceId | null {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const locale of LOCALES) {
    for (const id of SERVICE_IDS) {
      if (servicePath(locale, id) === normalized) return id;
    }
  }
  return null;
}

/** Street-level coordinates of Ali Haydar Sokak, Kadıpaşa Mahallesi, Alanya. */
export const GEO = { latitude: 36.548, longitude: 31.9957 } as const;

/** Districts around Alanya that the shop serves — strengthens local relevance. */
export const AREA_SERVED = ["Alanya", "Mahmutlar", "Oba", "Tosmur", "Kestel", "Antalya"] as const;

/** Business opening hours (also rendered in the contact section). */
export const OPENING_HOURS = {
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "19:00",
} as const;

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

/** Absolute canonical URL of a language's home page. */
export function canonicalUrl(locale: Locale): string {
  return `${SITE_URL}${LOCALE_PATH[locale]}`;
}

/** Absolute canonical URL of any page (home or service landing). */
export function pageUrl(locale: Locale, serviceId?: ServiceId | null): string {
  return serviceId ? `${SITE_URL}${servicePath(locale, serviceId)}` : canonicalUrl(locale);
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

/** hreflang pairs for the same page across every language, plus x-default. */
export function alternateLinks(serviceId?: ServiceId | null): { hreflang: string; href: string }[] {
  const links = LOCALES.map((item) => ({ hreflang: HTML_LANG[item], href: pageUrl(item, serviceId) }));
  return [...links, { hreflang: "x-default", href: pageUrl("tr", serviceId) }];
}

/** Title + description of a page in a given language. */
export function pageMeta(locale: Locale, serviceId?: ServiceId | null): { title: string; description: string } {
  const t = translations[locale];
  if (serviceId) {
    const item = t.services.items.find((entry) => entry.id === serviceId);
    if (item) return { title: item.seoTitle, description: item.seoDescription };
  }
  return { title: t.meta.title, description: t.meta.description };
}

/**
 * Schema.org graph: the local business (shared @id so Google merges all pages
 * into one entity), the site, the page — plus Service and BreadcrumbList nodes
 * on service landing pages.
 */
export function buildJsonLd(locale: Locale, serviceId?: ServiceId | null): Record<string, unknown> {
  const t = translations[locale];
  const url = pageUrl(locale, serviceId);
  const meta = pageMeta(locale, serviceId);
  const areaServed = AREA_SERVED.map((name) => ({ "@type": "City", name }));

  const graph: Record<string, unknown>[] = [
    {
      "@type": ["ComputerStore", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
      alternateName: "Başarı Bilgisayar - Laptop & Apple Servisi Alanya",
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...OPENING_HOURS.dayOfWeek],
          opens: OPENING_HOURS.opens,
          closes: OPENING_HOURS.closes,
        },
      ],
      sameAs: [`https://wa.me/${BUSINESS.whatsapp}`],
      areaServed,
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
            url: pageUrl(locale, item.id),
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
      name: meta.title,
      description: meta.description,
      inLanguage: HTML_LANG[locale],
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      primaryImageOfPage: OG_IMAGE,
    },
  ];

  if (serviceId) {
    const item = t.services.items.find((entry) => entry.id === serviceId);
    if (item) {
      graph.push(
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t.nav.home, item: canonicalUrl(locale) },
            { "@type": "ListItem", position: 2, name: t.nav.services, item: `${canonicalUrl(locale)}#services` },
            { "@type": "ListItem", position: 3, name: item.title, item: url },
          ],
        },
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: item.title,
          description: item.seoDescription,
          serviceType: item.title,
          url,
          inLanguage: HTML_LANG[locale],
          areaServed,
          provider: { "@id": `${SITE_URL}/#business` },
        },
      );
    }
  }

  return { "@context": "https://schema.org", "@graph": graph };
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
 * The full localized `<head>` SEO block for a page. Rendered into every static
 * page at build time and mirrored at runtime when the visitor navigates.
 */
export function headMarkup(locale: Locale, serviceId?: ServiceId | null): string {
  const url = pageUrl(locale, serviceId);
  const meta = pageMeta(locale, serviceId);
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  const alternates = alternateLinks(serviceId)
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
    JSON.stringify(buildJsonLd(locale, serviceId)),
    `    </script>`,
  ].join("\n");
}
