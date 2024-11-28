import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Languages } from "@/lib/types/languages";
import { NextIntlClientProvider } from "next-intl";
import Providers from "../providers";

const inter = localFont({
  src: "../fonts/InterVariable.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Code Solutions | Soluções em Código",
  description: "Soluções Tecnológicas Para Seu Negócio",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {

  const messages = await getMessages()

  const { locale } = await params

  if (!routing.locales.includes(locale as Languages)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="!scroll-smooth">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-inter w-full z-auto min-h-screen dark:bg-zinc-900 bg-[#F7FAFC]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}