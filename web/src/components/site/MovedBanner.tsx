import { MapPin, Navigation, Phone, Sparkles } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, mapsDirectionsUrl } from "@/lib/business";

/** "We have moved" announcement — the most time-sensitive news on the page. */
export default function MovedBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="container relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand-soft via-white to-brand-soft/60 p-6 sm:p-9 lg:p-11">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
            <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.moved.tag}
                </span>
                <h2 className="mt-4 font-display text-[22px] font-extrabold uppercase leading-tight text-navy sm:text-[30px] lg:text-[34px]">
                  {t.moved.title}
                </h2>
                <p className="mt-3.5 max-w-[560px] text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">
                  {t.moved.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <Navigation className="h-4 w-4" />
                    {t.moved.cta}
                  </a>
                  <a href={`tel:${BUSINESS.phoneMobileTel}`} className="btn-dark">
                    <Phone className="h-4 w-4" />
                    {t.moved.call}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-brand/20 bg-white/80 p-5 backdrop-blur-sm sm:p-6">
                <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  <MapPin className="h-4 w-4" />
                  {t.contact.addressLabel}
                </span>
                <p className="mt-3 font-display text-[16px] font-semibold leading-snug text-navy sm:text-[18px]">
                  {BUSINESS.addressLine1}
                  <br />
                  {BUSINESS.addressLine2}
                </p>
                <p className="mt-1.5 text-[13.5px] text-ash">{BUSINESS.city}</p>
                <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-[14px]">
                  <a href={`tel:${BUSINESS.phoneMobileTel}`} className="flex items-center gap-2 font-medium text-navy transition-colors hover:text-brand">
                    <Phone className="h-3.5 w-3.5 text-brand" />
                    {BUSINESS.phoneMobileDisplay}
                  </a>
                  <a href={`tel:${BUSINESS.phoneLandTel}`} className="flex items-center gap-2 font-medium text-navy transition-colors hover:text-brand">
                    <Phone className="h-3.5 w-3.5 text-brand" />
                    {BUSINESS.phoneLandDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
