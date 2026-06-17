"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "he" ? "en" : "he";
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#case-study", label: t("caseStudy") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-navy-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex flex-col leading-tight group">
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-navy-800" : "text-white"
              } group-hover:text-gold-500`}
            >
              גיל בן גלים
            </span>
            <span
              className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                scrolled ? "text-navy-600" : "text-white/80"
              }`}
            >
              שמאות מקרקעין
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  scrolled ? "text-navy-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={switchLocale}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                scrolled
                  ? "border-navy-200 text-navy-700 hover:border-gold-500 hover:text-gold-500"
                  : "border-white/40 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {locale === "he" ? "EN" : "עב"}
            </button>

            {/* Call CTA */}
            <a
              href="tel:+972544484831"
              className="hidden md:flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <PhoneIcon />
              {t("callNow")}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-navy-700" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-navy-700 font-medium py-2.5 px-3 rounded-lg hover:bg-navy-50 hover:text-gold-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-navy-100">
              <a
                href="tel:+972544484831"
                className="flex-1 flex items-center justify-center gap-2 bg-gold-500 text-white py-2.5 rounded-lg font-semibold text-sm"
              >
                <PhoneIcon />
                {t("callNow")}
              </a>
              <button
                onClick={switchLocale}
                className="px-4 py-2.5 border border-navy-200 rounded-lg text-navy-700 text-sm font-semibold"
              >
                {locale === "he" ? "EN" : "עב"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
