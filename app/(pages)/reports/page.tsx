import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Reports | seqxio",
    description: "Generate and export standardized operational reports.",
    openGraph: {
        title: "Reports | seqxio",
        description: "Generate and export standardized operational reports.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Reports"
                subheading="Generate and export standardized operational reports."
            />
        </>
    )
}

export default page