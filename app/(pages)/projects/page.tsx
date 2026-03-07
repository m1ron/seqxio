import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | seqxio",
    description: "Here you can manage all active and completed projects.",
    openGraph: {
        title: "Projects | seqxio",
        description: "Here you can manage all active and completed projects.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Projects"
                subheading="Here you can manage all active and completed projects."
            />


            <div className="mb-4 flex gap-4 items-center">
                <div className="space-y-1.25">
                    <span className="text-midnight-blue text-medium text-sm leading-5 tracking-half block">Status</span>
                    <div className="select">
                        <div className="select-box">All <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg></div>
                    </div>
                </div>
                <div className="space-y-1.25">
                    <span className="text-midnight-blue text-medium text-sm leading-5 tracking-half block">Zone</span>
                    <div className="select">
                        <div className="select-box">All zones <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg></div>
                    </div>
                </div>
                <ul className="tabs ml-auto">
                    <li className="active"><a href="#">Active</a></li>
                    <li><a href="#">All</a></li>
                </ul>
            </div>

            <div className="w-full bg-white border border-light-grey-300 rounded-lg overflow-x-auto scrollbar-hide">
                <table className="table bg-white">
                    <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Status</th>
                        <th>Assigned Team</th>
                        <th>Start Time</th>
                        <th>Roads</th>
                        <th>Issues</th>
                        <th className="text-right">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span className="block font-medium">Uptown Route Collection</span>
                            <span className="block text-nowrap text-greenish">Route Collection · Zone A</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-mint-green border-2 border-light-mint-green rounded-full inline-block text-deep-green text-xs leading-4 text-nowrap cursor-default">On Track</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Crew A</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Nov 24 · 3:00 AM</span>
                        </td>
                        <td>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Main St</span>
                                <span className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Oak Ave</span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <span className="block font-medium">Westside Bulk Pickup</span>
                            <span className="block text-nowrap text-greenish">Bulk Pickup · Zone B</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-pale-yellow border-2 border-light-yellow rounded-full inline-block text-brown text-xs leading-4 text-nowrap cursor-default">At Risk</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Crew B</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Nov 24 · 4:30 AM</span>
                        </td>
                        <td>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Pine Ln</span>
                                <span className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Maple Dr</span>
                                <span className="px-2 py-0.5 border border-light-grey-300 bg-transparent rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">+1 more</span>
                            </div>
                        </td>
                        <td>
                            <span className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M14.487 12 9.153 2.667a1.333 1.333 0 0 0-2.32 0L1.5 12a1.333 1.333 0 0 0 1.167 2h10.666a1.333 1.333 0 0 0 1.154-2M8 6v2.667M8 11.333h.007"/></svg>
                                <span className="font-medium text-ruby-red">2</span>
                            </span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <span className="block font-medium">South End Special Cleanup</span>
                            <span className="block text-nowrap text-greenish">Special Cleanup · Zone C</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-cool-grey border-2 border-light-grey-300 rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Completed</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Crew C</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Nov 24 · 6:00 AM</span>
                        </td>
                        <td>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Elm Rd</span>
                            </div>
                        </td>
                        <td>
                            <span className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M14.487 12 9.153 2.667a1.333 1.333 0 0 0-2.32 0L1.5 12a1.333 1.333 0 0 0 1.167 2h10.666a1.333 1.333 0 0 0 1.154-2M8 6v2.667M8 11.333h.007"/></svg>
                                <span className="font-medium text-ruby-red">1</span>
                            </span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <span className="block font-medium">Downtown Dumping Response</span>
                            <span className="block text-nowrap text-greenish">Illegal Dumping Response · Zone A</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-light-pink border-2 border-soft-pink rounded-full inline-block text-dark-red text-xs leading-4 text-nowrap cursor-default">Critical</span>
                        </td>
                        <td>
                            <span className="text-nowrap text-golden-brown">Unassigned</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Nov 25 · 8:00 AM</span>
                        </td>
                        <td></td>
                        <td>
                            <span className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M14.487 12 9.153 2.667a1.333 1.333 0 0 0-2.32 0L1.5 12a1.333 1.333 0 0 0 1.167 2h10.666a1.333 1.333 0 0 0 1.154-2M8 6v2.667M8 11.333h.007"/></svg>
                                <span className="font-medium text-ruby-red">5</span>
                            </span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <span className="block font-medium">Airport Runway Sweep</span>
                            <span className="block text-nowrap text-greenish">Special Cleanup · Zone C</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-light-blue border-2 border-pale-blue rounded-full inline-block text-royal-blue text-xs leading-4 text-nowrap cursor-default">In Progress</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Crew B</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Nov 25 · 12:00 AM</span>
                        </td>
                        <td>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default">Runway Dr</span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default page
