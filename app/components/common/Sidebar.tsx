"use client";
import Image from 'next/image'
import React from 'react'
import Icons from './Icons'
import Link from 'next/link'
import { SIDEBAR_DATA } from '@/app/utils/helper'
import useStore from '@/app/utils/store'
import { useRouter } from 'next/navigation'

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { openNav, setOpenNav } = useStore() as {
    openNav: boolean;
    setOpenNav: (open: boolean) => void;
  };
  const menuData = SIDEBAR_DATA.filter(item => item.title === "MENU");
  const generalData = SIDEBAR_DATA.filter(item => item.title === "GENERAL");

  const handleLogout = () => {
    router.push('/sign-in');
  };

  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (openNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openNav]);
  return (
    <>
      {/* BLUR BACKGROUND */}
      {openNav && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/20 lg:hidden z-40 transition-all duration-300"
          onClick={() => setOpenNav(false)}
        />
      )}
      {/* side bar  */}
      <div
        className={`
    fixed lg:fixed top-3 lg:left-4 bottom-3  z-50
    min-h-[calc(100vh-24px)] max-h-[calc(100vh-24px)] overflow-y-auto
    sm:w-[43%] w-[70%]  lg:max-w-[264px] lg:min-w-[264px] 
    bg-light-grey p-6 rounded-[25px]
    flex flex-col justify-between gap-8 scrollbar-hide
    transform transition-transform duration-300
     ${openNav ? "translate-x-0 max-lg:left-4" : "-translate-x-full max-lg:left-0"}
    lg:translate-x-0
  `}>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image src="/assets/images/png/logo-dashboard.png"
              alt='logo-dashboard'
              width={180}
              height={83}
              className='object-cover my-4'
            />
          </Link>
          <button
            onClick={() => setOpenNav(false)}
            className="lg:hidden h-fit cursor-pointer bg-dark-green rounded-sm p-1 hover:scale-105 transition-all ease-linear duration-300">
            <Icons icon="closenav" />
          </button>
        </div>

        {/* menu */}
        <div>
          {menuData.map((item, index) => (
            <div className='flex flex-col gap-4' key={index}>
              <p className='font-medium text-base leading-[138%] tracking-[-0.04em] text-grey'>{item.title}</p>
              <div className='flex flex-col gap-4'>
                {item.sublinks.map((sublink, subIndex) => (
                  <Link href={sublink.url} className='flex items-center gap-3 group relative w-fit' key={subIndex}>
                    {/* Green indicator for active/Dashboard */}
                    {sublink.name === "Dashboard" && (
                      <div className='absolute -left-6 md:w-2.75 w-1.5 md:h-[47px] h-[30px] bg-dark-green rounded-r-[5px]'></div>
                    )}
                    <div>
                      {sublink.icon && <Icons icon={sublink.icon} className='md:size-6 size-5 group-hover:text-dark-green transition text-light-green' />}
                    </div>
                    <div className='flex justify-between items-center w-full'>
                      <p className='leading-120 group-hover:text-dark-green transition-colors ease-in-out duration-150 tracking-[-0.04em] text-light-green font-regular md:text-xl text-base'>
                        {sublink.name}
                      </p>
                      {sublink.name === "Tasks" && (
                        <div className='rounded-[5px] bg-dark-green w-[28px] h-[23px] flex items-center justify-center text-white font-normal tracking-[-0.04em] leading-100 text-custom-xs ms-[98px]'>
                          12+
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* general */}
        <div>
          {generalData.map((item, index) => (
            <div className='flex flex-col gap-4' key={index}>
              <p className='font-medium text-base leading-[138%] tracking-[-0.04em] text-grey'>{item.title}</p>
              <div className='flex flex-col gap-4'>
                {item.sublinks.map((sublink, subIndex) => (
                  
                    <Link href={sublink.url} className='flex items-center gap-3 group' key={subIndex}>
                      <div>
                        {sublink.icon && <Icons icon={sublink.icon} className='md:size-6 size-5 group-hover:text-dark-green transition text-light-green' />}
                      </div>
                      <p className='leading-120 tracking-[-0.04em] text-light-green font-regular group-hover:text-dark-green transition-colors ease-in-out duration-150 md:text-xl text-base'>
                        {sublink.name}
                      </p>
                    </Link>
                  
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* download */}
        <div className='rounded-[15px] p-4 flex flex-col gap-4 bg-cover' style={{ backgroundImage: "url('/assets/images/webp/side-bar-box-bg.webp')" }}>
          <div className='flex gap-2 flex-col'>
            <div className='size-6.25 bg-white flex items-center justify-center rounded-full'>
              <Icons icon='download' className='size-[16.67px]' />
            </div>
            <p className='font-medium text-xl leading-[108%]  tracking-[-0.04em] text-white max-w-[178px]'> <span className='font-semibold '>Download</span> our Mobile App</p>
            <p className='tracking-[-0.04em] font-normal text-xsm text-white leading-100'>Stay on track.</p>
          </div>
          <button className='text-white cursor-pointer text-[14px] bg-dark-green rounded-[25px] tracking-[-0.04em] py-2.25 w-full min-h-[42px] hover:text-dark-green hover:bg-white border border-dark-green transition-colors ease-linear duration-300'>
            Download
          </button>
        </div>
      </div>
    </>

  )
}

export default Sidebar