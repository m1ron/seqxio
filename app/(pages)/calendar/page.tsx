import React from "react";

import Calendar from "@/app/components/calendar/Calendar";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calendar | seqxio",
    description: "View projects and notes by date.",
    openGraph: {
        title: "Calendar | seqxio",
        description: "View projects and notes by date.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <div className="w-full flex-1">
            <Calendar
                heading="Calendar"
                subheading="View projects and notes by date."
            />
        </div>
    );
};

export default page;