import { StaticImageData } from "next/image"
import jane from './jane.svg'
import john from './john.svg'
import alice from './alice.svg'
import { useTranslations } from "next-intl"

interface IRatings {
  profile: StaticImageData,
  name: string,
  date: string,
  stars: 0 | 1 | 2 | 3 | 4 | 5,
  message: string
}
const useRatings = () => {

  const t = useTranslations("ratings")

  const ratings: IRatings[] = [
    {
      profile: jane,
      name: "Jane Doe",
      date: t("janeDoe.date"),
      stars: 5,
      message: t("janeDoe.message")
    },
    {
      profile: john,
      name: "John Smith",
      date: t("johnSmith.date"),
      stars: 4,
      message: t("johnSmith.message")
    },
    {
      profile: alice,
      name: "Alice Johnson",
      date: t("aliceJohnson.date"),
      stars: 5,
      message: t("aliceJohnson.message")
    },
  ]

  return ratings
}

export default useRatings