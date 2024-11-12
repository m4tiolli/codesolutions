import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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
      <body
        className={`${inter.variable} antialiased font-inter w-screen min-h-screen`}
      >
        <Header />
        <main className="px-[10vw] py-[5vh] min-h-[90dvh] relative">
          {children}
        </main>
      </body>
    </html>
  );
}
