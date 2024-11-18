import { StaticImageData } from "next/image"
import brasil from './Flag_of_Brazil.svg'
import usa from './Flag_of_United_States.svg'
import spain from './Flag_of_Spain.svg'

interface ILanguages {
  flag: StaticImageData,
  abbreviation: string
}

const languages: ILanguages[] = [
  {
    flag: usa,
    abbreviation: "EN"
  },
  {
    flag: spain,
    abbreviation: "ES"
  },
  {
    flag: brasil,
    abbreviation: "PT"
  },
]

export default languages