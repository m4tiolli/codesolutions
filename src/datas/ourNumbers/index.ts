import { useTranslations } from "next-intl"

interface IOurNumbers {
  number: number,
  description: string,
}

const useOurNumbers = () => {

  const t = useTranslations("numbers")

  const ourNumbers: IOurNumbers[] = [
    {
      number: 100,
      description: t("projects")
    },
    {
      number: 50,
      description: t("clients")
    },
    {
      number: 2,
      description: t("years")
    }
  ]

  return ourNumbers
}

export default useOurNumbers