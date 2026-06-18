import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#case-study", label: t("nav.caseStudy") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4 bg-white rounded-xl p-3 inline-block">
              <Image
                src="/images/logo.png"
                alt="גיל בן גלים - שמאות מקרקעין"
                width={130}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t("footer.member")}
            </p>
            {/* Gold accent line */}
            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-4">
              ניווט מהיר
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-4">
              פרטי קשר
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+972544484831"
                  className="flex items-center gap-2 text-white/55 hover:text-gold-400 text-sm transition-colors"
                >
                  <span className="text-gold-500/70">📞</span>
                  {t("contact.phone")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="flex items-center gap-2 text-white/55 hover:text-gold-400 text-sm transition-colors"
                >
                  <span className="text-gold-500/70">✉️</span>
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/55 text-sm">
                <span className="text-gold-500/70 mt-0.5">📍</span>
                <div>
                  <p>{t("contact.offices.tlv.address")}</p>
                  <p className="mt-1">{t("contact.offices.haifa.address")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-xs">
            &copy; {year} גיל בן גלים. {t("footer.rights")}.
          </p>
          <p className="text-white/25 text-xs">
            גיל בן גלים - שמאות מקרקעין
          </p>
        </div>
      </div>
    </footer>
  );
}
