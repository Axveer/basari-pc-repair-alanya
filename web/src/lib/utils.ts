import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
