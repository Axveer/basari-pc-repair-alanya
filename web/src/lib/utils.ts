import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "@/i18n/translations";
import { LOCALE_PATH } from "@/lib/seo";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolve a file from `public/` against the deploy base path, so images keep
 * working both on the custom domain (`/`) and on a GitHub Pages project URL
 * (`/<repo-name>/`).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

/**
 * Full href of the localized home page (optionally with a #section hash),
 * usable from any route — service pages link back through this.
 */
export function homeHref(locale: Locale, hash: string = ""): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${LOCALE_PATH[locale].replace(/^\//, "")}${hash}`;
}
