import { StaticImageData } from "next/image"
import jane from './jane.svg'
import john from './john.svg'
import alice from './alice.svg'

interface IRatings {
  profile: StaticImageData,
  name: string,
  date: string,
  stars: 0 | 1 | 2 | 3 | 4 | 5,
  message: string
}

const ratings: IRatings[] = [
  {
    profile: jane,
    name: "Jane Doe",
    date: "August 15, 2023",
    stars: 5,
    message: "CodeSol was instrumental in helping us develop our new e-commerce platform. Their team was professional, efficient, and incredibly skilled. The end result exceeded our expectations, and we couldn't be happier with the partnership."
  },
  {
    profile: john,
    name: "John Smith",
    date: "July 22, 2023",
    stars: 4,
    message: "We hired CodeSol to build a custom API for our software, and they delivered an outstanding solution. Their communication was excellent, and they demonstrated a deep understanding of our technical requirements. We highly recommend CodeSol for API development."
  },
  {
    profile: alice,
    name: "Alice Johnson",
    date: "June 30, 2023",
    stars: 5,
    message: "Working with CodeSol was a fantastic experience from start to finish. They developed a native mobile app for our business, and the quality of their work was exceptional. Their team was responsive, collaborative, and committed to delivering a top-tier product."
  },
]

export default ratings