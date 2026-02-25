import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icons from '../common/Icons'

const PoweringSmarter:React.FC = () => {
  return (
    <div className='rounded-[15px] lg:max-w-[425px] sm:max-w-[300px] w-full sm:min-h-[calc(100vh-128px)] flex flex-col justify-between bg-cover bg-no-repeat bg-center lg:py-[36px] lg:px-[48px] max-lg:p-5 max-md:p-4 gap-5' style={{ backgroundImage: "url('/assets/images/webp/powering-bg-image.webp')" }}>
     
        <Link href="#" className='w-fit'>
        <Image
          src="/assets/images/png/logo.png"
          alt="logo"
          width={137}
          height={150}
          className='object-cover sm:max-w-[137px] max-w-[100px] sm:h-[150px]'
        />
        </Link>

        <h2 className='font-normal lg:text-5xl sm:text-4xl text-3xl leading-100 text-white'>
          Powering Smarter, Cleaner Cities
        </h2>

        <div className='bg-white rounded-[5px] p-3.75'>
          <div className='flex items-center gap-4'>
            <div className='rounded-full flex items-center justify-center bg-[#F0F0F0] w-11.25 h-11.25'>
              <Icons icon='security' />
            </div>
            {/* content */}
            <div className='flex flex-col '>
              <p className='font-medium text-base leading-150 tracking-[-0.04em]'>Platform security 100% solid</p>
              <p className='text-[13px] tracking-[-0.04em] leading-184 font-light'>Fully protected data.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PoweringSmarter