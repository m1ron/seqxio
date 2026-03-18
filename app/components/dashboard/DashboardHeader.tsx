"use client";

import React, { useState } from "react";

import PageHeader from "@/app/components/common/PageHeader";
import Button from "@/app/components/ui/Button";

import AddProjectModal from "@/app/components/projects/AddProjectModal";

type DashboardHeaderProps = {
    heading: string;
    subheading?: string;
};

export default function DashboardHeader({ heading, subheading }: DashboardHeaderProps) {
    const [AddProjectModalOpen, setAddProjectModalOpen] = useState(false);

    return (
        <>
            <PageHeader heading={heading} subheading={subheading}>
                <Button
                    onClick={() => setAddProjectModalOpen(true)}
                >
                    + Add Project
                </Button>
                <Button
                    variant="outline"
                >
                    Import Data
                </Button>
            </PageHeader>

            <AddProjectModal
                isOpen={AddProjectModalOpen}
                onClose={() => setAddProjectModalOpen(false)}
                onSave={() => setAddProjectModalOpen(false)}
            />
        </>
    );
}