import { setRequestLocale } from "next-intl/server";
import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";
import Section6 from "@/components/sections/section6";

export const dynamic = 'force-dynamic'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale);
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}