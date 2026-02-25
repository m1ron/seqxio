import AllDashboard from '@/app/components/dashboard/AllDashboard'
import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Dashboard | seqxio",
  description: "Powering Smarter, Cleaner Cities",
  openGraph: {
    title: "Dashboard | seqxio",
    description:
      "Powering Smarter, Cleaner Cities",
    images: "/dashboard-meta-img",
  },
};
const page = () => {
  return (
    <div>
        <AllDashboard/>
    </div>
  )
}

export default page