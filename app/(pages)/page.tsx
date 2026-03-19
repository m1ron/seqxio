import React from "react"

import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import TotalProjects from "@/app/components/dashboard/TotalProjects"

import ProjectProgress from "@/app/components/dashboard/ProjectProgress"
import Calendar from "@/app/components/dashboard/Calendar"
import RecentPhotos from "@/app/components/dashboard/RecentPhotos"
import Roads from "@/app/components/dashboard/Roads"
import InteractiveMap from "@/app/components/dashboard/InteractiveMap";

import TimeTracker from "@/app/components/dashboard/TimeTracker";


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | seqxio",
    description: "Powering Smarter, Cleaner Cities",
    openGraph: {
        title: "Dashboard | seqxio",
        description: "Powering Smarter, Cleaner Cities",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <div className="mb-4">
                <DashboardHeader
                    heading="Dashboard"
                    subheading="Monitor and manage waste collection operations in real-time."
                />
                <TotalProjects/>
            </div>

            <div className="flex flex-col xl:flex-row gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex sm:flex-row flex-col gap-4">
                        <ProjectProgress/>
                        <InteractiveMap/>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center gap-4 justify-between">
                        <Calendar/>
                        <RecentPhotos/>
                    </div>
                </div>
                <div className="w-full xl:w-[265px] max-xl:flex max-xl:flex-row max-sm:!flex-col gap-4 shrink-0">
                    <Roads/>
                    <TimeTracker/>
                </div>
            </div>
        </>
    );
};

export default page;