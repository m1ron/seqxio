import React from "react";

import Reports from "@/app/components/reports/Reports";

import { Metadata } from "next";

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
        <div className="w-full flex-1">
            <Reports
                heading="Reports"
                subheading="Generate and export standardized operational reports."
            />
        </div>
    );
};

export default page;