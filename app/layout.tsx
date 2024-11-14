import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";

const inter = localFont({
  src: "./fonts/InterVariable.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Code Solutions | Soluções em Código",
  description: "Soluções Tecnológicas Para Seu Negócio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
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
        className={`${inter.variable} antialiased font-inter w-full min-h-screen dark:bg-zinc-900 bg-[#F7FAFC]`}
      >
        <Providers>
          <Header />
          <main className="px-[10vw] py-[5vh] min-h-[90dvh] pb-[5dvh] relative flex flex-col items-start justify-start gap-12 scroll-smooth">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
