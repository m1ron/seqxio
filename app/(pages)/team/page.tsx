import React from 'react'

import TeamsList from "@/app/components/teams/TeamsList";

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
        <div className="w-full flex-1">
            <TeamsList
                heading="Teams"
                subheading="Track crews, assignments, and operational status."
            />
        </div>
    )
}

export default page