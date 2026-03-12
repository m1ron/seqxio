import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Settings | seqxio",
    description: "Manage your preferences and organization configuration.",
    openGraph: {
        title: "Settings | seqxio",
        description: "Manage your preferences and organization configuration.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Settings"
                subheading="Manage your preferences and organization configuration."
            />

            <div className="flex max-md:flex-col gap-6 md:gap-8">
                <div className="lg:w-69.75 shrink-0">
                    <ul className="text-sm leading-5 text-charcoal-grey font-medium space-y-1">
                        <li><a className="py-2 px-3 block bg-light-grey-300 text-gunmetal rounded-md" href="#">Profile</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Notifications</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Display &amp; Units</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Team &amp; Roles</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Zones</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Map &amp; Tracking</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Data &amp; Integrations</a></li>
                        <li><a className="py-2 px-3 block hover:bg-cool-grey rounded-md" href="#">Security</a></li>
                    </ul>
                </div>
                <div className="grow space-y-6">
                    <div className="bg-white border border-light-grey-300 rounded-lg p-6 space-y-7.5">
                        <h3 className="text-[24px] leading-none text-midnight-blue font-semibold">Account</h3>

                        <div className="space-y-5.5">
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="full-name">Full name</label>
                                <input className="form-control" id="full-name" value="John Doe"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="email">Email</label>
                                <input className="form-control" id="email" value="john.doe@example.com"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="role">Role</label>
                                <input className="form-control" id="role" value="Dispatcher"/>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-end">
                            <button className="btn px-4">Save changes</button>
                        </div>
                    </div>

                    <div className="bg-white border border-light-grey-300 rounded-lg p-6 space-y-7.5">
                        <h3 className="text-[24px] leading-none text-midnight-blue font-semibold">Password</h3>

                        <div className="space-y-5.5">
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="full-name">Current password</label>
                                <input className="form-control" id="full-name" value="John Doe"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="email">New password</label>
                                <input className="form-control" id="email" value="john.doe@example.com"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="role">Confirm new password</label>
                                <input className="form-control" id="role" value="Dispatcher"/>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-end">
                            <button className="btn px-4">Update password</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
