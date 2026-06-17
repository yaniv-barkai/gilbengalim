import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    {
      value: t("experienceYears"),
      label: t("stats.experience"),
    },
    {
      value: t("casesHandled"),
      label: t("stats.cases"),
    },
    {
      value: t("averageSavings"),
      label: t("stats.savings"),
    },
  ];

  return (
    <section id="about" className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Background decorative shape */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-navy-800/10 to-gold-500/10" />
              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="גיל בן גלים"
                  className="w-full h-96 lg:h-[520px] object-cover object-top"
                />
                {/* Credential badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent px-6 py-8">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {t("memberOf")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="hidden lg:block lg:absolute lg:-bottom-8 lg:-end-8 bg-white rounded-2xl shadow-xl p-5 border border-navy-100">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-navy-600 font-medium">
                  {t("credential")}
                </span>
              </div>
              <p className="text-2xl font-bold text-navy-800">
                {t("experienceYears")}
              </p>
              <p className="text-sm text-navy-600">{t("stats.experience")}</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
              {t("sectionLabel")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-2">
              {t("title")}
            </h2>
            <p className="text-xl text-gold-600 font-medium mb-6">
              {t("credential")}
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-navy-700 leading-relaxed">{t("bio")}</p>
              <p className="text-navy-600 leading-relaxed">{t("bio2")}</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl border border-navy-100 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-navy-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-navy-500 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white px-6 py-3.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg group"
            >
              <span>צרו קשר</span>
              <svg
                className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
