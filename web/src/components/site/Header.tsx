import { Facebook, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import LanguageSwitcher from "@/components/site/LanguageSwitcher";
import Logo from "@/components/site/Logo";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";

const SECTIONS = ["home", "about", "services", "parts", "blog", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of SECTIONS) {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = useCallback(() => setMenuOpen(false), []);

  const navItems: { id: SectionId; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "parts", label: t.nav.parts },
    { id: "blog", label: t.nav.blog },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="container flex h-11 items-center justify-between gap-6 text-[13px]">
          <div className="flex items-center gap-6">
            <a href={`tel:${BUSINESS.phoneMobileTel}`} className="group flex items-center gap-2 transition-colors hover:text-brand">
              <Phone className="h-3.5 w-3.5 text-brand transition-transform group-hover:scale-110" />
              <span className="font-medium">{BUSINESS.phoneMobileDisplay}</span>
            </a>
            <a href={`tel:${BUSINESS.phoneLandTel}`} className="group flex items-center gap-2 transition-colors hover:text-brand">
              <Phone className="h-3.5 w-3.5 text-brand transition-transform group-hover:scale-110" />
              <span className="font-medium">{BUSINESS.phoneLandDisplay}</span>
            </a>
            <span className="flex items-center gap-2 text-white/75">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {BUSINESS.social.facebook.length > 0 && (
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 transition-colors hover:text-brand">
                <Facebook className="h-4 w-4" />
              </a>
            )}
            {BUSINESS.social.instagram.length > 0 && (
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 transition-colors hover:text-brand">
                <Instagram className="h-4 w-4" />
              </a>
            )}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-medium text-white transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <svg viewBox="0 0 32 32" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M16.04 4C9.9 4 4.92 8.98 4.92 15.12c0 2.13.6 4.12 1.63 5.81L4 28l7.26-2.5a11.1 11.1 0 0 0 4.78 1.09c6.14 0 11.12-4.98 11.12-11.12S22.18 4 16.04 4Zm0 20.18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-4.31 1.48 1.46-4.22-.2-.32a8.98 8.98 0 0 1-1.4-4.79c0-4.99 4.06-9.05 9.06-9.05 5 0 9.05 4.06 9.05 9.05s-4.06 9.05-9.05 9.05Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-border/70 bg-white/95 backdrop-blur-md transition-all duration-300",
          scrolled && "shadow-[0_10px_30px_-22px_rgba(13,27,42,0.5)]",
        )}
      >
        <div className={cn("container flex items-center justify-between gap-4 transition-all duration-300", scrolled ? "h-16 lg:h-[74px]" : "h-[68px] lg:h-[86px]")}>
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative px-3.5 py-2 font-display text-[13px] font-semibold uppercase tracking-wide transition-colors",
                  active === item.id ? "text-brand" : "text-navy/75 hover:text-brand",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-[3px] h-[3px] rounded-full bg-brand transition-transform duration-300",
                    active === item.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phoneMobileTel}`}
              className="hidden items-center gap-2 rounded-xl bg-brand px-4 py-2.5 font-display text-[13px] font-semibold text-white transition-all hover:bg-brand-bright hover:shadow-lift xl:flex"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneMobileDisplay}
            </a>
            <LanguageSwitcher className="w-[132px] sm:w-[148px]" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.topbar.menu}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-brand transition-colors hover:bg-ash-light lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", menuOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          onClick={close}
          className={cn("absolute inset-0 bg-navy/70 backdrop-blur-sm transition-opacity duration-300", menuOpen ? "opacity-100" : "opacity-0")}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-[360px] flex-col bg-white transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-colors hover:bg-ash-light"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={close}
                className={cn(
                  "rounded-xl px-4 py-3.5 font-display text-[15px] font-semibold uppercase tracking-wide transition-colors",
                  active === item.id ? "bg-brand-soft text-brand-ink" : "text-navy hover:bg-ash-light",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="space-y-2.5 border-t border-border p-4">
            <a href={`tel:${BUSINESS.phoneMobileTel}`} className="btn-primary w-full">
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneMobileDisplay}
            </a>
            <a href={`tel:${BUSINESS.phoneLandTel}`} className="btn-dark w-full">
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneLandDisplay}
            </a>
            <p className="pt-1 text-center text-[12px] leading-relaxed text-ash">
              {BUSINESS.addressLine1}
              <br />
              {BUSINESS.addressLine2}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
