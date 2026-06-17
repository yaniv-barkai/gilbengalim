import { useTranslations } from "next-intl";

export default function CaseStudy() {
  const t = useTranslations("caseStudy");

  return (
    <section id="case-study" className="py-24 bg-navy-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 end-0 w-1/2 h-full bg-gradient-to-l from-gold-50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            {t("sectionLabel")}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 max-w-lg">
              {t("title")}
            </h2>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800 text-white text-xs font-semibold">
                <LocationIcon />
                {t("location")}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold border border-gold-200">
                {t("tag")}
              </span>
            </div>
          </div>
          <div className="mt-5 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent" />
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left: Timeline */}
          <div className="lg:col-span-3 space-y-0">
            <TimelineStep
              number="01"
              label={t("challenge")}
              text={t("challengeText")}
              color="red"
              last={false}
            />
            <TimelineStep
              number="02"
              label={t("solution")}
              text={t("solutionText")}
              color="blue"
              last={false}
            />
            <TimelineStep
              number="03"
              label={t("result")}
              text={t("resultText")}
              color="green"
              last
            />
          </div>

          {/* Right: Result card */}
          <div className="lg:col-span-2 sticky top-28">
            {/* Big saving number */}
            <div className="bg-navy-800 rounded-3xl p-8 text-white mb-4 relative overflow-hidden">
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
              <div className="absolute -bottom-8 -end-8 w-40 h-40 rounded-full bg-gold-500/10 blur-2xl" />

              <p className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <TrophyIcon />
                {t("saving")}
              </p>
              <p className="text-5xl sm:text-6xl font-black text-white mb-1 leading-none">
                {t("savingAmount")}
              </p>
              <p className="text-white/50 text-sm mt-4 leading-relaxed">
                {t("resultText")}
              </p>
            </div>

            {/* Article link */}
            <a
              href="https://www.nadlancenter.co.il/article/4875"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-navy-100 hover:border-gold-300 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-600 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors flex-shrink-0">
                  <NewspaperIcon />
                </div>
                <div>
                  <p className="text-xs text-navy-500 mb-0.5">nadlancenter.co.il</p>
                  <p className="text-sm font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">
                    {t("readMore")}
                  </p>
                </div>
              </div>
              <svg className="w-4 h-4 text-navy-400 group-hover:text-gold-500 rtl:rotate-180 transition-all group-hover:translate-x-0.5 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  number,
  label,
  text,
  color,
  last,
}: {
  number: string;
  label: string;
  text: string;
  color: "red" | "blue" | "green";
  last: boolean;
}) {
  const colors = {
    red: "bg-red-100 text-red-700 border-red-200",
    blue: "bg-navy-100 text-navy-700 border-navy-200",
    green: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };
  const dotColors = {
    red: "bg-red-400",
    blue: "bg-navy-600",
    green: "bg-emerald-500",
  };
  const numColors = {
    red: "text-red-200",
    blue: "text-navy-200",
    green: "text-emerald-200",
  };

  return (
    <div className="flex gap-5">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${dotColors[color]}`} />
        {!last && <div className="w-0.5 flex-1 mt-2 bg-navy-200 min-h-8" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${last ? "pb-0" : ""} flex-1`}>
        <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${colors[color]}`}>
              {label}
            </span>
            <span className={`text-3xl font-black ${numColors[color]}`}>{number}</span>
          </div>
          <p className="text-navy-700 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
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
    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
