import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';
import Button from "@/app/components/ui/Button";
import Tabs from "@/app/components/ui/Tabs";

export const metadata: Metadata = {
    title: "Calendar | seqxio",
    description: "View projects and notes by date.",
    openGraph: {
        title: "Calendar | seqxio",
        description: "View projects and notes by date.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Calendar"
                subheading="View projects and notes by date."
            >
                <div className="mr-2 flex gap-2 self-start">
                    <Button>Add note</Button>
                    <Button variant="outline">Today</Button>
                </div>

                <Tabs
                    className="p-0 bg-transparent self-start [&>.shadow-sm]:shadow-none [&>.bg-white]:bg-cool-mist"
                    tabs={[
                        { label: "Month", value: "month" },
                        { label: "Week", value: "week" },
                        { label: "Day", value: "day" },
                    ]}
                />
            </PageHeader>
        </>
    )
}

export default page