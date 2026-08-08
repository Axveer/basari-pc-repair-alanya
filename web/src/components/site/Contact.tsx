import { Clock, MapPin, MessageCircle, Navigation, Phone, Send } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, mapsDirectionsUrl, mapsEmbedUrl, whatsappUrl } from "@/lib/business";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const update = useCallback((key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const submit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { name, phone, message, email, service } = form;
      if (name.trim().length === 0 || phone.trim().length === 0 || message.trim().length === 0) {
        toast.error(t.contact.form.error);
        return;
      }
      const lines = [
        `${t.contact.form.name}: ${name}`,
        `${t.contact.form.phone}: ${phone}`,
        email.trim().length > 0 ? `${t.contact.form.email}: ${email}` : null,
        service.trim().length > 0 ? `${t.contact.form.service}: ${service}` : null,
        "",
        message,
      ].filter((line): line is string => line !== null);

      window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
      toast.success(t.contact.form.success);
      setForm(EMPTY_FORM);
    },
    [form, t],
  );

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="h2-title mt-3">{t.contact.title}</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          {/* Contact details + map */}
          <div className="space-y-4">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={`tel:${BUSINESS.phoneMobileTel}`} className="card-base card-hover group p-5">
                  <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="mt-3.5 block font-display text-[17px] font-bold text-navy">
                    {BUSINESS.phoneMobileDisplay}
                  </span>
                  <span className="text-[12.5px] text-ash">{t.contact.supportLabel}</span>
                </a>
                <a href={`tel:${BUSINESS.phoneLandTel}`} className="card-base card-hover group p-5">
                  <span className="icon-badge h-11 w-11 transition-transform group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="mt-3.5 block font-display text-[17px] font-bold text-navy">
                    {BUSINESS.phoneLandDisplay}
                  </span>
                  <span className="text-[12.5px] text-ash">{t.contact.landlineLabel}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-base p-5">
                <div className="flex items-start gap-3.5">
                  <span className="icon-badge h-11 w-11">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                      {t.contact.addressLabel}
                    </span>
                    <p className="mt-1.5 text-[14.5px] font-semibold leading-snug text-navy">
                      {BUSINESS.addressLine1}
                      <br />
                      {BUSINESS.addressLine2}
                    </p>
                    <p className="mt-1 text-[13px] text-ash">{BUSINESS.city}</p>
                    <p className="mt-2.5 flex items-center gap-1.5 text-[13px] font-medium text-navy/80">
                      <Clock className="h-3.5 w-3.5 text-brand" />
                      <span>
                        <span className="font-bold uppercase tracking-wide text-[11px] text-brand">{t.contact.hoursLabel}:</span>{" "}
                        {t.contact.hoursValue}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand/40 px-4 py-2.5 font-display text-[13px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <Navigation className="h-4 w-4" />
                    {t.contact.directions}
                  </a>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 font-display text-[13px] font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.contact.whatsappCta}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <iframe
                  title="Başarı Bilgisayar — Alanya"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[240px] w-full border-0 sm:h-[280px]"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={60}>
            <form onSubmit={submit} className="card-base h-full p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="name">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    className="field"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder={t.contact.form.namePh}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="phone">
                    {t.contact.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="field"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    placeholder={t.contact.form.phonePh}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="email">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="field"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    placeholder={t.contact.form.emailPh}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="service">
                    {t.contact.form.service}
                  </label>
                  <select
                    id="service"
                    className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B7280%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px_18px] bg-[right_0.9rem_center] bg-no-repeat pr-10"
                    value={form.service}
                    onChange={(event) => update("service", event.target.value)}
                  >
                    <option value="">{t.contact.form.servicePh}</option>
                    {t.services.items.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="field-label" htmlFor="message">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="field resize-none"
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder={t.contact.form.messagePh}
                />
              </div>

              <button type="submit" className="btn-primary mt-5 w-full">
                <Send className="h-4 w-4" />
                {t.contact.form.submit}
              </button>
              <p className="mt-3 text-center text-[12px] text-ash">{t.contact.form.privacy}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
