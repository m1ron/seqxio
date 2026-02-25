import PoweringSmarter from '@/app/components/sign-in/PoweringSmarter'
import SignUpForm from '@/app/components/sign-in/SignUpForm'
import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Sign in | seqxio",
  description: "Powering Smarter, Cleaner Cities",
  openGraph: {
    title: "Sign in | seqxio",
    description:
      "Powering Smarter, Cleaner Cities",
    images: "/login-meta-img",
  },
};

const page = () => {
  
  return (
    <div className='flex items-center xl:p-16 lg:p-10 md:p-8 p-3 min-h-screen gap-5 sm:flex-row flex-col max-w-[1500px] mx-auto'>
        <PoweringSmarter/>
        <div className='flex-1 w-full'><SignUpForm/></div>
    </div>
  )
}

export default page