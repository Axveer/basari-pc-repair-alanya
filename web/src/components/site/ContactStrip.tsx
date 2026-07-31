import { MapPin, Phone } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, mapsDirectionsUrl } from "@/lib/business";

/** Dark contact bar with both phone lines and the new address. */
export default function ContactStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-ash-light pb-10 pt-4 sm:pb-14 sm:pt-6">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy px-5 py-5 sm:px-8 sm:py-7">
            <div className="absolute inset-0 circuit-grid opacity-40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-[90px]" />
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr] lg:gap-0 lg:divide-x lg:divide-white/12">
              <a href={`tel:${BUSINESS.phoneMobileTel}`} className="group flex items-center gap-3.5 lg:pr-8">
                <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[17px] font-bold text-white sm:text-[20px]">
                    {BUSINESS.phoneMobileDisplay}
                  </span>
                  <span className="text-[12.5px] text-white/60">{t.contact.supportLabel}</span>
                </span>
              </a>

              <a href={`tel:${BUSINESS.phoneLandTel}`} className="group flex items-center gap-3.5 lg:px-8">
                <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[17px] font-bold text-white sm:text-[20px]">
                    {BUSINESS.phoneLandDisplay}
                  </span>
                  <span className="text-[12.5px] text-white/60">{t.contact.landlineLabel}</span>
                </span>
              </a>

              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5 sm:col-span-2 lg:col-span-1 lg:pl-8"
              >
                <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold leading-snug text-white sm:text-[15px]">
                    {BUSINESS.addressLine1},
                    <br className="hidden sm:block" /> {BUSINESS.addressLine2}
                  </span>
                  <span className="text-[12.5px] text-white/60">{BUSINESS.city}</span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
