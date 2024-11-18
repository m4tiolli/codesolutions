"use client"
import companies from "@/datas/companies";
import ratings from "@/datas/ratings";
import thingsWeDo from "@/datas/weDo";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import starFilled from '@/datas/ratings/star-fill.svg'
import starOutline from '@/datas/ratings/star-outline.svg'
import ourNumbers from "@/datas/ourNumbers";
import { useContext } from "react";
import { Context } from "../providers";
import { useTranslations } from "next-intl";

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2
  }
};

export default function Home() {

  const t = useTranslations('section1');

  const context = useContext(Context);

  if (!context) {
    throw new Error("Contexto não encontrado.");
  }

  const { section1Ref, section2Ref } = context;

  return (
    <>
      <div ref={section1Ref} className="rounded-md bg-home bg-cover w-full lg:w-auto lg:aspect-[10/4.5]">
        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col items-start justify-center px-10 py-10 lg:py-0 rounded-md gap-6">
          <h1 className="lg:text-6xl text-4xl text-balance text-white font-black">{t("title")}</h1>
          <p className="text-white font-normal text-[16px] ">{t("description")}</p>
          <button className="button">Get in touch</button>
        </div>
      </div>

      <div ref={section2Ref} className="flex flex-col items-start justify-start gap-4 w-full lg:w-auto">
        <h1 className="font-black text-4xl dark:text-zinc-200 text-preto">What we do</h1>
        <p className="font-normal text-[16px] dark:text-zinc-200 text-preto lg:w-4/5 text-balance">Our team has experience in a wide range of technologies, frameworks, and platforms. We provide high-quality, custom software development services tailored to your specific needs.</p>

        <div className="lg:grid grid-cols-5 gap-3 pt-8 hidden things-pai">
          {thingsWeDo.map((thing, index) => (
            <div className="bg-[#F7FAFC] dark:bg-zinc-900 border border-[#ccd6eb] rounded-md px-3 py-6 flex flex-col items-start justify-start gap-2" key={index}>
              <Image src={thing.icon} alt="Icon" />
              <h1 className="font-bold dark:text-zinc-200 text-preto text-md">{thing.title}</h1>
              <p className="font-normal dark:text-blue-100 text-[#4566A1] text-sm">{thing.description}</p>
            </div>
          ))}
        </div>

        <Carousel className="lg:hidden w-full pt-8" responsive={responsive} showDots={false} infinite autoPlay autoPlaySpeed={5000} removeArrowOnDeviceType="mobile" deviceType="mobile" draggable swipeable sliderClass="itemcarrossa">
          {thingsWeDo.map((thing, index) => (
            <div className="bg-[#F7FAFC] dark:bg-zinc-900 h-60 border border-[#ccd6eb] rounded-md px-3 py-6 flex flex-col items-start justify-start gap-2" key={index}>
              <Image src={thing.icon} alt="Icon" />
              <h1 className="font-bold dark:text-zinc-200 text-preto text-md">{thing.title}</h1>
              <p className="font-normal dark:text-blue-100 text-[#4566A1] text-sm">{thing.description}</p>
            </div>
          ))}
        </Carousel>

      </div>
      <div className="flex flex-col items-start justify-start gap-4 w-full">
        <h1 className="font-black text-4xl dark:text-zinc-200 text-preto">Why choose CodeSolutions?</h1>
        <p className="font-normal text-[16px] dark:text-zinc-200 text-preto lg:w-4/5 text-balance">When you work with CodeSol, you&apos;re not just hiring a team of developers. You&apos;re partnering with a company that&apos;s dedicated to delivering exceptional software solutions. Here are a few reasons why clients choose us for their development needs:</p>

        <div className="lg:flex items-center justify-between gap-0 w-full pt-8 hidden">
          {companies.map((company, index) => (
            <div className="flex flex-col items-start justify-start w-fit" key={index}>
              <Image src={company.image} alt="Icon" />
              <h1 className="font-medium dark:text-zinc-200 text-preto text-md pt-2">{company.name}</h1>
              <p className="font-normal dark:text-blue-100 text-[#4566A1] text-sm">{company.role}</p>
            </div>
          ))}
        </div>

        <Carousel className="lg:hidden w-full pt-8" responsive={responsive} showDots={false} infinite autoPlay autoPlaySpeed={5000} removeArrowOnDeviceType="mobile" deviceType="mobile" draggable swipeable sliderClass="itemcarrossa">
          {companies.map((company, index) => (
            <div className="flex flex-col items-start justify-start gap-2 w-fit" key={index}>
              <Image src={company.image} alt="Icon" />
              <h1 className="font-bold dark:text-zinc-200 text-preto text-md">{company.name}</h1>
              <p className="font-normal dark:text-blue-100 text-[#4566A1] text-sm">{company.role}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <h1 className="font-black text-4xl dark:text-zinc-200 text-preto">What our clients say</h1>

        <div className="flex items-start justify-start flex-col gap-10 lg:gap-6 w-full pt-8">
          {ratings.map((rating, index) => (
            <div className="flex flex-col items-start justify-start gap-2 w-fit" key={index}>

              <div className="flex items-center justify-start gap-3">
                <Image src={rating.profile} alt="Icon" />
                <div className="flex flex-col justify-start items-start">
                  <h1 className="text-md dark:text-zinc-200 text-preto font-medium">{rating.name}</h1>
                  <h3 className="font-normal dark:text-blue-100 text-sm text-[#4566a1]">{rating.date}</h3>
                </div>
              </div>

              <div className="flex items-center justify-start gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    src={index < rating.stars ? starFilled : starOutline}
                    alt="Star"
                    key={index}
                  />
                ))}
              </div>


              <p className="font-normal dark:text-zinc-200 text-preto text-md">{rating.message}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-3">
        {ourNumbers.map((number, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2 py-4 w-full rounded-md border border-[#ccd6eb]">
            <h1 className="font-bold dark:text-zinc-200 text-preto text-2xl">{number.number}</h1>
            <h2 className="font-normal dark:text-blue-100 text-sm text-[#4566a1]">{number.description}</h2>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 flex-col w-full py-6">
        <h1 className="text-4xl font-black dark:text-zinc-200 text-preto">Ready to bring your ideas to life?</h1>
        <p className="text-preto dark:text-zinc-200 font-normal text-md">Get in touch with us to discuss your project and learn how we can help you achieve your goals.</p>
        <button className="button">Contact Us</button>
      </div>
    </>
  );
}