"use client";
import Image from 'next/image'
import React from 'react'
import Icons from './Icons'
import { ICONS_DATA_LIST } from '@/app/utils/helper'
import Paragraph from '../ui/Paragraph'
import useStore from '@/app/utils/store'
import SearchBox from './SearchBox';

const Navigation = () => {
    const { setOpenNav } = useStore() as {
    openNav: boolean;
    setOpenNav: (open: boolean) => void;
  };
  return (
    <>
      <div className='bg-light-grey lg:rounded-[25px] rounded-lg md:p-6 p-4 w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex sm:gap-3 gap-2'>
            <button
             onClick={() => setOpenNav(true)}
              className="lg:hidden">
              <div className='cursor-pointer flex items-center justify-center bg-white rounded-full w-11.25 h-11.25 hover:bg-dark-green group transition-all ease-linear duration-300'>
                <Icons icon="navarrow" className='rounded-full transition-all ease-linear duration-300 group-hover:text-white text-black' />
              </div>
            </button>
            <SearchBox/>
          </div>

          <div className='flex items-center lg:gap-4 sm:gap-3 gap-2'>
            <div className='flex items-center lg:gap-4 sm:gap-3 gap-2'>
              {ICONS_DATA_LIST.map((obj, i) => (
                <div key={i} className='bg-white group  hover:bg-dark-green transition-all ease-linear duration-300 cursor-pointer rounded-full size-[50px] flex items-center justify-center'>
                  <Icons icon={obj} className='text-black group-hover:text-white transition-all ease-linear duration-300' />
                </div>
              ))}
            </div>
            <div className='flex gap-2 items-center cursor-pointer w-fit'>
              <div className='bg-light-red size-[50px] max-w-[50px] flex items-center justify-center rounded-full'>
                <Image width={32} height={39} src="/assets/images/webp/profile.webp" alt="profile" />

              </div>
              <div className='sm:flex hidden flex-col '>
                <Paragraph className='font-semibold text-black leading-150'>Ciara Thomas</Paragraph>
                <Paragraph className='font-thin text-graphite leading-150'>cthomas@mail.com</Paragraph>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </>
  )
}

export default Navigation