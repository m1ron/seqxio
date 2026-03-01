import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

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
            />
        </>
    )
}

export default page