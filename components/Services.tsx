import { useTranslations } from "next-intl";

const serviceIcons: Record<string, React.ReactNode> = {
  taxation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  betterment: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  appraisal: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  landAuthority: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  valueDecline: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
  realEstateEconomics: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

const serviceKeys = [
  "taxation",
  "betterment",
  "appraisal",
  "landAuthority",
  "valueDecline",
  "realEstateEconomics",
] as const;

const cardAccents = [
  "from-gold-50/90 via-white to-white",
  "from-navy-50/90 via-white to-white",
  "from-white via-gold-50/50 to-white",
  "from-white via-navy-50/60 to-white",
  "from-gold-50/70 via-white to-navy-50/50",
  "from-navy-50/70 via-white to-gold-50/50",
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            {t("sectionLabel")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, index) => (
            <ServiceCard
              key={key}
              icon={serviceIcons[key]}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const delay = index * 0.08;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br ${cardAccents[index % cardAccents.length]} p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-300 hover:shadow-2xl hover:shadow-navy-900/10`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Hover accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -left-12 -top-12 h-28 w-28 rounded-full bg-gold-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className="absolute -bottom-16 -right-14 h-32 w-32 rounded-full bg-navy-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />

      {/* Icon */}
      <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/85 text-navy-800 shadow-sm ring-1 ring-navy-100 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105 group-hover:border-gold-200 group-hover:text-gold-600 group-hover:shadow-lg group-hover:shadow-gold-500/15 group-hover:ring-gold-100">
        <span className="absolute inset-1 rounded-[1rem] bg-gradient-to-br from-gold-50 to-navy-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative">{icon}</span>
        <span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-gold-400 shadow-sm shadow-gold-500/40 transition-transform duration-500 group-hover:scale-125" />
      </div>

      {/* Content */}
      <h3 className="relative mb-3 text-lg font-bold text-navy-800 transition-colors duration-300 group-hover:text-navy-900">
        {title}
      </h3>
      <p className="relative text-sm leading-relaxed text-navy-600">{description}</p>

      {/* Arrow indicator */}
      <div className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-gold-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        <a href="#contact" className="hover:underline">
          פנו אלינו
        </a>
        <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
}
