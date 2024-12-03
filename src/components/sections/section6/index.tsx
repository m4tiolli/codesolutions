'use client'
import ContactComponent from '@/components/ContactComponent'
import { useTranslations } from 'next-intl'
import React from 'react'

const Section6 = () => {

  const t = useTranslations("section6")

  const divRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState(false)

  const toggleContactOpen = () => {
    setOpen(true)
    setTimeout(() => {
      divRef.current?.scrollIntoView()
    }, 200);
  }

  return (
    <>
      <div className="flex items-center justify-center gap-4 flex-col w-full py-6" id='contact'>
        <h1 className="text-4xl font-black dark:text-zinc-200 text-preto">{t("title")}</h1>
        <p className="text-preto dark:text-zinc-200 font-normal text-md">{t("description")}</p>
        <button className="button" onClick={toggleContactOpen}>{t("button")}</button>
      </div>
      {open &&
        <ContactComponent divRef={divRef} />
      }
    </>
  )
}

export default Section6