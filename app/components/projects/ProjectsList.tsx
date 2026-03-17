"use client";

import React, { useMemo, useState } from "react";

import Icons from "@/app/components/common/Icons";
import PageHeader from "@/app/components/common/PageHeader";
import Table from "@/app/components/ui/Table";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";

import { projectsData, type ProjectRow, type ProjectStatusColor } from "@/app/components/projects/projects.data";
import Button from "@/app/components/ui/Button";

type ProjectsListProps = {
    heading: string;
    subheading?: string;
};

const statusStyles: Record<ProjectStatusColor, string> = {
    green: "bg-mint-green border-light-mint-green text-deep-green",
    yellow: "bg-pale-yellow border-light-yellow text-brown",
    gray: "bg-cool-grey border-light-grey-300 text-midnight-blue",
    red: "bg-light-pink border-soft-pink text-dark-red",
    blue: "bg-light-blue border-pale-blue text-royal-blue",
};

function RoadsList({ roads }: { roads: string[] }) {
    const [expanded, setExpanded] = useState(false);

    if (!roads.length) {
        return null;
    }

    const visibleRoads = expanded ? roads : roads.slice(0, 2);
    const hiddenCount = roads.length - 2;

    return (
        <div className="flex gap-1 items-center flex-wrap">
            {visibleRoads.map((road) => (
                <span
                    key={road}
                    className="px-2.5 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default"
                >
          {road}
        </span>
            ))}

            {!expanded && roads.length > 2 ? (
                <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="px-2.5 py-0.5 border border-light-grey-300 bg-transparent rounded-full inline-block text-xs leading-4 text-nowrap hover:bg-cool-mist focus:bg-cool-mist transition-colors cursor-pointer outline-none"
                >
                    +{hiddenCount} more
                </button>
            ) : null}
        </div>
    );
}

const columns = [
    {
        header: "Project Name",
        render: (row: ProjectRow) => (
            <>
                <span className="block font-medium text-nowrap">{row.name}</span>
                <span className="block text-nowrap text-greenish">{row.title}</span>
            </>
        ),
    },
    {
        header: "Status",
        render: (row: ProjectRow) => (
            <span className={`px-2 py-0.5 border-2 rounded-full inline-block text-xs leading-4 text-nowrap cursor-default ${statusStyles[row.status.color]}`}>
        {row.status.text}
      </span>
        ),
    },
    {
        header: "Assigned Team",
        render: (row: ProjectRow) =>
            row.assignedTeam ? (
                <span className={`text-nowrap ${row.assignedTeamClassName ?? ""}`}>
          {row.assignedTeam}
        </span>
            ) : null,
    },
    {
        header: "Start Time",
        render: (row: ProjectRow) => (
            <span className="text-nowrap">{row.startTime}</span>
        ),
    },
    {
        header: "Roads",
        render: (row: ProjectRow) => <RoadsList roads={row.roads}/>,
    },
    {
        header: "Issues",
        render: (row: ProjectRow) =>
            row.issues ? (
                <span className="flex items-center gap-1.5">
          <Icons icon="issues"/>
          <span className="font-medium text-ruby-red cursor-default">{row.issues}</span>
        </span>
            ) : null,
    },
    {
        header: "Actions",
        className: "text-right",
        render: () => (
            <button className="float-right flex justify-center items-center size-10 bg-white hover:bg-light-grey-100 focus:bg-light-grey-100 transition-colors border border-light-grey-200 rounded-2xl cursor-pointer outline-none">
                <Icons icon="dots"/>
            </button>
        ),
    },
];

export default function ProjectsList({ heading, subheading }: ProjectsListProps) {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedZone, setSelectedZone] = useState("all-zones");

    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const normalizedStatus = project.status.text.toLowerCase().replace(/\s+/g, "-");
            const normalizedTitle = project.title.toLowerCase();

            const matchesStatus =
                selectedStatus === "all" || normalizedStatus === selectedStatus;

            const matchesZone =
                selectedZone === "all-zones" || normalizedTitle.includes(selectedZone.replace("-", " "));

            return matchesStatus && matchesZone;
        });
    }, [selectedStatus, selectedZone]);

    return (
        <>
            {/* PageHeader */}
            <PageHeader
                className="xl:mb-7.25"
                heading={heading}
                subheading={subheading}
            >
                <Button className="xl:px-5 xl:mt-px xl:tracking-minimal">+ Add Project</Button>
            </PageHeader>

            <div className="mb-4 flex max-md:flex-col gap-4 md:gap-2 md:items-center">
                <div className="flex max-sm:flex-col gap-3 sm:gap-4">
                    <Select
                        className="min-w-45 max-md:flex-1"
                        label="Status"
                        value={selectedStatus}
                        onChangeAction={setSelectedStatus}
                        options={[
                            { label: "All", value: "all" },
                            { label: "On Track", value: "on-track" },
                            { label: "At Risk", value: "at-risk" },
                            { label: "Completed", value: "completed" },
                            { label: "Critical", value: "critical" },
                            { label: "In Progress", value: "in-progress" },
                        ]}
                    />

                    <Select
                        className="min-w-45 max-md:flex-1"
                        label="Zone"
                        value={selectedZone}
                        onChangeAction={setSelectedZone}
                        options={[
                            { label: "All zones", value: "all-zones" },
                            { label: "Zone A", value: "zone-a" },
                            { label: "Zone B", value: "zone-b" },
                            { label: "Zone C", value: "zone-c" },
                        ]}
                    />
                </div>

                <Tabs
                    className="max-md:self-end md:ml-auto md:mb-0.5"
                    tabs={[
                        { label: "Active", value: "active" },
                        { label: "All", value: "all" },
                    ]}
                />
            </div>

            <Table
                className="xl:[&>div>table>*>tr>*]:px-6"
                columns={columns}
                data={filteredProjects}
            />
        </>
    );
}