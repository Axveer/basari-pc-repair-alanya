import { Check, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import ContactStrip from "@/components/site/ContactStrip";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Reveal from "@/components/site/Reveal";
import { SERVICE_ICONS } from "@/components/site/ServiceCards";
import StickyActionBar from "@/components/site/StickyActionBar";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { ServiceId } from "@/i18n/translations";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { servicePath } from "@/lib/seo";
import { homeHref } from "@/lib/utils";

interface ServicePageProps {
  serviceId: ServiceId;
}

/** Dedicated, indexable landing page for one service in the active language. */
export default function ServicePage({ serviceId }: ServicePageProps) {
  const { t, locale } = useLanguage();
  const item = t.services.items.find((entry) => entry.id === serviceId);
  if (!item) return null;

  const Icon = SERVICE_ICONS[serviceId];
  const others = t.services.items.filter((entry) => entry.id !== serviceId);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden bg-navy">
          <div className="absolute inset-0 circuit-grid opacity-40" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/20 blur-[110px]" />
          <div className="container relative py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
              <a href={homeHref(locale)} className="transition-colors hover:text-brand">
                {t.nav.home}
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <a href={homeHref(locale, "#services")} className="transition-colors hover:text-brand">
                {t.nav.services}
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/90">{item.title}</span>
            </nav>

            <div className="mt-6 flex items-start gap-4 sm:gap-5">
              <span className="icon-badge h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.1} />
              </span>
              <div>
                <h1 className="font-display text-[26px] font-bold leading-tight text-white sm:text-[34px] lg:text-[40px]">
                  {item.title}
                </h1>
                <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
                  {item.intro}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.phoneMobileTel}`} className="btn-primary">
                <Phone className="h-4 w-4" />
                {BUSINESS.phoneMobileDisplay}
              </a>
              <a
                href={whatsappUrl(`${item.title} — `)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <MessageCircle className="h-4 w-4" />
                {t.contact.whatsappCta}
              </a>
            </div>

            <div className="mt-7 flex gap-2.5 overflow-x-auto no-scrollbar">
              {t.badges.map((badge) => (
                <span
                  key={badge}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[11.5px] font-medium text-white/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section-pad">
          <div className="container grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <Reveal>
              <p className="text-[15px] leading-relaxed text-navy/85 sm:text-[16.5px]">{item.body}</p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{item.short}</p>

              <div className="mt-8 rounded-2xl border border-brand/25 bg-brand-soft/70 p-5 sm:p-6">
                <h2 className="font-display text-[18px] font-semibold text-navy sm:text-[20px]">
                  {t.servicePage.ctaTitle}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-navy/75">{t.servicePage.ctaBody}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`tel:${BUSINESS.phoneMobileTel}`} className="btn-primary">
                    <Phone className="h-4 w-4" />
                    {BUSINESS.phoneMobileDisplay}
                  </a>
                  <a
                    href={whatsappUrl(`${item.title} — `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="card-base p-5 sm:p-6">
                <h2 className="font-display text-[16px] font-semibold uppercase tracking-wide text-navy">
                  {t.servicePage.included}
                </h2>
                <ul className="mt-4 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-navy/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                        <Check className="h-3 w-3 text-brand" strokeWidth={3.2} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-ash-light/70 p-5">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-ash">
                  {t.servicePage.otherServices}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {others.map((other) => {
                    const OtherIcon = SERVICE_ICONS[other.id];
                    return (
                      <li key={other.id}>
                        <Link
                          to={servicePath(locale, other.id)}
                          className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-white"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand shadow-card transition-colors group-hover:bg-brand group-hover:text-white">
                            <OtherIcon className="h-4.5 w-4.5 h-[18px] w-[18px]" strokeWidth={2.2} />
                          </span>
                          <span className="flex-1 text-[14px] font-medium text-navy">{other.title}</span>
                          <ChevronRight className="h-4 w-4 text-ash/50 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactStrip />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyActionBar />
    </div>
  );
}
