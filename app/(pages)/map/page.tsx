import React from "react";

import Map from "@/app/components/map/Map";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Map | seqxio",
    description: "View all projects and roads on the interactive map",
    openGraph: {
        title: "Map | seqxio",
        description: "View all projects and roads on the interactive map",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <div className="w-full flex flex-col flex-1">
            <Map
                heading="Map"
                subheading="View all projects and roads on the interactive map"
            />
        </div>
    )
}

export default page;