'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Context } from '../app/providers';

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
  return (
    <header className={`w-full h-[10dvh] px-8 py-2 border-b border-[#E5E8EB] items-center justify-between z-50 bg-[#f7fafc] ${isFixed ? 'header-fixed' : 'relative'} flex`}>
      <Image src={logo} alt='Logo' className='h-[90%] w-auto' />
      <nav>
        <ul className='flex items-center justify-center gap-4 font-medium'>
          <li className='li'><Link href={'/about'}>About</Link></li>
          <li className='li'><Link href={'/services'}>Services</Link></li>
          <li className='li'><Link href={'/portfolio'}>Portfolio</Link></li>
          <li className='li'><Link href={'/contact'}>Contact</Link></li>
          <li><Link href={'/get-started'} className='button'>Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function HeaderMobile({ isFixed }: { isFixed: boolean }) {

  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <header className={`${isFixed ? 'header-fixed' : 'relative'} w-full h-[10dvh] px-4 py-2 border-b z-50 bg-[#f7fafc] border-[#e5e8eb] flex items-center justify-between overflow-x-clip`}>
      <Image src={logo} alt='Logo' className='h-[70%] w-auto' onClick={() => router.push("/")} />
      <button className='text-5xl font-medium transition-all' onClick={() => setActive(!active)}><span
        className={`block w-8 h-[3px] bg-black transition-all duration-300 transform ${active ? 'rotate-45 translate-y-[10px]' : 'rotate-0'}`}
      ></span>
        <span
          className={`block w-8 h-[3px] bg-black transition-all duration-300 mt-1 ${active ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`block w-8 h-[3px] bg-black transition-all duration-300 transform ${active ? '-rotate-45 -translate-y-[0px]' : 'rotate-0 mt-[4px]'}`}
        ></span></button>
      <div className={`w-full h-[90dvh] absolute top-[10dvh] right-0 bg-black bg-opacity-50 z-10 transition-all ${active ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setActive(!active)}>&nbsp;</div>
      <nav className={`absolute top-[10dvh] h-[90dvh] w-3/5 bg-[#F7FAFC] z-20 ${active ? 'right-0' : 'right-[-100%]'} transition-all duration-500`}>
        <ul className='flex items-end flex-col justify-center gap-8 font-medium text-xl pt-[5dvh] px-10 w-full'>
          <li className='li'><Link href={'/about'}>About</Link></li>
          <li className='li'><Link href={'/services'}>Services</Link></li>
          <li className='li'><Link href={'/portfolio'}>Portfolio</Link></li>
          <li className='li'><Link href={'/contact'}>Contact</Link></li>
          <li><Link href={'/get-started'} className='button'>Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
