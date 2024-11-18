import React from 'react'
import icon from '../../public/face-frown-regular.svg'
import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='w-full h-full grid place-items-center gap-8'>
      <Image src={icon} alt='Página não encontrada' className='w-48 h-auto' />
      <h1 className='text-6xl font-extrabold text-azul'>404</h1>
      <p>A página que você está procurando não existe.</p>
      <Link href={'/'} className='button'>Voltar para o início</Link>
    </div>
  )
}

export default NotFound