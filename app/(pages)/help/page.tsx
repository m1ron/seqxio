import React from "react";

import Help from "@/app/components/help/Help";

import { Metadata } from "next";

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
        <div className="w-full flex-1">
            <Help
                heading="Help"
                subheading="Find answers, learn key workflows, or contact support."
            />
        </div>
    );
};

export default page;
