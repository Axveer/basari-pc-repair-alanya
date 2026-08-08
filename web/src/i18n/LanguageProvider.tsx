import createContextHook from "@nkzw/create-context-hook";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  alternateLinks,
  buildJsonLd,
  localeFromPath,
  LOCALE_PATH,
  OG_LOCALE,
  pageMeta,
  pageUrl,
  serviceIdFromPath,
  servicePath,
} from "@/lib/seo";

import { type Dict, HTML_LANG, type Locale, LOCALES, translations } from "./translations";

const STORAGE_KEY = "basari.locale";

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as readonly string[]).includes(value);
}

/** Language the visitor explicitly picked on an earlier visit, if any. */
function storedLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

function upsertMeta(attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string): void {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Keeps every og:locale:alternate tag in sync with the active language. */
function syncOgAlternates(locale: Locale): void {
  document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach((node) => node.remove());
  for (const item of LOCALES) {
    if (item === locale) continue;
    const el = document.createElement("meta");
    el.setAttribute("property", "og:locale:alternate");
    el.setAttribute("content", OG_LOCALE[item]);
    document.head.appendChild(el);
  }
}

export const [LanguageProvider, useLanguage] = createContextHook(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const locale: Locale = localeFromPath(location.pathname);
  const serviceId = serviceIdFromPath(location.pathname);
  const t: Dict = useMemo(() => translations[locale], [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage failures — the choice still applies for this session.
      }
      // Jump to the equivalent page in the new language.
      const target = serviceId ? servicePath(next, serviceId) : `${LOCALE_PATH[next]}${location.hash}`;
      navigate(target);
    },
    [navigate, location.hash, serviceId],
  );

  // Send returning visitors to the language they picked before. Only an
  // explicit earlier choice on the ROOT page redirects — crawlers always get
  // the URL they asked for, so every version stays indexable on its own URL.
  const redirected = useRef<boolean>(false);
  useEffect(() => {
    if (redirected.current) return;
    redirected.current = true;
    const preferred = storedLocale();
    if (preferred && preferred !== "tr" && location.pathname === "/") {
      navigate(`${LOCALE_PATH[preferred]}${location.hash}`, { replace: true });
    }
  }, [navigate, location.pathname, location.hash]);

  useEffect(() => {
    const url = pageUrl(locale, serviceId);
    const meta = pageMeta(locale, serviceId);

    document.documentElement.lang = HTML_LANG[locale];
    document.title = meta.title;

    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:locale", OG_LOCALE[locale]);
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    syncOgAlternates(locale);

    upsertLink("canonical", url);
    for (const link of alternateLinks(serviceId)) {
      upsertLink("alternate", link.href, link.hreflang);
    }

    const ld = document.getElementById("ld-business");
    if (ld) ld.textContent = JSON.stringify(buildJsonLd(locale, serviceId));
  }, [locale, serviceId, t]);

  return useMemo(() => ({ locale, setLocale, t, serviceId }), [locale, setLocale, t, serviceId]);
});
