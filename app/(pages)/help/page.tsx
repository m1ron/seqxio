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
            <div className="flex">
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
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M12 4H5.333C4.597 4 4 4.597 4 5.333v9.334C4 15.403 4.597 16 5.333 16H12c.736 0 1.333-.597 1.333-1.333V5.333C13.333 4.597 12.736 4 12 4M26.666 4h-6.667c-.736 0-1.333.597-1.333 1.333v4c0 .737.597 1.334 1.333 1.334h6.667c.736 0 1.333-.597 1.333-1.334v-4C28 4.597 27.402 4 26.666 4M26.666 16h-6.667c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333h6.667c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333M12 21.333H5.333c-.736 0-1.333.597-1.333 1.334v4C4 27.403 4.597 28 5.333 28H12c.736 0 1.333-.597 1.333-1.333v-4c0-.737-.597-1.334-1.333-1.334"/></svg>
                                <div className="">
                                    <h3 className="text-[24px] leading-8 font-semibold text-midnight-blue">Monitor today’s work</h3>
                                    <p className="text-greenish text-sm leading-5">View active projects, crews, and locations in real time.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="#" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg></a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M20 2.667h-8c-.737 0-1.334.597-1.334 1.333v2.667c0 .736.597 1.333 1.333 1.333h8c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M21.334 5.333h2.667A2.667 2.667 0 0 1 26.667 8v18.667a2.667 2.667 0 0 1-2.666 2.666H8a2.667 2.667 0 0 1-2.667-2.666V8a2.667 2.667 0 0 1 2.667-2.667h2.666M16 14.667h5.333M16 21.333h5.333M10.666 14.667h.013M10.666 21.333h.013"/></svg>
                                <div className="">
                                    <h3 className="text-[24px] leading-8 font-semibold text-midnight-blue">Manage projects</h3>
                                    <p className="text-greenish text-sm leading-5">View project status, add notes, upload photos, and resolve issues.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="/projects" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Projects <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg></a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M10.666 2.667V8M21.334 2.667V8M25.333 5.333H6.667A2.667 2.667 0 0 0 4 8v18.667a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 28 26.667V8a2.667 2.667 0 0 0-2.667-2.667M4 13.333h24"/></svg>
                                <div className="">
                                    <h3 className="text-[24px] leading-8 font-semibold text-midnight-blue">Coordinate schedules</h3>
                                    <p className="text-greenish text-sm leading-5">View scheduled work and add operational notes by date.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="#" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Calendar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="mb-4 text-[24px] leading-8 font-semibold text-midnight-blue tracking-[.03em]">Troubleshooting</h3>
                    <div className="space-y-4">
                        <div className="rounded-lg bg-white border border-light-grey-300 p-4 space-y-6">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M2.5 10A7.5 7.5 0 0 1 10 2.5a8.13 8.13 0 0 1 5.617 2.283L17.5 6.667"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M17.5 2.5v4.167h-4.166M17.5 10a7.5 7.5 0 0 1-7.5 7.5 8.13 8.13 0 0 1-5.617-2.283L2.5 13.333"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M6.667 13.333H2.5V17.5"/></svg>
                                <div className="">
                                    <h3 className="text-base leading-6 font-semibold text-midnight-blue">Data not updating?</h3>
                                    <p className="text-greenish text-sm leading-5">Try refreshing the page or checking your filters.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M20 2.667h-8c-.737 0-1.334.597-1.334 1.333v2.667c0 .736.597 1.333 1.333 1.333h8c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333"/><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M21.334 5.333h2.667A2.667 2.667 0 0 1 26.667 8v18.667a2.667 2.667 0 0 1-2.666 2.666H8a2.667 2.667 0 0 1-2.667-2.666V8a2.667 2.667 0 0 1 2.667-2.667h2.666M16 14.667h5.333M16 21.333h5.333M10.666 14.667h.013M10.666 21.333h.013"/></svg>
                                <div className="">
                                    <h3 className="text-[24px] leading-8 font-semibold text-midnight-blue">Manage projects</h3>
                                    <p className="text-greenish text-sm leading-5">View project status, add notes, upload photos, and resolve issues.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="/projects" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Projects <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg></a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                            <div className="flex gap-4">
                                <svg className="relative top-0.75 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.667" d="M10.666 2.667V8M21.334 2.667V8M25.333 5.333H6.667A2.667 2.667 0 0 0 4 8v18.667a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 28 26.667V8a2.667 2.667 0 0 0-2.667-2.667M4 13.333h24"/></svg>
                                <div className="">
                                    <h3 className="text-[24px] leading-8 font-semibold text-midnight-blue">Coordinate schedules</h3>s
                                    <p className="text-greenish text-sm leading-5">View scheduled work and add operational notes by date.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="#" className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-[.01em]">Go to Calendar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default page
