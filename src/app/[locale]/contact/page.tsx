"use client"
import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import ContactComponent from '@/components/ContactComponent';

const Contact = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  setRequestLocale(locale);

  return (
    <ContactComponent />
  );
};

export default Contact;
