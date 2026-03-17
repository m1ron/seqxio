import React from "react";
import ProjectsTable from "@/app/components/projects/ProjectsList";
import { Metadata } from "next";

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
        <div className="w-full flex-1">
            <ProjectsTable
                heading="Projects"
                subheading="Here you can manage all active and completed projects."
            />
        </div>
    );
};

export default page;