import React from 'react'

import Analytics from "@/app/components/analytics/Analytics";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Analytics | seqxio",
    description: "Track operational performance across projects, teams, and zones.",
    openGraph: {
        title: "Analytics | seqxio",
        description: "Track operational performance across projects, teams, and zones.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <div className="w-full flex-1">
            <Analytics
                heading="Analytics"
                subheading="Track operational performance across projects, teams, and zones."
            />
        </div>
    )
}

export default page