import { useTranslations } from "next-intl";

export default function CaseStudy() {
  const t = useTranslations("caseStudy");

  return (
    <section id="case-study" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
            {t("sectionLabel")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-sm font-medium">
              <LocationIcon />
              {t("location")}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium">
              {t("tag")}
            </span>
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <CaseCard
            step="01"
            icon={<ChallengeIcon />}
            title={t("challenge")}
            text={t("challengeText")}
          />
          <CaseCard
            step="02"
            icon={<SolutionIcon />}
            title={t("solution")}
            text={t("solutionText")}
            highlight
          />
          <CaseCard
            step="03"
            icon={<ResultIcon />}
            title={t("result")}
            text={t("resultText")}
          />
        </div>

        {/* Result banner */}
        <div className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-start">
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest mb-1">
              {t("saving")}
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-white">
              {t("savingAmount")}
            </p>
          </div>
          <div className="hidden sm:block h-16 w-px bg-gold-500/30" />
          <div className="flex flex-col items-center sm:items-end gap-3">
            <p className="text-white/70 text-sm max-w-xs text-center sm:text-end">
              {t("resultText")}
            </p>
            <a
              href="https://www.nadlancenter.co.il/article/4875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors group"
            >
              {t("readMore")}
              <svg
                className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  step,
  icon,
  title,
  text,
  highlight = false,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-7 border transition-all ${
        highlight
          ? "bg-gold-500/15 border-gold-500/40 shadow-lg shadow-gold-500/10"
          : "bg-white/5 border-white/10 hover:bg-white/8"
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className={`p-3 rounded-xl ${
            highlight ? "bg-gold-500/20 text-gold-300" : "bg-white/10 text-white/70"
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-4xl font-black tabular-nums ${
            highlight ? "text-gold-500/30" : "text-white/10"
          }`}
        >
          {step}
        </span>
      </div>
      <h3
        className={`text-lg font-bold mb-3 ${
          highlight ? "text-gold-300" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p className="text-white/65 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ChallengeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function SolutionIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function ResultIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
