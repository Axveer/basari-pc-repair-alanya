import { useEffect, useState } from "react";

import { whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";

/** Floating WhatsApp button — the fastest contact route for tourists. */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_14px_34px_-10px_rgba(37,211,102,0.8)] transition-all duration-500 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7 sm:flex sm:h-16 sm:w-16",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/60" aria-hidden="true" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M16.04 4C9.9 4 4.92 8.98 4.92 15.12c0 2.13.6 4.12 1.63 5.81L4 28l7.26-2.5a11.1 11.1 0 0 0 4.78 1.09c6.14 0 11.12-4.98 11.12-11.12S22.18 4 16.04 4Zm0 20.18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-4.31 1.48 1.46-4.22-.2-.32a8.98 8.98 0 0 1-1.4-4.79c0-4.99 4.06-9.05 9.06-9.05 5 0 9.05 4.06 9.05 9.05s-4.06 9.05-9.05 9.05Zm5.2-6.76c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.91-.9 1.1-.17.19-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.17-.29-.02-.44.12-.58.14-.14.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.53-.87-2.09-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 .96-1 2.35s1.02 2.73 1.16 2.92c.14.19 2 3.19 4.85 4.35 2.85 1.15 2.85.77 3.37.72.52-.05 1.66-.68 1.9-1.34.24-.65.24-1.21.17-1.33-.07-.11-.26-.19-.54-.33Z" />
      </svg>
    </a>
  );
}
