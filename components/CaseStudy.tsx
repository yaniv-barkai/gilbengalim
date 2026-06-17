import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

export default function CaseStudy() {
  const t = useTranslations("caseStudy");
  const steps = [
    {
      number: "01",
      label: t("challenge"),
      text: t("challengeText"),
      tone: "rose",
      icon: <AlertIcon />,
    },
    {
      number: "02",
      label: t("solution"),
      text: t("solutionText"),
      tone: "gold",
      icon: <StrategyIcon />,
    },
    {
      number: "03",
      label: t("result"),
      text: t("resultText"),
      tone: "emerald",
      icon: <CheckIcon />,
    },
  ] as const;

  return (
    <section id="case-study" className="relative overflow-hidden bg-navy-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,160,80,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(58,100,153,0.32),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
      <div className="absolute -top-24 end-10 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute bottom-10 start-8 h-44 w-44 rounded-full border border-gold-300/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              {t("sectionLabel")}
            </span>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              {t("title")}
            </h2>
            <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-transparent" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <LocationIcon />
              {t("location")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gold-300/30 bg-gold-300/15 px-4 py-2 text-sm font-semibold text-gold-200">
              {t("tag")}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-gold-300/10" />
            <div className="absolute -end-20 top-8 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-gold-300">
                  <TrophyIcon />
                  {t("saving")}
                </p>
                <p className="text-6xl font-black leading-none tracking-tight text-white sm:text-7xl">
                  {t("savingAmount")}
                </p>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                  {t("resultText")}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <MetricCard label={t("claimedAppreciation")} value="1,327,900" />
                <MetricCard label={t("saving")} value={t("savingAmount")} highlighted />
                <MetricCard label={t("finalCharge")} value={t("finalChargeAmount")} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              {steps.map((step) => (
                <CaseStep key={step.number} {...step} />
              ))}
            </div>

            <a
              href="https://www.nadlancenter.co.il/article/4875"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-lg shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300/40 hover:bg-white/[0.12]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold-300 transition-colors group-hover:bg-gold-300 group-hover:text-navy-950">
                  <NewspaperIcon />
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-white/45">nadlancenter.co.il</p>
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-gold-200">
                    {t("readMore")}
                  </p>
                </div>
              </div>
              <svg className="w-4 h-4 text-white/50 transition-all group-hover:translate-x-0.5 group-hover:text-gold-200 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
}) {
  return (
    <div className={`rounded-2xl border p-4 ${highlighted ? "border-gold-300/40 bg-gold-300/15" : "border-white/10 bg-white/[0.07]"}`}>
      <p className="text-xs font-semibold text-white/50">{label}</p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function CaseStep({
  number,
  label,
  text,
  tone,
  icon,
}: {
  number: string;
  label: string;
  text: string;
  tone: "rose" | "gold" | "emerald";
  icon: ReactNode;
}) {
  const tones = {
    rose: "border-rose-300/20 bg-rose-300/10 text-rose-100",
    gold: "border-gold-300/25 bg-gold-300/10 text-gold-100",
    emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  };

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-lg shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.11] sm:p-6">
      <div className="absolute end-5 top-4 text-5xl font-black leading-none text-white/[0.04]">{number}</div>
      <div className="relative flex gap-4">
        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border ${tones[tone]}`}>
          {icon}
        </div>
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">{number}</span>
            <h3 className="text-lg font-bold text-white">{label}</h3>
          </div>
          <p className="text-sm leading-relaxed text-white/68 sm:text-base">{text}</p>
        </div>
      </div>
    </article>
  );
}

function LocationIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-4 h-4 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21H5a2 2 0 01-2-2v-1a4 4 0 014-4h10a4 4 0 014 4v1a2 2 0 01-2 2h-3M12 3v10m0 0a4 4 0 01-4-4V5h8v4a4 4 0 01-4 4z" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 6.75V15m0 0l-3-3m3 3l3-3m3-4.5V15m0 0l-3-3m3 3l3-3M4 19.5h16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
