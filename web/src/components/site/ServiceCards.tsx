import { Apple, ChevronRight, Cog, Laptop, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { ServiceId } from "@/i18n/translations";
import { servicePath } from "@/lib/seo";

export const SERVICE_ICONS: Record<ServiceId, LucideIcon> = {
  technical: Wrench,
  laptop: Laptop,
  apple: Apple,
  parts: Cog,
};

/** Four highlight cards sitting right under the hero. */
export default function ServiceCards() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative bg-ash-light pb-4 pt-8 sm:pb-8 sm:pt-12">
      <div className="container grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {t.services.items.map((item, index) => {
          const Icon = SERVICE_ICONS[item.id];
          return (
            <Reveal key={item.id} delay={index * 90}>
              <Link
                to={servicePath(locale, item.id)}
                className="card-base card-hover group flex h-full items-start gap-3.5 p-4 sm:flex-col sm:gap-4 sm:p-5"
              >
                <span className="icon-badge h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.1} />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[15px] font-semibold text-navy sm:text-[17px]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-ash sm:text-[14px]">{item.short}</span>
                </span>
                <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-ash/50 transition-transform group-hover:translate-x-0.5 group-hover:text-brand sm:hidden" />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
