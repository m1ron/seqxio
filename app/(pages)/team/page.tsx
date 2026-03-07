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

            <div className="flex">
                <PageHeader
                    heading="Teams"
                    subheading="Track crews, assignments, and operational status."
                />

                <div className="ml-auto flex gap-4 items-center">
                    <label htmlFor="live" className="checkbox text-sm leading-3.5 font-medium"><input id="live" type="checkbox"/> <span></span> Live only</label>
                    <a href="#" className="btn">+ Add Team</a>
                </div>
            </div>

            <div className="mb-4 flex gap-2">
                <div className="select">
                    <div className="select-box">All zones <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg></div>
                </div>
                <div className="select">
                    <div className="select-box">All <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg></div>
                </div>
                <input className="grow block px-3 py-2 border border-light-grey-200 text-sm leading-normal bg-white rounded-md outline-none" type="text" placeholder="Search teams or members…"/>
            </div>

            <div className="w-full bg-white border border-light-grey-300 rounded-lg overflow-x-auto scrollbar-hide">
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
                            <span className="block font-medium  text-nowrap text-greenish">North · 4 members</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-white border border-light-grey-300 rounded-full inline-block text-xs leading-4 font-semibold text-nowrap cursor-default">On Duty</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Westside Bulk Pickup</span>
                            <time className="block text-greenish text-nowrap">8:00 AM</time>
                        </td>
                        <td>
                            <span className="text-nowrap">Last ping:</span> <span className="text-nowrap">4 min ago</span>
                        </td>
                        <td>
                            <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334M8 5.333V8M8 10.667h.007"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                                <span className="font-medium text-red">2</span>
                            </span>
                        </td>
                        <td>
                            <a
                                className="float-right flex justify-center items-center size-10 bg-white border border-light-grey-200 rounded-2xl" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"/></svg>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="block font-medium">Crew B</span>
                            <span className="block font-medium  text-nowrap text-greenish">South · 5 members</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-cool-mist border border-cool-mist rounded-full inline-block text-deep-slate text-xs leading-4 font-semibold text-nowrap cursor-default">Off Duty</span>
                        </td>
                        <td>
                            <span className="block text-greenish text-nowrap">No active assignment</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Last ping:</span> <span className="text-nowrap">2 hours ago</span>
                        </td>
                        <td></td>
                        <td>
                            <a
                                className="float-right flex justify-center items-center size-10 bg-white border border-light-grey-200 rounded-2xl" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"/></svg>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="block font-medium">Crew C</span>
                            <span className="block font-medium  text-nowrap text-greenish">East · 3 members</span>
                        </td>
                        <td>
                            <span className="px-2 py-0.5 bg-red border border-red rounded-full inline-block text-cool-white text-xs leading-4 font-semibold text-nowrap cursor-default">Needs Attention</span>
                        </td>
                        <td>
                            <span className="text-nowrap">Downtown Cleanup</span>
                            <time className="block text-greenish text-nowrap">9:30 AM</time>
                        </td>
                        <td>
                            <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334M8 5.333V8M8 10.667h.007"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                                <span className="text-nowrap">Stale location</span>
                            </span>
                        </td>
                        <td>
                            <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334M8 5.333V8M8 10.667h.007"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                                <span className="font-medium text-red">1</span>
                            </span>
                        </td>
                        <td>
                            <a
                                className="float-right flex justify-center items-center size-10 bg-white border border-light-grey-200 rounded-2xl" href="#">
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
