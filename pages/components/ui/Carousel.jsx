import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className='h-screen'>
        <div className='relative  h-full w-full '>
            <Image src="/images/hero-bg.jpg" alt=""  layout='fill'/>
        </div>
    </div>
  )
}

export default Carousel