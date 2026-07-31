import { memo } from "react";

import type { Locale } from "@/i18n/translations";

interface FlagIconProps {
  locale: Locale;
  className?: string;
}

/** Small inline SVG flags — avoids emoji flags that don't render on Windows. */
const FlagIcon = memo(({ locale, className = "h-4 w-6" }: FlagIconProps) => {
  const shared = `${className} shrink-0 rounded-[2px] ring-1 ring-black/10`;

  if (locale === "tr") {
    return (
      <svg viewBox="0 0 36 24" className={shared} aria-hidden="true">
        <rect width="36" height="24" fill="#E30A17" />
        <circle cx="14" cy="12" r="5.4" fill="#fff" />
        <circle cx="15.7" cy="12" r="4.3" fill="#E30A17" />
        <path
          fill="#fff"
          d="m21.4 12 4.6-1.5-2.85 3.9V9.6l2.85 3.9z"
          transform="rotate(0 22 12)"
        />
      </svg>
    );
  }

  if (locale === "en") {
    return (
      <svg viewBox="0 0 36 24" className={shared} aria-hidden="true">
        <rect width="36" height="24" fill="#012169" />
        <path d="M0 0l36 24M36 0L0 24" stroke="#fff" strokeWidth="4.8" />
        <path d="M0 0l36 24M36 0L0 24" stroke="#C8102E" strokeWidth="2.4" />
        <path d="M18 0v24M0 12h36" stroke="#fff" strokeWidth="8" />
        <path d="M18 0v24M0 12h36" stroke="#C8102E" strokeWidth="4.8" />
      </svg>
    );
  }

  if (locale === "de") {
    return (
      <svg viewBox="0 0 36 24" className={shared} aria-hidden="true">
        <rect width="36" height="8" fill="#000" />
        <rect y="8" width="36" height="8" fill="#DD0000" />
        <rect y="16" width="36" height="8" fill="#FFCE00" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 36 24" className={shared} aria-hidden="true">
      <rect width="36" height="8" fill="#fff" />
      <rect y="8" width="36" height="8" fill="#0039A6" />
      <rect y="16" width="36" height="8" fill="#D52B1E" />
    </svg>
  );
});

FlagIcon.displayName = "FlagIcon";

export default FlagIcon;
