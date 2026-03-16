import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";

export const metadata: Metadata = {
    title: "Map | seqxio",
    description: "View all projects and roads on the interactive map",
    openGraph: {
        title: "Map | seqxio",
        description: "View all projects and roads on the interactive map",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                className="md:[&>div]:gap-2"
                heading="Map"
                subheading="View all projects and roads on the interactive map"
            >
                <Button variant="outline">Draw Area</Button>
                <Button className="xl:px-5 xl:mt-px">+ Add Pin</Button>
            </PageHeader>

            <div className="flex-1 flex gap-6 overflow-hidden relative z-0">
                <aside className="md:w-104 bg-white border-r border-r-light-grey-300 flex flex-col">
                    <header className="p-4 border-b border-b-light-grey-300">
                        <h2 className="text-2xl font-bold">Pins</h2>
                    </header>
                    <div className="p-4 space-y-4">
                        <input className="input w-full" id="full-name" type="text" defaultValue="" placeholder="Search pins..."/>
                        <div className="grid grid-cols-3 gap-2">
                            <Select
                                className="flex-1"
                                label="Status"
                                defaultValue="all-statuses"
                                options={[
                                    { label: "All Statuses", value: "all-statuses" },
                                    { label: "Zone A", value: "zone-a" },
                                    { label: "Zone B", value: "zone-b" },
                                    { label: "Zone C", value: "zone-c" },
                                ]}
                            />
                            <Select
                                className="flex-1"
                                label="Type"
                                defaultValue="all-types"
                                options={[
                                    { label: "All Types", value: "all-types" },
                                    { label: "Zone A", value: "zone-a" },
                                    { label: "Zone B", value: "zone-b" },
                                    { label: "Zone C", value: "zone-c" },
                                ]}
                            />
                            <Select
                                className="flex-1"
                                label="Priority"
                                defaultValue="all-types"
                                options={[
                                    { label: "All Priorities", value: "all-priorities" },
                                    { label: "Zone A", value: "zone-a" },
                                    { label: "Zone B", value: "zone-b" },
                                    { label: "Zone C", value: "zone-c" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                            <div className="flex justify-between">
                                <h3 className="font-semibold">Overflowing Bin</h3>
                                <span className="px-2 py-0.5 text-xs rounded-full bg-red-200 text-red-800">High</span>
                            </div>
                            <p className="text-sm text-gray-500">Overflow</p>
                            <p className="text-xs text-gray-400 mt-1">16/03/2026</p>
                        </div>
                        <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                            <div className="flex justify-between"><h3 className="font-semibold">Missed Pickup</h3><span className="px-2 py-0.5 text-xs rounded-full bg-yellow-200 text-yellow-800">Medium</span></div>
                            <p className="text-sm text-gray-500">Missed pickup</p><p className="text-xs text-gray-400 mt-1">16/03/2026</p></div>
                        <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                            <div className="flex justify-between"><h3 className="font-semibold">Illegal Dumping</h3><span className="px-2 py-0.5 text-xs rounded-full bg-red-200 text-red-800">High</span></div>
                            <p className="text-sm text-gray-500">Illegal dumping</p><p className="text-xs text-gray-400 mt-1">16/03/2026</p></div>
                        <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                            <div className="flex justify-between"><h3 className="font-semibold">Blocked Access</h3><span className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-800">Low</span></div>
                            <p className="text-sm text-gray-500">Blocked access</p><p className="text-xs text-gray-400 mt-1">16/03/2026</p></div>
                        <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                            <div className="flex justify-between"><h3 className="font-semibold">Equipment Issue</h3><span className="px-2 py-0.5 text-xs rounded-full bg-yellow-200 text-yellow-800">Medium</span></div>
                            <p className="text-sm text-gray-500">Equipment issue</p><p className="text-xs text-gray-400 mt-1">16/03/2026</p></div>
                    </div>
                </aside>
                <div className="flex-1 rounded-lg overflow-hidden border border-gray-300 relative z-0">

                </div>
            </div>
        </>
    )
}

export default page