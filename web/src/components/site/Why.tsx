import { BadgeCheck, Clock, Languages, Search, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

const ICONS: LucideIcon[] = [Search, ShieldCheck, Clock, Users, Languages, BadgeCheck];

export default function Why() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-24">
      <div className="absolute inset-0 circuit-grid opacity-50" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow text-brand">{t.why.eyebrow}</span>
          <h2 className="mt-3 font-display text-[26px] font-bold leading-tight text-white sm:text-[32px] md:text-[40px]">
            {t.why.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, index) => {
            const Icon = ICONS[index] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/[0.08]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
