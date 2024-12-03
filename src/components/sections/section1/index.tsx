"use client"
import { Context } from "@/app/providers";
import { useTranslations } from "next-intl";
import { useContext } from "react";

const Section1 = () => {

  const t = useTranslations('section1');

  const context = useContext(Context);

  if (!context) {
    throw new Error("Contexto não encontrado.");
  }

  const { section1Ref } = context;

  return (
    <div ref={section1Ref} className="rounded-md bg-home bg-cover w-full lg:w-auto lg:aspect-[10/4.5]" id="about">
      <div className="w-full h-full bg-black bg-opacity-60 flex flex-col items-start justify-center px-5 lg:px-10 py-10 lg:py-0 rounded-md gap-6">
        <h1 className="lg:text-6xl text-4xl text-balance text-white font-black">{t("title")}</h1>
        <p className="text-white font-normal text-[16px] text-balance">{t("description")}</p>
        <button className="button" onClick={() => window.location.href += "#contact"}>{t("button")}</button>
      </div>
    </div>
  )
}

export default Section1