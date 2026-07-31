import { Phone, ShieldCheck, Wrench } from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS } from "@/lib/business";
import { asset } from "@/lib/utils";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      {/* Shop photo */}
      <div className="absolute inset-0">
        <img
          src={asset("img/hero-shop.png")}
          alt="Başarı Bilgisayar"
          className="h-full w-full object-cover object-[72%_center] opacity-70 lg:object-[right_center] lg:opacity-100"
          loading="eager"
          decoding="async"
        />
      </div>
      {/* Navy scrims so the headline always stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/70 to-navy/95 lg:bg-gradient-to-r lg:from-navy lg:via-navy/85 lg:to-transparent" />
      <div className="absolute inset-0 circuit-grid opacity-[0.35] mix-blend-screen" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand/25 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand/10 to-transparent animate-scan-line opacity-40" />

      <div className="container relative pb-14 pt-14 sm:pb-20 sm:pt-20 lg:min-h-[560px] lg:py-28">
        <div className="max-w-[620px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm animate-fade-in">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display font-black uppercase leading-[0.95] tracking-tight text-white animate-fade-up">
            <span className="block text-[42px] sm:text-[58px] lg:text-[70px]">{t.hero.titleTop}</span>
            <span className="mt-1 block text-[27px] text-brand text-glow sm:text-[36px] lg:text-[44px]">
              {t.hero.titleMain}
            </span>
          </h1>

          <div className="mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-brand to-transparent" />

          <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-white/85 sm:text-[17px]">
            {t.hero.subtitle}
          </p>

          {/* Desktop CTAs */}
          <div className="mt-8 hidden flex-wrap items-center gap-3 sm:flex">
            <a href="#services" className="btn-primary">
              <Wrench className="h-4 w-4" />
              {t.hero.ctaServices}
            </a>
            <a href="#contact" className="btn-outline-light">
              <Phone className="h-4 w-4" />
              {t.hero.ctaContact}
            </a>
          </div>

          {/* Mobile: direct call buttons like the design */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:hidden">
            <a
              href={`tel:${BUSINESS.phoneMobileTel}`}
              className="flex flex-col items-center gap-0.5 rounded-xl bg-brand px-3 py-3 text-white transition-transform active:scale-95"
            >
              <span className="flex items-center gap-1.5 font-display text-[14px] font-bold">
                <Phone className="h-3.5 w-3.5" />
                {BUSINESS.phoneMobileDisplay}
              </span>
              <span className="text-[11px] text-white/80">{t.hero.callNow}</span>
            </a>
            <a
              href={`tel:${BUSINESS.phoneLandTel}`}
              className="flex flex-col items-center gap-0.5 rounded-xl border border-brand/60 bg-navy/60 px-3 py-3 text-white backdrop-blur-sm transition-transform active:scale-95"
            >
              <span className="flex items-center gap-1.5 font-display text-[14px] font-bold">
                <Phone className="h-3.5 w-3.5" />
                {BUSINESS.phoneLandDisplay}
              </span>
              <span className="text-[11px] text-white/70">{t.hero.callNow}</span>
            </a>
          </div>

          <p className="mt-6 font-display text-[13px] font-medium italic text-white/60 sm:mt-8">{t.hero.tagline}</p>
        </div>
      </div>

      {/* Trust badges row */}
      <div className="relative border-t border-white/10 bg-navy/80 backdrop-blur-sm">
        <div className="container flex gap-2.5 overflow-x-auto py-3 no-scrollbar sm:justify-center sm:gap-4">
          {t.badges.map((badge) => (
            <span
              key={badge}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[11.5px] font-medium text-white/85 sm:text-[12.5px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
