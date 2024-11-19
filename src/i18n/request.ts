import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import type { Languages } from '@/lib/types/languages'

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as Languages)) notFound()

  return {
    messages: (await import(`../../locale/${locale}.json`)).default,
  }
})