'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Header() {
  const [headerToShow, setHeaderToShow] = useState(<HeaderDesktop />)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 799) setHeaderToShow(<HeaderMobile />); else setHeaderToShow(<HeaderDesktop />)
    })
  }, [])

  return headerToShow
}

function HeaderDesktop() {
  return (
    <header className='w-full h-[10dvh] px-8 py-2 shadow-md bg-white flex items-center justify-between'>
      <Image src={logo} alt='Logo' className='h-[90%] w-auto' />
      <nav>
        <ul className='flex items-center justify-center gap-4 font-medium'>
          <li className='li'><Link href={'/about'}>About</Link></li>
          <li className='li'><Link href={'/services'}>Services</Link></li>
          <li className='li'><Link href={'/portfolio'}>Portfolio</Link></li>
          <li className='li'><Link href={'/contact'}>Contact</Link></li>
          <li><Link href={'/get-started'} className='bg-azul text-white font-semibold px-4 py-3 rounded-md transition-opacity hover:opacity-70'>Get Started</Link></li>
        </ul>
      </nav>
    </header>
  )
}

function HeaderMobile() {
  const router = useRouter()
  const [active, setActive] = useState(false)
  return (
    <header className='relative w-full h-[10dvh] px-4 py-2 shadow-lg flex items-center justify-between overflow-x-hidden'>
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
      <nav className={`absolute top-[10dvh] h-[90dvh] w-3/5 bg-white z-20 ${active ? 'right-0' : 'right-[-100%]'} transition-all duration-500`}>
        <ul className='flex items-end flex-col justify-center gap-8 font-medium text-xl pt-[5dvh] px-10 w-full'>
          <li className='li'><Link href={'/about'}>About</Link></li>
          <li className='li'><Link href={'/services'}>Services</Link></li>
          <li className='li'><Link href={'/portfolio'}>Portfolio</Link></li>
          <li className='li'><Link href={'/contact'}>Contact</Link></li>
          <li><Link href={'/get-started'} className='bg-azul text-white font-semibold px-4 py-3 rounded-md transition-opacity hover:opacity-70'>Get Started</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header