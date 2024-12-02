"use client"
import React from 'react';
import ContactComponent from '@/components/ContactComponent';
import { setRequestLocale } from 'next-intl/server';

const Contact = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  setRequestLocale(locale);
  return (
    <ContactComponent />
  );
};

export default Contact;
