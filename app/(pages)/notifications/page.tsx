import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Notifications | seqxio",
    description: "",
    openGraph: {
        title: "Notifications | seqxio",
        description: "",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <div className="w-full flex-1">
            <div className="space-y-4">
                <div className="md:flex max-md:space-y-4 max-md:mb-12 border-b border-b-light-grey-300">
                    <PageHeader
                        heading="Notifications"
                    />

                    <div className="ml-auto flex gap-4 items-center">
                        <a href="#" className="text-dark-green text-sm leading-5 font-medium">Mark all as read</a>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                    <ul className="tabs">
                        <li className="active"><a href="#">Unread</a></li>
                        <li><a href="#">All</a></li>
                    </ul>

                    <ul className='flex gap-2 text-xs leading-3.75 font-semibold text-midnight-blue'>
                        <li><a className="py-1.5 px-3.25 bg-deep-slate rounded-full text-cool-white block" href="#">All</a></li>
                        <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Projects</a></li>
                        <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Teams</a></li>
                        <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Roads</a></li>
                        <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Notes</a></li>
                        <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Reports</a></li>
                    </ul>
                </div>

                <div className="">
                    <div className="border-b border-b-light-grey-300 bg-alice-blue py-4 px-6 flex gap-3">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#e5e7eb" d="M20 20H0V0h20z"/><path stroke="#e5e7eb" d="M24 24H0V0h24z"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M12 11h4M12 16h4M8 11h.01M8 16h.01"/></svg>
                        <div className="">
                            <span className="block font-bold text-base leading-4.75 tracking-[.005em] text-midnight-blue">Westside Bulk Pickup changed to At Risk</span>
                            <span className="block text-sm leading-4.5 text-greenish">about 3 hours ago · Project</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-dodger-blue ml-auto"></span>
                    </div>
                    <div className="border-b border-b-light-grey-300 bg-alice-blue py-4 px-6 flex gap-3">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#e5e7eb" d="M20 20H0V0h20z"/><path stroke="#e5e7eb" d="M24 24H0V0h24z"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01"/></svg>
                        <div className="">
                            <span className="block font-bold text-base leading-4.75 tracking-[.005em] text-midnight-blue">Issue flagged: Overflow reported on Maple Dr</span>
                            <span className="block text-sm leading-4.5 text-greenish">about 3 hours ago · Road</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-dodger-blue ml-auto"></span>
                    </div>
                    <div className="border-b border-b-light-grey-300 bg-alice-blue py-4 px-6 flex gap-3">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#e5e7eb" d="M20 20H0V0h20z"/><path stroke="#e5e7eb" d="M24 24H0V0h24z"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg>
                        <div className="">
                            <span className="block font-bold text-base leading-4.75 tracking-[.005em] text-midnight-blue">Crew A location not updated recently</span>
                            <span className="block text-sm leading-4.5 text-greenish">about 6 hours ago · Team</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-dodger-blue ml-auto"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
