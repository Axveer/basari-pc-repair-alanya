import { asset, cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageProvider";

interface AxveerCreditProps {
  /** `dark` sits on the navy footer, `light` on a white surface. */
  variant?: "light" | "dark";
  className?: string;
}

/** "Designed & built by AXVEER" credit with the studio wordmark. */
export default function AxveerCredit({ variant = "dark", className }: AxveerCreditProps) {
  const { t } = useLanguage();
  const isDark = variant === "dark";

  return (
    <a
      href="https://axveer.com"
      target="_blank"
      rel="noopener"
      title="Axveer — axveer.com"
      className={cn(
        "group inline-flex items-center gap-2 transition-colors",
        isDark ? "text-white/45 hover:text-white/90" : "text-navy/45 hover:text-navy",
        className,
      )}
    >
      <span className="text-[12px] tracking-[0.02em]">{t.footer.credit}</span>
      <img
        src={asset("img/axveer-logo.png")}
        alt="Axveer"
        width={1830}
        height={359}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-[11px] w-auto opacity-60 transition-all duration-300 group-hover:opacity-100",
          isDark ? "brightness-0 invert" : "brightness-0",
        )}
      />
    </a>
  );
}
