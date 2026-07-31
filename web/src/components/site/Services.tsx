import { Check, MessageCircle } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { SERVICE_ICONS } from "@/components/site/ServiceCards";
import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappUrl } from "@/lib/business";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad relative overflow-hidden bg-ash-light">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="h2-title mt-3">{t.services.title}</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.services.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.services.items.map((item, index) => {
            const Icon = SERVICE_ICONS[item.id];
            return (
              <Reveal key={item.id} delay={index * 90}>
                <article className="card-base card-hover group relative h-full overflow-hidden p-5 sm:p-7">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative flex items-start gap-4">
                    <span className="icon-badge h-13 w-13 h-[52px] w-[52px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]">
                      <Icon className="h-6 w-6" strokeWidth={2.1} />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-semibold text-navy sm:text-[19px]">{item.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ash">{item.short}</p>
                    </div>
                  </div>

                  <ul className="relative mt-5 space-y-2 border-t border-border/80 pt-4">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-navy/85">
                        <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-soft">
                          <Check className="h-2.5 w-2.5 text-brand" strokeWidth={3.4} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl(`${item.title} — `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-5 inline-flex items-center gap-2 font-display text-[13px] font-semibold text-brand transition-all hover:gap-3"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.services.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
