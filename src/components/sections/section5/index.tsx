import ourNumbers from '@/datas/ourNumbers'
import React from 'react'

const Section5 = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-3">
      {ourNumbers.map((number, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-2 py-4 w-full rounded-md border border-[#ccd6eb]">
          <h1 className="font-bold dark:text-zinc-200 text-preto text-2xl">{number.number}</h1>
          <h2 className="font-normal dark:text-blue-100 text-sm text-[#4566a1]">{number.description}</h2>
        </div>
      ))}
    </div>
  )
}

export default Section5
