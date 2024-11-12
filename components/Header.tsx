import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'

function Header() {
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

export default Header