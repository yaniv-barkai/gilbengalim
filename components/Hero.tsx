import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        {/* Layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/75 to-navy-950/90" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-300 text-sm font-medium tracking-widest uppercase">
            {t("tagline")}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
          {t("title")}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl font-medium text-white/90 mb-3">
          {t("subtitle")}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gold-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <div className="h-px w-16 bg-gold-500/60" />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-gold-500/30 hover:shadow-gold-400/40 hover:scale-105"
          >
            {t("ctaContact")}
            <ArrowIcon />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-base backdrop-blur-sm transition-all"
          >
            {t("ctaServices")}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <a href="#services" className="text-white/40 hover:text-white/70 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-x-0.5 rtl:rotate-180"
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
  );
}
