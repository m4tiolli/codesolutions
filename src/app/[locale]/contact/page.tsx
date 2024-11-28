"use client"
import React from 'react';
import ContactComponent from '@/components/ContactComponent';
import { setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';

const Contact = async () => {
  const allCookies = await cookies()
  const locale = allCookies.get('NEXT_LOCALE')
  setRequestLocale(locale as unknown as string)
  return (
    <ContactComponent />
  );
};

export default Contact;
