import { useTranslations } from "next-intl";

const PRO_PROFILE_URL =
  "https://www.pro.co.il/real-estate-appraisers/business-id-15683";

const reviewKeys = ["eliezer", "giora", "racheli", "hagit"] as const;

export default function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-8 sm:p-10 text-white shadow-2xl">
            <div className="absolute -top-20 -end-20 w-48 h-48 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -start-16 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-3 py-1 text-sm font-semibold text-gold-300">
                <StarIcon />
                {t("source")}
              </span>

              <div className="mt-8 flex items-end gap-3">
                <span className="text-6xl sm:text-7xl font-black tracking-tight">
                  {t("rating")}
                </span>
                <span className="mb-3 text-lg font-semibold text-white/75">
                  {t("outOf")}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-1 text-gold-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="w-6 h-6 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                {t("summary")}
              </p>

              <a
                href={PRO_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-gold-400/30"
              >
                {t("cta")}
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          <div>
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
              {t("sectionLabel")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              {t("title")}
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mb-8">
              {t("subtitle")}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reviewKeys.map((key) => (
                <article
                  key={key}
                  className="rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-semibold leading-relaxed text-navy-800">
                    “{t(`quotes.${key}`)}”
                  </blockquote>
                  <footer className="mt-5 border-t border-navy-100 pt-4">
                    <p className="font-bold text-navy-800">
                      {t(`people.${key}.name`)}
                    </p>
                    <p className="text-sm text-navy-500">
                      {t(`people.${key}.location`)} · {t(`people.${key}.date`)}
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.174 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
