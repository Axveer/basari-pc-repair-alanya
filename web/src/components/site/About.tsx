import { Check } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { asset } from "@/lib/utils";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-24 w-24 rounded-tl-3xl border-l-[3px] border-t-[3px] border-brand/40 sm:block" />
            <div className="relative overflow-hidden rounded-2xl bg-navy shadow-card">
              <img
                src={asset("img/hero-shop.webp")}
                alt="Başarı Bilgisayar"
                width={1000}
                height={585}
                className="h-[260px] w-full object-cover object-center sm:h-[340px] lg:h-[420px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2.5 backdrop-blur-sm">
                <span className="block font-display text-[22px] font-extrabold leading-none text-brand">
                  {t.about.stats[0]?.value}
                </span>
                <span className="text-[11.5px] font-medium uppercase tracking-wide text-ash">
                  {t.about.stats[0]?.label}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="h2-title mt-3">{t.about.title}</h2>
            <p className="mt-4 font-display text-[16px] font-semibold text-brand sm:text-[18px]">{t.about.lead}</p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.about.body1}</p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.about.body2}</p>
          </Reveal>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {t.about.points.map((point, index) => (
              <Reveal as="li" key={point} delay={index * 70}>
                <span className="flex items-start gap-2.5 text-[14px] leading-snug text-navy">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                    <Check className="h-3 w-3 text-brand" strokeWidth={3.2} />
                  </span>
                  {point}
                </span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {t.about.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="rounded-xl border border-border bg-ash-light/70 px-3 py-3.5 text-center transition-colors hover:border-brand/40">
                  <span className="block font-display text-[20px] font-extrabold leading-none text-navy sm:text-[24px]">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[11.5px] font-medium leading-tight text-ash">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
