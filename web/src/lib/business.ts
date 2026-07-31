/** Single source of truth for Başarı Bilgisayar contact details. */
export const BUSINESS = {
  name: "Başarı Bilgisayar",
  domain: "basarinet.com",
  since: 1999,
  phoneMobileDisplay: "0532 676 64 76",
  phoneMobileTel: "+905326766476",
  phoneLandDisplay: "0242 511 11 12",
  phoneLandTel: "+902425111112",
  whatsapp: "905326766476",
  addressLine1: "Kadıpaşa Mahallesi, Bostancı Pınar Caddesi",
  addressLine2: "25 metreyol Türkcell Plaza Arkası",
  city: "Alanya / Antalya",
  mapsQuery: "Kadıpaşa Mahallesi Bostancı Pınar Caddesi Alanya Antalya",
  /** Optional social profiles — leave empty to hide the icon. */
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}&hl=tr&z=16&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`;

/** Builds a wa.me link with an optional prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  return message && message.trim().length > 0 ? `${base}?text=${encodeURIComponent(message)}` : base;
}
