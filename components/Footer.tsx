import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'
function Footer() {
  return (
    <div className='w-full h-[15dvh] lg:h-[10dvh] border-t border-[#e5e8eb] py-2 px-4 relative flex lg:flex-row flex-col-reverse items-center lg:justify-between justify-center gap-4 lg:gap-0'>
      <div className='w-1/3 lg:block hidden'>&nbsp;</div>
      <div className='lg:w-1/3 w-full'><p className='text-center'>&copy; 2024 Code Solutions. All rights reserved.</p></div>
      <div className="lg:w-1/3 w-full lg:h-full h-2/5 lg:place-items-end place-items-center">
        <Image src={logo} alt='Logo' className='h-full w-auto' />
      </div>
    </div>
  )
}

export default Footer