import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "גיל בן גלים - שמאות מקרקעין | Gil Ben Galim - Real Estate Appraisal",
  description:
    "כלכלן ושמאי מקרקעין מוסמך. הפחתת היטל השבחה, מיסוי מקרקעין, הערכת שווי נכסים. Certified real estate appraiser - betterment levy, property valuation, taxation.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
