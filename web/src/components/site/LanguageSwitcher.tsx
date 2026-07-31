import { Check, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import FlagIcon from "@/components/site/FlagIcon";
import { useLanguage } from "@/i18n/LanguageProvider";
import { type Locale, LOCALE_LABELS, LOCALES } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

/** Flag dropdown used in the header (light) and footer (dark). */
export default function LanguageSwitcher({ variant = "light", className }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = useCallback(
    (next: Locale) => {
      setLocale(next);
      setOpen(false);
    },
    [setLocale],
  );

  const isDark = variant === "dark";

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.topbar.language}
        className={cn(
          "flex w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200",
          isDark
            ? "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
            : "border-brand/40 bg-white text-navy hover:border-brand hover:shadow-glow",
        )}
      >
        <FlagIcon locale={locale} />
        <span className="whitespace-nowrap">{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={cn("ml-auto h-4 w-4 transition-transform duration-300", open && "rotate-180", isDark ? "text-white/70" : "text-brand")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className={cn(
            "absolute right-0 z-50 mt-2 w-full min-w-[176px] origin-top overflow-hidden rounded-xl border bg-white p-1.5 shadow-[0_24px_48px_-20px_rgba(13,27,42,0.35)] animate-fade-up",
            isDark && "border-white/10",
          )}
        >
          {LOCALES.map((item) => {
            const active = item === locale;
            return (
              <li key={item}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => choose(item)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-left text-sm transition-colors",
                    active ? "bg-brand-soft font-semibold text-brand-ink" : "text-navy hover:bg-ash-light",
                  )}
                >
                  <FlagIcon locale={item} />
                  <span>{LOCALE_LABELS[item]}</span>
                  {active && <Check className="ml-auto h-4 w-4 text-brand" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
