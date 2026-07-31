import { Cpu, MessageCircle, PackageSearch } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappUrl } from "@/lib/business";

export default function Parts() {
  const { t } = useLanguage();

  return (
    <section id="parts" className="section-pad bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <span className="eyebrow">{t.parts.eyebrow}</span>
            <h2 className="h2-title mt-3">{t.parts.title}</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.parts.subtitle}</p>

            <div className="mt-6 rounded-2xl border border-brand/25 bg-brand-soft/70 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                <PackageSearch className="h-5 w-5" />
              </span>
              <p className="mt-3.5 text-[14px] leading-relaxed text-navy/85">{t.parts.note}</p>
              <a
                href={whatsappUrl(`${t.parts.cta}: `)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                {t.parts.cta}
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {t.parts.items.map((item, index) => (
              <Reveal key={item} delay={index * 45}>
                <div className="group flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-card">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ash-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Cpu className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="text-[14px] font-medium text-navy">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
