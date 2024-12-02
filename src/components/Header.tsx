'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import logowhite from '../../public/logo white.svg'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Context } from '@/app/providers';
import brasil from '@/datas/langs/Flag_of_Brazil.svg'
import usa from '@/datas/langs/Flag_of_United_States.svg'
import esp from '@/datas/langs/Flag_of_Spain.svg'
import dropdown from '../../public/chevron-down-solid.svg'
import languages from '@/datas/langs';
import sol from '../../public/sun-regular.svg'
import lua from '../../public/moon-regular.svg'
import useDarkMode from '@/hooks/useDarkMode';
import { Languages } from '@/lib/types/languages';
import { Link as Change } from '@/i18n/routing'
import { useTranslations } from 'next-intl';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 799);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const context = useContext(Context);

  if (!context) {
    throw new Error("Contexto não encontrado.");
  }

  const { section1Ref, section2Ref } = context;
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section1Ref.current && section2Ref.current) {
        const top = section2Ref.current.getBoundingClientRect().top;
        setIsFixed(top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [section1Ref, section2Ref]);

  return isMobile ? <HeaderMobile isFixed={isFixed} /> : <HeaderDesktop isFixed={isFixed} />;
}

function HeaderDesktop({ isFixed }: { isFixed: boolean }) {

  const { locale } = useParams()

  const pathname = usePathname()

  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const [langsOpen, setLangsOpen] = useState(false)

  const t = useTranslations("header")

  return (
    <header className={`w-full h-[10dvh] px-8 py-2 border-b dark:border-zinc-800 border-[#E5E8EB] items-center justify-between z-50 dark:bg-zinc-900 bg-[#f7fafc] ${isFixed ? 'header-fixed' : 'relative'} flex`}>
      <Link href={"/"} className='h-full w-auto'>
        <Image src={isDarkMode ? logowhite : logo} alt='Logo' className='h-[90%] w-auto' />
      </Link>
      <nav>
        <ul className='flex items-center justify-center gap-4 font-medium text-preto dark:text-zinc-200'>
          <li className='li'><Link href={'#about'}>{t("about")}</Link></li>
          <li className='li'><Link href={'#services'}>{t("services")}</Link></li>
          <li className='li'><Link href={'#portfolio'}>{t("portfolio")}</Link></li>
          <li className='li'><Link href={'#contact'}>{t("contact")}</Link></li>
          <li><Link href={`/${locale}/contact`} className='button'>{t("getStarted")}</Link></li>
          <button className='h-full w-fit relative flex items-center justify-center' onClick={() => setLangsOpen(!langsOpen)}>
            <Image className='size-6 rounded-full object-cover' src={locale === 'pt' ? brasil : locale === 'en' ? usa : esp} alt='Language' />
            <Image src={dropdown} alt='Dropdown' className={`h-4 dropdown w-auto pl-1 rounded-full ${langsOpen ? 'rotate-180 translate-x-1' : 'rotate-0'} transition-all`} />
            <div className={`absolute -right-5 dark:bg-zinc-800 bg-[#f7fafc] h-fit w-[10vw] px-2 py-2 rounded-md shadow-md flex flex-col items-start justify-start gap-3 ${langsOpen ? 'top-[10dvh] opacity-100 visible' : 'top-[2dvh] opacity-0 invisible'} transition-all duration-500`}>
              {languages.map((language, index) => (
                <Change href={`/${pathname.replace(/^\/[a-z]{2}/, '')}`} // Substitui o idioma atual pelo novo
                  locale={language.abbreviation}
                  key={index} className='flex items-center justify-start gap-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-md w-full px-2 py-1'>
                  <Image className='size-6 rounded-full object-cover' src={language.flag} alt='Language' />
                  <p className='uppercase'>{language.abbreviation}</p>
                </Change>
              ))}
            </div>
          </button>
          <button className='h-full w-fit transition-all hover:opacity-70' onClick={toggleDarkMode}>
            <Image src={isDarkMode ? lua : sol} alt='Dark mode' className='h-6 w-auto' />
          </button>
        </ul>
      </nav>
    </header>
  );
}

