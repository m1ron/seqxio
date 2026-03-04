import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Team | seqxio",
    description: "Track crews, assignments, and operational status.",
    openGraph: {
        title: "Team | seqxio",
        description: "Track crews, assignments, and operational status.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Teams"
                subheading="Track crews, assignments, and operational status."
            />

            <div className="mb-4">
                <input
                    className="w-full block px-2 py-1 border border-light-grey-200 text-sm leading-normal bg-white rounded-md outline-none"
                    type="text"
                    placeholder="Search teams or members…"
                />
            </div>

            <div className="w-full bg-white border border-light-grey-300 rounded-md overflow-x-auto scrollbar-hide">
                <table className="table bg-white">
                    <thead>
                    <tr>
                        <th>Team</th>
                        <th>Status</th>
                        <th>Current Assignment</th>
                        <th>Location</th>
                        <th>Issues</th>
                        <th className="text-right">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span className="block font-medium">Crew A</span>
                            <span className="block font-medium  text-nowrap">North · 4 members</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-white border border-light-grey-300 rounded-full inline-block text-sm leading-4 font-semibold text-nowrap cursor-default">On Duty</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Westside Bulk Pickup</span>
                            <time className="block text-greenish text-nowrap">8:00 AM</time>
                        </td>
                        <td>
                            <span className="text-nowrap">Last ping:</span> <span className="text-nowrap">4 min ago</span>
                        </td>
                        <td>
                            <span className="font-medium text-red">2</span>
                        </td>
                        <td>
                            <a
                                className="float-right flex justify-center items-center size-10 bg-white border border-light-grey-200 rounded-2xl"
                                href="#"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"/></svg>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default page