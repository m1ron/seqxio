import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

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
            <PageHeader
                heading="Analytics"
                subheading="Track operational performance across projects, teams, and zones."
            />
        </div>
    )
}

export default page