"use client";

import React, { useState } from "react";

import PageHeader from "@/app/components/common/PageHeader";
import Button from "@/app/components/ui/Button";

import AddProjectModal from "@/app/components/projects/AddProjectModal";
import Icons from "@/app/components/common/Icons";

type DashboardHeaderProps = {
    heading: string;
    subheading?: string;
};

export default function DashboardHeader({ heading, subheading }: DashboardHeaderProps) {
    const [AddProjectModalOpen, setAddProjectModalOpen] = useState(false);

    return (
        <>
            <PageHeader
                className="md:mb-8 [&>header]:space-y-2 [&>header>h1]:leading-100 [&>header>h1]:tracking-normal [&>header>p]:-tracking-half"
                heading={heading}
                subheading={subheading}
            >
                <Button
                    className="mt-2 px-6 py-4 flex items-center gap-2 text-[18px] leading-6 -tracking-mid rounded-[25px]"
                    onClick={() => setAddProjectModalOpen(true)}
                >
                    <Icons icon="plus"/> Add Project
                </Button>
                <Button
                    className="mt-2 px-5 py-3.75 text-[18px] leading-6 -tracking-mid rounded-[25px]"
                    variant="outline"
                >
                    Import Data
                </Button>
            </PageHeader>

            <AddProjectModal
                isOpen={AddProjectModalOpen}
                onClose={() => setAddProjectModalOpen(false)}
            />
        </>
    );
}