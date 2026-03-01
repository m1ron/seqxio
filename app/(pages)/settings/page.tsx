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
        </>
    )
}

export default page