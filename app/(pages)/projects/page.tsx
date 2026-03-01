import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | seqxio",
    description: "Here you can manage all active and completed projects.",
    openGraph: {
        title: "Projects | seqxio",
        description: "Here you can manage all active and completed projects.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Projects"
                subheading="Here you can manage all active and completed projects."
            />
        </>
    )
}

export default page