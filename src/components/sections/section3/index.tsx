"use client"
import companies from '@/datas/companies'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2
  }
};

const Section3 = () => {

  const t = useTranslations("section3")

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full" id='portfolio'>
      <h1 className="font-black text-4xl dark:text-zinc-200 text-preto">{t("title")}</h1>
      <p className="font-normal text-[16px] dark:text-zinc-200 text-preto lg:w-4/5 text-balance">{t("description")}</p>

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
  )
}

export default Section3