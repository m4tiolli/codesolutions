"use client"
import { Context } from "@/app/providers";
import useThingsWeDo from "@/datas/weDo"
import { useContext } from "react";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import { useTranslations } from "next-intl";

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2
  }
};

const Section2 = () => {

  const thingsWeDo = useThingsWeDo()

  const t = useTranslations('section2');

  const context = useContext(Context);

  if (!context) {
    throw new Error("Contexto não encontrado.");
  }

  const { section2Ref } = context;
  return (
    <div ref={section2Ref} className="flex flex-col items-start justify-start gap-4 w-full lg:w-auto">
      <h1 className="font-black text-4xl dark:text-zinc-200 text-preto">{t("title")}</h1>
      <p className="font-normal text-[16px] dark:text-zinc-200 text-preto lg:w-4/5 text-balance">{t("description")}</p>

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
  )
}
export default Section2