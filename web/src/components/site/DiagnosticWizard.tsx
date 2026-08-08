import { ArrowLeft, Droplets, Laptop, MessageCircle, Monitor, MonitorOff, Phone, PlugZap, RotateCcw, Tablet, ThermometerSun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import Reveal from "@/components/site/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";

type DeviceKey = "laptop" | "macbook" | "pc" | "tablet";
type IssueKey = "screen" | "liquid" | "power" | "slow";

const DEVICE_ICONS: Record<DeviceKey, LucideIcon> = {
  laptop: Laptop,
  macbook: Laptop,
  pc: Monitor,
  tablet: Tablet,
};

const ISSUE_ICONS: Record<IssueKey, LucideIcon> = {
  screen: MonitorOff,
  liquid: Droplets,
  power: PlugZap,
  slow: ThermometerSun,
};

const DEVICE_KEYS: readonly DeviceKey[] = ["laptop", "macbook", "pc", "tablet"];
const ISSUE_KEYS: readonly IssueKey[] = ["screen", "liquid", "power", "slow"];

/** AppleLogo replacement so the MacBook option reads distinctly. */
function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.05 12.54c-.03-2.55 2.08-3.77 2.17-3.83-1.18-1.73-3.02-1.97-3.68-2-1.56-.16-3.05.92-3.84.92-.79 0-2.01-.9-3.31-.87-1.7.03-3.27.99-4.14 2.51-1.77 3.07-.45 7.61 1.27 10.1.84 1.22 1.85 2.58 3.16 2.53 1.27-.05 1.75-.82 3.28-.82 1.53 0 1.96.82 3.3.79 1.37-.02 2.23-1.24 3.06-2.46.97-1.41 1.36-2.78 1.38-2.85-.03-.01-2.64-1.01-2.67-4.02ZM14.5 4.9c.7-.85 1.17-2.02 1.04-3.19-1 .04-2.22.67-2.94 1.51-.65.75-1.21 1.95-1.06 3.1 1.12.09 2.26-.57 2.96-1.42Z" />
    </svg>
  );
}

/**
 * Two-step quote wizard (Spec 4.4): device → issue → prefilled WhatsApp
 * message in the visitor's language.
 */
export default function DiagnosticWizard() {
  const { t } = useLanguage();
  const [device, setDevice] = useState<DeviceKey | null>(null);
  const [issue, setIssue] = useState<IssueKey | null>(null);

  const step = device === null ? 1 : issue === null ? 2 : 3;

  const waHref = useMemo(() => {
    if (device === null || issue === null) return whatsappUrl(t.wizard.waIntro);
    return whatsappUrl(`${t.wizard.waIntro}\n• ${t.wizard.devices[device]}\n• ${t.wizard.issues[issue]}`);
  }, [device, issue, t]);

  const back = useCallback(() => {
    if (issue !== null) {
      setIssue(null);
      return;
    }
    setDevice(null);
  }, [issue]);

  const restart = useCallback(() => {
    setDevice(null);
    setIssue(null);
  }, []);

  return (
    <section id="quote" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">{t.wizard.eyebrow}</span>
          <h2 className="h2-title mt-3">{t.wizard.title}</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ash sm:text-[15.5px]">{t.wizard.subtitle}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-9 max-w-[760px] rounded-3xl border border-border bg-white p-5 shadow-card sm:p-8">
            {/* Step indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      n === step ? "w-8 bg-brand" : n < step ? "w-4 bg-brand/50" : "w-4 bg-ash-light",
                    )}
                  />
                ))}
              </div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ash transition-colors hover:text-brand"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t.wizard.back}
                </button>
              )}
            </div>

            {step === 1 && (
              <div className="mt-6">
                <h3 className="font-display text-[17px] font-semibold text-navy sm:text-[19px]">
                  {t.wizard.deviceTitle}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {DEVICE_KEYS.map((key) => {
                    const Icon = key === "macbook" ? AppleGlyph : DEVICE_ICONS[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setDevice(key)}
                        className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-white px-3 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-glow active:scale-95"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-[13.5px] font-semibold text-navy">{t.wizard.devices[key]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && device !== null && (
              <div className="mt-6">
                <h3 className="font-display text-[17px] font-semibold text-navy sm:text-[19px]">
                  {t.wizard.issueTitle}
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {ISSUE_KEYS.map((key) => {
                    const Icon = ISSUE_ICONS[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setIssue(key)}
                        className="group flex items-center gap-3.5 rounded-2xl border border-border bg-white px-4 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-glow active:scale-[0.98]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-[14px] font-semibold leading-snug text-navy">{t.wizard.issues[key]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && device !== null && issue !== null && (
              <div className="mt-6 text-center">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-ash">
                  {t.wizard.summaryTitle}
                </h3>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full bg-brand-soft px-4 py-1.5 text-[14px] font-semibold text-brand-ink">
                    {t.wizard.devices[device]}
                  </span>
                  <span className="rounded-full bg-brand-soft px-4 py-1.5 text-[14px] font-semibold text-brand-ink">
                    {t.wizard.issues[issue]}
                  </span>
                </div>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-display text-[15px] font-bold uppercase tracking-wide text-white shadow-[0_14px_30px_-12px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.01] active:scale-[0.98] sm:w-auto sm:min-w-[320px]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t.wizard.cta}
                </a>
                <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                  <a
                    href={`tel:${BUSINESS.phoneMobileTel}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors hover:text-brand-ink"
                  >
                    <Phone className="h-4 w-4" />
                    {t.wizard.call}: {BUSINESS.phoneMobileDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ash transition-colors hover:text-navy"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    {t.wizard.restart}
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
