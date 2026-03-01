import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Help | seqxio",
    description: "Find answers, learn key workflows, or contact support.",
    openGraph: {
        title: "Help | seqxio",
        description: "Find answers, learn key workflows, or contact support.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                heading="Help"
                subheading="Find answers, learn key workflows, or contact support."
            />
        </>
    )
}

export default page