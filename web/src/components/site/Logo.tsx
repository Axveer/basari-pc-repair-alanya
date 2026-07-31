import { asset, cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/** Brand lockup: monitor mark + wordmark, per the brand asset sheet. */
export default function Logo({ variant = "light", className }: LogoProps) {
  const isDark = variant === "dark";
  return (
    <a href="#home" className={cn("flex items-center gap-2.5 sm:gap-3", className)} aria-label="Başarı Bilgisayar">
      <img
        src={asset("img/logo-mark.png")}
        alt=""
        aria-hidden="true"
        className="h-9 w-auto sm:h-11 lg:h-12"
        loading="eager"
        decoding="async"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[22px] font-extrabold tracking-tight sm:text-[27px] lg:text-[31px]",
            isDark ? "text-white" : "text-brand",
          )}
        >
          BAŞARI
        </span>
        <span
          className={cn(
            "mt-0.5 font-display text-[9px] font-bold tracking-[0.2em] sm:text-[10.5px] lg:text-[11.5px]",
            isDark ? "text-white/80" : "text-navy",
          )}
        >
          BİLGİSAYAR
        </span>
      </span>
    </a>
  );
}
