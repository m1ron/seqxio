import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Help | seqxio",
    description: "Find answers, learn key workflows, or contact support.",
    openGraph: {
        title: "Help | seqxio",
        description: "Find answers, learn key workflows, or contact support.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <div className="md:flex max-md:space-y-4 max-md:mb-12">
                <PageHeader
                    heading="Help"
                    subheading="Find answers, learn key workflows, or contact support."
                />

                <div className="ml-auto flex gap-4 items-center">
                    <a href="#" className="btn btn-outline">Give feedback</a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                <section className="space-y-4">
                    <h3 className="mb-4 text-[24px] leading-8 font-semibold text-midnight-blue tracking-[.03em]">Quick Help</h3>
                    <div className="max-md:space-y-4 md:grid md:grid-cols-2 md:gap-4">
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M12 4H5.333C4.597 4 4 4.597 4 5.333v9.334C4 15.403 4.597 16 5.333 16H12c.736 0 1.333-.597 1.333-1.333V5.333C13.333 4.597 12.736 4 12 4M26.666 4h-6.667c-.736 0-1.333.597-1.333 1.333v4c0 .737.597 1.334 1.333 1.334h6.667c.736 0 1.333-.597 1.333-1.334v-4C28 4.597 27.402 4 26.666 4M26.666 16h-6.667c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333h6.667c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333M12 21.333H5.333c-.736 0-1.333.597-1.333 1.334v4C4 27.403 4.597 28 5.333 28H12c.736 0 1.333-.597 1.333-1.333v-4c0-.737-.597-1.334-1.333-1.334"/></svg>
                                <div className="">
                                    <h3 className="text-[18px] md:text-[24px] leading-6 md:leading-8 font-semibold text-midnight-blue">Monitor today’s work</h3>
                                    <p className="text-greenish text-sm leading-5">View active projects, crews, and locations in real time.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="#" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g>
                                    <defs>
                                        <clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath>
                                    </defs>
                                </svg></a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M20 2.667h-8c-.737 0-1.334.597-1.334 1.333v2.667c0 .736.597 1.333 1.333 1.333h8c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M21.334 5.333h2.667A2.667 2.667 0 0 1 26.667 8v18.667a2.667 2.667 0 0 1-2.666 2.666H8a2.667 2.667 0 0 1-2.667-2.666V8a2.667 2.667 0 0 1 2.667-2.667h2.666M16 14.667h5.333M16 21.333h5.333M10.666 14.667h.013M10.666 21.333h.013"/></svg>
                                <div className="">
                                    <h3 className="text-[18px] md:text-[24px] leading-6 md:leading-8 font-semibold text-midnight-blue">Manage projects</h3>
                                    <p className="text-greenish text-sm leading-5">View project status, add notes, upload photos, and resolve issues.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="/projects" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Projects <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g>
                                    <defs>
                                        <clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath>
                                    </defs>
                                </svg></a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M10.666 2.667V8M21.334 2.667V8M25.333 5.333H6.667A2.667 2.667 0 0 0 4 8v18.667a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 28 26.667V8a2.667 2.667 0 0 0-2.667-2.667M4 13.333h24"/></svg>
                                <div className="">
                                    <h3 className="text-[18px] md:text-[24px] leading-6 md:leading-8 font-semibold text-midnight-blue">Coordinate schedules</h3>
                                    <p className="text-greenish text-sm leading-5">View scheduled work and add operational notes by date.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="#" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Calendar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g>
                                    <defs>
                                        <clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath>
                                    </defs>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="mb-4 text-[24px] leading-8 font-semibold text-midnight-blue tracking-[.03em]">Guided How-To’s</h3>
                    <div className="w-full">
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">How to create and manage a project <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <ol className="list-decimal list-inside">
                                    <li>Go to Projects</li>
                                    <li>Click Add Project</li>
                                    <li>Assign a team</li>
                                    <li>Monitor status and add notes/photos as needed</li>
                                </ol>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">How to assign a project to a team <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <ol className="list-decimal list-inside">
                                    <li>Open Teams</li>
                                    <li>Select a team</li>
                                    <li>Click Assign Project</li>
                                    <li>Choose project and confirm</li>
                                </ol>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">How to add an operational note <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <ol className="list-decimal list-inside">
                                    <li>Click Add Note from Dashboard, Calendar, Project, or Team</li>
                                    <li>Select project and team</li>
                                    <li>Add details and save</li>
                                </ol>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">How to handle issues <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <ol className="list-decimal list-inside">
                                    <li>Identify flagged projects, teams, or roads</li>
                                    <li>Open details sheet</li>
                                    <li>Review notes/photos</li>
                                    <li>Mark issue resolved when complete</li>
                                </ol>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">How to track crews in real time <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <ol className="list-decimal list-inside">
                                    <li>Open Dashboard</li>
                                    <li>Use the map to view active teams</li>
                                    <li>Click a team or road for details</li>
                                </ol>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="mb-4 text-[24px] leading-8 font-semibold text-midnight-blue tracking-[.03em]">FAQ</h3>
                    <div className="w-full">
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">Why can’t I see a team’s live location? <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <p>Location may be unavailable if the team is off duty or hasn’t checked in recently.</p>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">What does ‘Needs Attention’ mean? <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <p>It indicates delays, open issues, or missing information.</p>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">Who can see notes I add? <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <p>Visibility depends on the note’s visibility setting (team-only, admins, or everyone).</p>
                            </div>
                        </section>
                        <section className="border-b border-b-light-grey-300">
                            <h3 className="text-base leading-6 font-medium text-midnight-blue"><a href="#" className="py-4 block relative">How are issues created? <svg className="absolute top-[50%] right-0 -mt-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4"/></svg></a></h3>
                            <div className="text-sm leading-5 pb-4 hidden">
                                <p>Issues can be flagged from photos, notes, or system rules.</p>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="mb-4 text-[24px] leading-8 font-semibold text-midnight-blue tracking-[.03em]">Troubleshooting</h3>
                    <div className="space-y-4">
                        <div className="rounded-lg bg-white border border-light-grey-300 p-4 space-y-6">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M2.5 10A7.5 7.5 0 0 1 10 2.5a8.13 8.13 0 0 1 5.617 2.283L17.5 6.667"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M17.5 2.5v4.167h-4.166M17.5 10a7.5 7.5 0 0 1-7.5 7.5 8.13 8.13 0 0 1-5.617-2.283L2.5 13.333"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M6.667 13.333H2.5V17.5"/></svg>
                                <div className="">
                                    <h3 className="text-base leading-6 font-semibold text-midnight-blue tracking-half">Data not updating?</h3>
                                    <p className="text-charcoal-grey text-sm leading-5 tracking-[-.005em]">Try refreshing the page or checking your filters.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-4 space-y-6">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 16.667h.008M7.084 13.69a4.167 4.167 0 0 1 5.833 0M4.166 10.716a8.33 8.33 0 0 1 4.308-2.242M15.833 10.716a8.3 8.3 0 0 0-1.673-1.27M1.666 7.35a12.5 12.5 0 0 1 3.48-2.203M18.332 7.35a12.5 12.5 0 0 0-9.406-3.137M1.666 1.667l16.667 16.666"/></g>
                                    <defs>
                                        <clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath>
                                    </defs>
                                </svg>
                                <div className="">
                                    <h3 className="text-base leading-6 font-semibold text-midnight-blue tracking-half">Map not loading?</h3>
                                    <p className="text-charcoal-grey text-sm leading-5 tracking-[-.005em]">Check your internet connection and map settings.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-4 space-y-6">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="m1.666 1.667 16.667 16.666M4.167 4.167A.833.833 0 0 0 3.334 5v5.833c0 4.167 2.917 6.25 6.392 7.45.18.067.376.07.558.009 1.958-.684 3.733-1.642 4.917-3.092M7.758 3.043A10.2 10.2 0 0 0 9.367 1.9a.975.975 0 0 1 1.267 0c1.458 1.275 3.533 2.267 5.2 2.267a.833.833 0 0 1 .833.833v5.833q0 .528-.067 1.054"/></g>
                                    <defs>
                                        <clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath>
                                    </defs>
                                </svg>
                                <div className="">
                                    <h3 className="text-base leading-6 font-semibold text-midnight-blue tracking-half">Can’t perform an action?</h3>
                                    <p className="text-charcoal-grey text-sm leading-5 tracking-[-.005em]">You may not have permission for that action.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-4 space-y-6">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 5v5l3.333 1.667"/><path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666"/></g>
                                    <defs>
                                        <clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath>
                                    </defs>
                                </svg>
                                <div className="">
                                    <h3 className="text-base leading-6 font-semibold text-midnight-blue tracking-half">Seeing outdated information?</h3>
                                    <p className="text-charcoal-grey text-sm leading-5 tracking-[-.005em]">Confirm your date range and filters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="mb-4 text-[24px] leading-8 font-semibold text-midnight-blue tracking-[.03em]">Contact &amp; Support</h3>
                    <div className="rounded-lg bg-white border border-light-grey-300 p-6 space-y-4.5">
                        <p className="text-charcoal-grey text-base leading-5 tracking-[.005em]">Still need help? Our support team is here to assist you.</p>
                        <div className="flex md:items-center gap-4 max-md:flex-col">
                            <a href="#" className="btn">Contact support</a>
                            <a href="#" className="btn btn-outline">Report a bug</a>
                            <a href="#" className="btn btn-outline">Request a feature</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default page
