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
                heading="Team"
                subheading="Track crews, assignments, and operational status."
            />
        </>
    )
}

export default page