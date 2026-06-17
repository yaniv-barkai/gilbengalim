import { useTranslations } from "next-intl";

const serviceIcons: Record<string, React.ReactNode> = {
  taxation: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  betterment: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  appraisal: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  landAuthority: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  valueDecline: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
  realEstateEconomics: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="group relative bg-white rounded-2xl p-7 border border-navy-100 hover:border-gold-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Hover accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-50 text-navy-800 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors duration-300 mb-5">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-navy-900">
        {title}
      </h3>
      <p className="text-navy-600 text-sm leading-relaxed">{description}</p>

      {/* Arrow indicator */}
      <div className="mt-5 flex items-center gap-1.5 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
