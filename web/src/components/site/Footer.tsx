import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

import AxveerCredit from "@/components/site/AxveerCredit";
import FlagIcon from "@/components/site/FlagIcon";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";
import Logo from "@/components/site/Logo";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, mapsDirectionsUrl, whatsappUrl } from "@/lib/business";
import { LOCALES } from "@/i18n/translations";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links: { id: string; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "parts", label: t.nav.parts },
    { id: "blog", label: t.nav.blog },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 circuit-grid opacity-40" />

      {/* Contact bar */}
      <div className="relative border-b border-white/10">
        <div className="container grid gap-5 py-7 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr_auto] lg:items-center">
          <a href={`tel:${BUSINESS.phoneMobileTel}`} className="group flex items-center gap-3.5">
            <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-[17px] font-bold">{BUSINESS.phoneMobileDisplay}</span>
              <span className="text-[12.5px] text-white/60">{t.contact.supportLabel}</span>
            </span>
          </a>
          <a href={`tel:${BUSINESS.phoneLandTel}`} className="group flex items-center gap-3.5">
            <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-[17px] font-bold">{BUSINESS.phoneLandDisplay}</span>
              <span className="text-[12.5px] text-white/60">{t.contact.landlineLabel}</span>
            </span>
          </a>
          <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3.5">
            <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110">
              <MapPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[14px] font-semibold leading-snug">
                {BUSINESS.addressLine1},<br className="hidden sm:block" /> {BUSINESS.addressLine2}
              </span>
              <span className="text-[12.5px] text-white/60">{BUSINESS.city}</span>
            </span>
          </a>
          <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1 lg:justify-end">
            {BUSINESS.social.facebook.length > 0 && (
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            )}
            {BUSINESS.social.instagram.length > 0 && (
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            )}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366]"
            >
              <svg viewBox="0 0 32 32" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                <path d="M16.04 4C9.9 4 4.92 8.98 4.92 15.12c0 2.13.6 4.12 1.63 5.81L4 28l7.26-2.5a11.1 11.1 0 0 0 4.78 1.09c6.14 0 11.12-4.98 11.12-11.12S22.18 4 16.04 4Zm0 20.18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-4.31 1.48 1.46-4.22-.2-.32a8.98 8.98 0 0 1-1.4-4.79c0-4.99 4.06-9.05 9.06-9.05 5 0 9.05 4.06 9.05 9.05s-4.06 9.05-9.05 9.05Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative container grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-[340px] text-[13.5px] leading-relaxed text-white/60">{t.footer.tagline}</p>
          <p className="mt-4 font-display text-[13px] italic text-brand">{t.footer.built}</p>
        </div>

        <div>
          <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white/90">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-[14px] text-white/65 transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white/90">
            {t.footer.languages}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {LOCALES.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[12.5px] text-white/75"
              >
                <FlagIcon locale={item} className="h-3.5 w-5" />
                {item.toUpperCase()}
              </span>
            ))}
          </div>
          <LanguageSwitcher variant="dark" className="mt-4 w-[170px]" />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-[12.5px] text-white/50 sm:flex-row">
          <span>
            © {year} {BUSINESS.name}. {t.footer.rights}
          </span>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
            <span className="font-medium text-white/60">{BUSINESS.domain}</span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 sm:block" />
            <AxveerCredit />
          </div>
        </div>
      </div>
    </footer>
  );
}
