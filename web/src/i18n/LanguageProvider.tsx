import createContextHook from "@nkzw/create-context-hook";
import { useCallback, useEffect, useMemo, useState } from "react";

import { type Dict, HTML_LANG, type Locale, LOCALES, translations } from "./translations";

const STORAGE_KEY = "basari.locale";

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as readonly string[]).includes(value);
}

/** Resolves the initial locale from the saved choice, then the browser, then Turkish. */
function detectLocale(): Locale {
  if (typeof window === "undefined") return "tr";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // localStorage can be blocked — fall through to browser detection.
  }
  const candidates = window.navigator.languages ?? [window.navigator.language];
  for (const candidate of candidates) {
    const short = candidate.slice(0, 2).toLowerCase();
    if (isLocale(short)) return short;
  }
  return "tr";
}

export const [LanguageProvider, useLanguage] = createContextHook(() => {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());

  const t: Dict = useMemo(() => translations[locale], [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures — the choice still applies for this session.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.meta.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t.meta.description);
  }, [locale, t]);

  return useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
});
