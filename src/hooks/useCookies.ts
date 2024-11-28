"use server"

import { cookies } from 'next/headers'

export default async function useCookies(name: string) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(name)

  return { cookie }
}