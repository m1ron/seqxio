import React from "react";

import Settings from "@/app/components/settings/Settings";

import { Metadata } from "next";

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
        <div className="w-full flex-1">
            <Settings
                heading="Settings"
                subheading="Manage your preferences and organization configuration."
            />
        </div>
    );
};

export default page;