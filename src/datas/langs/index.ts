import { StaticImageData } from "next/image"
import brasil from './Flag_of_Brazil.svg'
import usa from './Flag_of_United_States.svg'
import spain from './Flag_of_Spain.svg'
import { Languages } from "@/lib/types/languages"

interface ILanguages {
  flag: StaticImageData,
  abbreviation: Languages
}

const languages: ILanguages[] = [
  {
    flag: usa,
    abbreviation: "en"
  },
  {
    flag: spain,
    abbreviation: "es"
  },
  {
    flag: brasil,
    abbreviation: "pt"
  },
]

export default languages