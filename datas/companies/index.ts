import { StaticImageData } from "next/image"
import acme from './acme.png'
import globex from './globex.png'
import initech from './initech.png'
import soylent from './soylent.png'

interface ICompanies {
  image: StaticImageData,
  name: string,
  role: string,
}

const companies: ICompanies[] = [
  {
    image: acme,
    name: "Acme Co",
    role: "E-commerce platform"
  },
  {
    image: globex,
    name: "Globex Corp",
    role: "Enterprise resource planning"
  },
  {
    image: soylent,
    name: "Soylent Green",
    role: "Meal replacement products"
  },
  {
    image: initech,
    name: "Initech",
    role: "Software development tools"
  }
]

export default companies