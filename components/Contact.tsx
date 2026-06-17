"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const offices = [
    {
      city: t("offices.haifa.city"),
      address: t("offices.haifa.address"),
      icon: <HaifaIcon />,
    },
    {
      city: t("offices.tlv.city"),
      address: t("offices.tlv.address"),
      icon: <TlvIcon />,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            {t("sectionLabel")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-navy-600 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone */}
            <a
              href={`tel:+972${t("phone").replace(/-/g, "").replace(/^0/, "")}`}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-navy-100 hover:border-gold-300 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800 group-hover:bg-gold-500 text-white flex items-center justify-center transition-colors">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs text-navy-500 font-medium mb-0.5 uppercase tracking-wide">
                  טלפון
                </p>
                <p className="text-lg font-bold text-navy-800 dir-ltr">
                  {t("phone")}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${t("email")}`}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-navy-100 hover:border-gold-300 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800 group-hover:bg-gold-500 text-white flex items-center justify-center transition-colors">
                <EmailIcon />
              </div>
              <div>
                <p className="text-xs text-navy-500 font-medium mb-0.5 uppercase tracking-wide">
                  אימייל
                </p>
                <p className="text-base font-semibold text-navy-800 dir-ltr">
                  {t("email")}
                </p>
              </div>
            </a>

            {/* Offices */}
            {offices.map((office) => (
              <div
                key={office.city}
                className="flex items-center gap-4 p-5 rounded-2xl border border-navy-100 bg-navy-50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white text-navy-700 flex items-center justify-center shadow-sm">
                  {office.icon}
                </div>
                <div>
                  <p className="text-xs text-navy-500 font-medium mb-0.5 uppercase tracking-wide">
                    משרד {office.city}
                  </p>
                  <p className="text-sm font-semibold text-navy-800">
                    {office.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-navy-50 rounded-3xl p-8 border border-navy-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">
                    {t("form.success")}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label={t("form.name")}
                      id="name"
                      type="text"
                      placeholder={t("form.namePlaceholder")}
                      required
                    />
                    <FormField
                      label={t("form.phone")}
                      id="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      required
                    />
                  </div>
                  <FormField
                    label={t("form.email")}
                    id="email"
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-navy-700 mb-1.5"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-gold-500 text-white py-4 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-60"
                  >
                    {loading ? (
                      <LoadingSpinner />
                    ) : (
                      <>
                        {t("form.submit")}
                        <SendIcon />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  type,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-navy-700 mb-1.5"
      >
        {label}
        {required && <span className="text-gold-500 ms-0.5">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm"
      />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function HaifaIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TlvIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
