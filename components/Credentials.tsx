"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const certs = [
  {
    src: "/images/cert1.jpg",
    alt: "תעודת הסמכה 1",
  },
  {
    src: "/images/cert2.jpg",
    alt: "תעודת הסמכה 2",
  },
  {
    src: "/images/cert3.jpg",
    alt: "תעודת הסמכה 3",
  },
];

export default function Credentials() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            אישורים ותעודות
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            הסמכות מקצועיות
          </h2>
          <p className="text-navy-600 max-w-xl mx-auto">
            {t("memberOf")}
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
          </div>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative rounded-2xl overflow-hidden border border-navy-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white cursor-zoom-in"
              aria-label={cert.alt}
            >
              {/* Certificate image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-800/0 group-hover:bg-navy-800/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <ZoomIcon />
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/70 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">לחץ להגדלה</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 end-4 z-10 w-9 h-9 rounded-full bg-navy-800/80 text-white flex items-center justify-center hover:bg-navy-900 transition-colors"
            >
              <XIcon />
            </button>

            {/* Nav prev */}
            {lightbox > 0 && (
              <button
                onClick={() => setLightbox(lightbox - 1)}
                className="absolute start-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-navy-800/80 text-white flex items-center justify-center hover:bg-navy-900 transition-colors"
              >
                <ChevronIcon dir="prev" />
              </button>
            )}

            {/* Nav next */}
            {lightbox < certs.length - 1 && (
              <button
                onClick={() => setLightbox(lightbox + 1)}
                className="absolute end-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-navy-800/80 text-white flex items-center justify-center hover:bg-navy-900 transition-colors"
              >
                <ChevronIcon dir="next" />
              </button>
            )}

            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              <Image
                src={certs[lightbox].src}
                alt={certs[lightbox].alt}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 pb-5">
              {certs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === lightbox ? "bg-gold-500" : "bg-navy-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ZoomIcon() {
  return (
    <svg className="w-5 h-5 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg className={`w-4 h-4 ${dir === "prev" ? "" : "rotate-180"} rtl:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}
