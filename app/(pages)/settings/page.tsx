import React from 'react'
import PageHeader from "@/app/components/common/PageHeader";
import Button from "@/app/components/ui/Button";
import SettingsMenu from "@/app/components/settings/SettingsMenu";

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

const settingsMenuItems = [
    { label: "Profile", href: "/settings", active: true },
    { label: "Notifications", href: "#" },
    { label: "Display & Units", href: "#" },
    { label: "Team & Roles", href: "#" },
    { label: "Zones", href: "#" },
    { label: "Map & Tracking", href: "#" },
    { label: "Data & Integrations", href: "#" },
    { label: "Security", href: "#" },
];

const page = () => {
    return (
        <div className="w-full flex-1">
            <PageHeader
                heading="Settings"
                subheading="Manage your preferences and organization configuration."
            />

            <div className="flex max-md:flex-col gap-6 md:gap-4 xl:gap-8">
                <div className="md:w-45 xl:w-69.75 shrink-0">
                    <SettingsMenu items={settingsMenuItems} />
                </div>
                <div className="grow space-y-6">
                    <form className="bg-white border border-light-grey-300 rounded-lg p-6 space-y-7.5" action="/settings">
                        <h3 className="text-2xl font-semibold leading-none text-midnight-blue">Account</h3>

                        <div className="space-y-5.5">
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="full-name">Full name</label>
                                <input className="input w-full" id="full-name" type="text" defaultValue="John Doe"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="email">Email</label>
                                <input className="input w-full" id="email" type="text" defaultValue="john.doe@example.com"/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="role">Role</label>
                                <input className="input w-full" id="role" type="text" defaultValue="Dispatcher"/>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-end">
                            <Button type="submit">Save changes</Button>
                        </div>
                    </form>

                    <form className="md:mb-4 xl:mb-8 xxl:mb-10 bg-white border border-light-grey-300 rounded-lg p-6 space-y-7.5" action="/settings">
                        <h3 className="text-2xl font-semibold leading-none text-midnight-blue">Password</h3>

                        <div className="space-y-5.5">
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="current-password">Current password</label>
                                <input className="input w-full" id="current-password" type="password" defaultValue=""/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="new-password">New password</label>
                                <input className="input w-full" id="new-password" type="password" defaultValue=""/>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium leading-none tracking-minimal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block" htmlFor="confirm-password">Confirm new password</label>
                                <input className="input w-full" id="confirm-password" type="password" defaultValue=""/>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-end">
                            <Button type="submit">Update password</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page