function HeaderMobile({ isFixed }: { isFixed: boolean }) {
  const { locale } = useParams()

  const pathname = usePathname()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [langsOpen, setLangsOpen] = useState(false)
  const [active, setActive] = useState(false);
  const t = useTranslations("header")

  return (
    <header className={`${isFixed ? 'header-fixed' : 'relative'} w-full h-[10dvh] px-4 py-2 border-b dark:bg-zinc-800 bg-[#f7fafc] border-[#e5e8eb] dark:border-zinc-700 flex items-center justify-between overflow-x-clip`}>
      <Link href={"/"} className='h-full w-auto'>
        <Image src={isDarkMode ? logowhite : logo} alt='Logo' className='h-[70%] w-auto' />
      </Link>
      <button className='text-5xl font-medium transition-all' onClick={() => setActive(!active)}><span
        className={`block w-8 h-[3px] bg-preto dark:bg-zinc-200 transition-all duration-300 transform ${active ? 'rotate-45 translate-y-[10px]' : 'rotate-0'}`}
      ></span>
        <span
          className={`block w-8 h-[3px] bg-preto dark:bg-zinc-200 transition-all duration-300 mt-1 ${active ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`block w-8 h-[3px] bg-preto dark:bg-zinc-200 transition-all duration-300 transform ${active ? '-rotate-45 -translate-y-[0px]' : 'rotate-0 mt-[4px]'}`}
        ></span></button>
      <div className={`w-full h-[90dvh] absolute top-[10dvh] right-0 bg-black bg-opacity-50 z-10 transition-all ${active ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setActive(!active)}>&nbsp;</div>
      <nav className={`${isFixed ? 'fixed top-[10dvh]' : 'absolute top-[10dvh]'}  h-[90dvh] w-3/5 dark:bg-zinc-800 bg-[#F7FAFC] !z-[999] ${active ? 'right-0' : 'right-[-100%]'} transition-all duration-500 flex-start`}>
        <ul className='flex items-end flex-col justify-center gap-8 font-medium text-xl pt-[5dvh] px-5 w-full dark:text-zinc-200'>
          <li className='li'><Link href={'#about'}>{t("about")}</Link></li>
          <li className='li'><Link href={'#services'}>{t("services")}</Link></li>
          <li className='li'><Link href={'#portfolio'}>{t("portfolio")}</Link></li>
          <li className='li'><Link href={'#contact'}>{t("contact")}</Link></li>
          <li><Link href={`/${locale}/contact`} className='button'>{t("getStarted")}</Link></li>
        </ul>
        <button className='absolute right-16 bottom-5 flex items-center justify-center dark:text-zinc-200' onClick={() => setLangsOpen(!langsOpen)}>
          <Image className='size-6 rounded-full object-cover' src={locale === 'pt' ? brasil : locale === 'en' ? usa : esp} alt='Language' />
          <Image src={dropdown} alt='Dropdown' className={`h-4 dropdown w-auto pl-1 rounded-full ${langsOpen ? 'rotate-180 translate-x-1' : 'rotate-0'} transition-all`} />
          <div className={`absolute -right-5 dark:bg-zinc-800 bg-[#f7fafc] h-fit w-[40vw] px-2 py-2 rounded-md shadow-md flex flex-col items-start justify-start gap-3 ${langsOpen ? 'bottom-[5dvh] opacity-100 visible' : 'bottom-[2dvh] opacity-0 invisible'} transition-all duration-500`}>
            {languages.map((language, index) => (
              <Change href={`/${pathname.replace(/^\/[a-z]{2}/, '')}`} // Substitui o idioma atual pelo novo
                locale={language.abbreviation} key={index} className='flex items-center justify-start gap-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-md w-full px-2 py-1'>
                <Image className='size-6 rounded-full object-cover' src={language.flag} alt='Language' />
                <p className='uppercase'>{language.abbreviation}</p>
              </Change>
            ))}
          </div>
        </button>
        <button className='absolute bottom-5 right-5 transition-all hover:opacity-70' onClick={toggleDarkMode}>
          <Image src={isDarkMode ? lua : sol} alt='Dark mode' className='h-6 w-auto' />
        </button>
      </nav>
    </header>
  );
}

export default Header;
