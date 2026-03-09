import React from 'react'

import PageHeader from "@/app/components/common/PageHeader";
import TeamTable from "@/app/components/team/TeamTable";
import Button from "@/app/components/ui/Button";

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
            <TeamTable
                heading="Teams"
                subheading="Track crews, assignments, and operational status."
            />
        </>
    )
}

export default page
