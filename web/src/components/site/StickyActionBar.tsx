import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky conversion bar (Spec 4.3): WhatsApp instant quote +
 * direct call. Slides in once the visitor scrolls past the hero.
 */
export default function StickyActionBar() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy/10 bg-white shadow-[0_-10px_28px_rgba(13,27,42,0.14)] transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={whatsappUrl(t.wizard.waIntro)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 font-display text-[14px] font-bold text-white active:opacity-90"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M16.04 4C9.9 4 4.92 8.98 4.92 15.12c0 2.13.6 4.12 1.63 5.81L4 28l7.26-2.5a11.1 11.1 0 0 0 4.78 1.09c6.14 0 11.12-4.98 11.12-11.12S22.18 4 16.04 4Zm0 20.18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-4.31 1.48 1.46-4.22-.2-.32a8.98 8.98 0 0 1-1.4-4.79c0-4.99 4.06-9.05 9.06-9.05 5 0 9.05 4.06 9.05 9.05s-4.06 9.05-9.05 9.05Z" />
        </svg>
        WhatsApp
      </a>
      <a
        href={`tel:${BUSINESS.phoneMobileTel}`}
        className="flex items-center justify-center gap-2 bg-brand py-3.5 font-display text-[14px] font-bold text-white active:opacity-90"
      >
        <Phone className="h-4.5 w-4.5 h-[18px] w-[18px]" />
        {t.hero.callNow}
      </a>
    </div>
  );
}
