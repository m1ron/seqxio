import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';
import Tabs from "@/app/components/ui/Tabs";

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

            <PageHeader
                heading="Notifications"
                className="border-b border-b-light-grey-300 mb-3.5"
                headingClassName="text-2xl xl:text-2xl font-bold leading-normal -tracking-tight"
            >
                <a href="#" className="block px-3.5 py-2.75 text-dark-green text-sm leading-5 font-medium">Mark all as read</a>
            </PageHeader>

            <div className="mb-4 flex max-md:flex-col items-start md:justify-between md:items-center gap-4">
                <Tabs
                    className="[&>li]:rounded-sm [&>li>button]:py-1.5"
                    tabs={[
                        { label: "Unread", value: "unread" },
                        { label: "All", value: "all" },
                    ]}
                />

                <ul className="flex max-md:flex-wrap gap-2 text-xs leading-3.75 font-semibold text-midnight-blue">
                    <li><a className="py-1.5 px-3.25 bg-deep-slate rounded-full text-cool-white block" href="#">All</a></li>
                    <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Projects</a></li>
                    <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Teams</a></li>
                    <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Roads</a></li>
                    <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Notes</a></li>
                    <li><a className="py-1.5 px-3.25 rounded-full block" href="#">Reports</a></li>
                </ul>
            </div>

            <div>
                <div className="border-b border-b-light-grey-300 bg-alice-blue py-4 px-6 flex gap-3">
                    <div className="shrink-0">
                        <img
                            className="block select-none"
                            src="/assets/images/notifications/board.svg"
                            width={24} height={24}
                            alt=""
                        />
                    </div>
                    <div className="flex-1">
                        <span className="block font-bold text-base leading-5 tracking-min text-midnight-blue">Westside Bulk Pickup changed to At Risk</span>
                        <span className="block text-sm leading-4.5 text-greenish">about 3 hours ago · Project</span>
                    </div>
                    <span className="w-2.5 h-2.5 ml-auto shrink-0 bg-dodger-blue rounded-full"></span>
                </div>
                <div className="border-b border-b-light-grey-300 bg-alice-blue py-4 px-6 flex gap-3">
                    <div className="shrink-0">
                        <img
                            className="block select-none"
                            src="/assets/images/notifications/alert.svg"
                            width={24} height={24}
                            alt=""
                        />
                    </div>
                    <div className="flex-1">
                        <span className="block font-bold text-base leading-5 tracking-min text-midnight-blue">Issue flagged: Overflow reported on Maple Dr</span>
                        <span className="block text-sm leading-4.5 text-greenish">about 3 hours ago · Road</span>
                    </div>
                    <span className="w-2.5 h-2.5 ml-auto shrink-0 bg-dodger-blue rounded-full"></span>
                </div>
                <div className="border-b border-b-light-grey-300 bg-alice-blue py-4 px-6 flex gap-3">
                    <div className="shrink-0">
                        <img
                            className="block select-none"
                            src="/assets/images/notifications/crew.svg"
                            width={24} height={24}
                            alt=""
                        />
                    </div>
                    <div className="flex-1">
                        <span className="block font-bold text-base leading-5 tracking-min text-midnight-blue">Crew A location not updated recently</span>
                        <span className="block text-sm leading-4.5 text-greenish">about 6 hours ago · Team</span>
                    </div>
                    <span className="w-2.5 h-2.5 ml-auto shrink-0 bg-dodger-blue rounded-full"></span>
                </div>
            </div>
        </div>
    )
}

export default page