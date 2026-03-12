import React from "react";
import ProjectsTable from "@/app/components/projects/ProjectsTable";
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
        <>
            <ProjectsTable
                heading="Projects"
                subheading="Here you can manage all active and completed projects."
            />
        </>
    );
};

export default page;