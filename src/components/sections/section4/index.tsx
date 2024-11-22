import Image from 'next/image'
import React from 'react'
import starFilled from '@/datas/ratings/star-fill.svg'
import starOutline from '@/datas/ratings/star-outline.svg'
import { useTranslations } from 'next-intl'
import useRatings from '@/datas/ratings'

const Section4 = () => {

  const t = useTranslations("section4")

  const ratings = useRatings()

  return (
    <div>
      <h1 className="font-black text-4xl dark:text-zinc-200 text-preto">{t("title")}</h1>

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
  )
}

export default Section4