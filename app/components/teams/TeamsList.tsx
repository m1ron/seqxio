"use client";

import React, { useMemo, useState } from "react";
import PageHeader from "@/app/components/common/PageHeader";
import Toggle from "@/app/components/ui/Toggle";
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";
import Table from "@/app/components/ui/Table";
import { teamsData, type TeamRow } from "@/app/components/teams/teams.data";

type TeamTableProps = {
    heading: string;
    subheading?: string;
};

const statusStyles: Record<string, string> = {
    on: "border-light-grey-300 bg-white text-deep-slate",
    off: "border-cool-mist bg-cool-mist text-deep-slate",
    red: "border-red bg-red text-white",
};

const columns = [
    {
        header: "Team",
        render: (row: TeamRow) => (
            <>
                <span className="block font-medium text-nowrap">{row.name}</span>
                <span className="block font-medium text-nowrap text-greenish tracking-minimal">{row.title}</span>
            </>
        ),
    },
    {
        header: "Status",
        render: (row: TeamRow) => (
            <>
                <span className={`px-2.5 py-0.5 text-xs font-semibold text-nowrap tracking-minimal inline-block border rounded-full cursor-default ${statusStyles[row.status.color]}`}>
                    {row.status.text}
                </span>
            </>
        ),
    },
    {
        header: "Current Assignment",
        render: (row: TeamRow) => (
            <>
                {row.assignment && (
                    <span className="block text-nowrap">{row.assignment}</span>
                )}
                {row.time && (
                    <time className="block text-nowrap text-greenish">{row.time}</time>
                )}
            </>
        ),
    },
    {
        header: "Location",
        render: (row: TeamRow) => (
            <>
                {row.location.text && (
                    <span className="flex items-center gap-1">
                        {row.location.icon && (
                            <svg className="grow-0 shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334M8 5.333V8M8 10.667h.007"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                        )}
                        <span className="font-nowrap" dangerouslySetInnerHTML={{ __html: row.location.text }}></span>
                    </span>
                )}
            </>
        ),
    },
    {
        header: "Issues",
        render: (row: TeamRow) => (
            <>
                {row.issues && (
                    <span className="flex items-center gap-1">
                        <svg className="grow-0 shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334M8 5.333V8M8 10.667h.007"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                        <span className="font-medium text-red" dangerouslySetInnerHTML={{ __html: row.issues }}></span>
                    </span>
                )}
            </>
        ),
    },
    {
        header: "Actions",
        className: "text-right",
        render: () => (
            <button className="float-right flex justify-center items-center size-10 bg-white hover:bg-light-grey-100 focus:bg-light-grey-100 transition-colors border border-light-grey-200 rounded-2xl cursor-pointer outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"/></svg>
            </button>
        ),
    },
];

export default function TeamsList({ heading, subheading }: TeamTableProps) {
    const [selectedZone, setSelectedZone] = useState("all-zones");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchValue, setSearchValue] = useState("");

    const filteredTeams = useMemo(() => {
        const normalizedSearch = searchValue.trim().toLowerCase();

        return teamsData.filter((team) => {
            const normalizedTitle = team.title.toLowerCase();
            const normalizedStatus = team.status.text.toLowerCase().replace(/\s+/g, "-");

            const matchesZone =
                selectedZone === "all-zones" ||
                normalizedTitle.includes(selectedZone);

            const matchesStatus =
                selectedStatus === "all" ||
                normalizedStatus === selectedStatus;

            const matchesSearch =
                normalizedSearch === "" ||
                team.name.toLowerCase().includes(normalizedSearch) ||
                team.title.toLowerCase().includes(normalizedSearch) ||
                (team.assignment?.toLowerCase().includes(normalizedSearch) ?? false);

            return matchesZone && matchesStatus && matchesSearch;
        });
    }, [selectedZone, selectedStatus, searchValue]);

    return (
        <>
            <PageHeader
                heading={heading}
                subheading={subheading}
            >
                <Toggle className="xl:mt-px" id="live" label="Live only"/>
                <Button className="xl:px-5 xl:mt-px">+ Add Team</Button>
            </PageHeader>

            <div className="mb-4 flex max-md:flex-col gap-2">
                <Select
                    className="min-w-45"
                    value={selectedZone}
                    onChangeAction={setSelectedZone}
                    options={[
                        { label: "All zones", value: "all-zones" },
                        { label: "North", value: "north" },
                        { label: "South", value: "south" },
                        { label: "East", value: "east" },
                    ]}
                />
                <Select
                    className="min-w-45"
                    value={selectedStatus}
                    onChangeAction={setSelectedStatus}
                    options={[
                        { label: "All", value: "all" },
                        { label: "On Duty", value: "on-duty" },
                        { label: "Off Duty", value: "off-duty" },
                        { label: "Needs Attention", value: "needs-attention" },
                    ]}
                />
                <input
                    className="input block grow"
                    type="text"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Search teams or members…"
                />
            </div>

            <Table
                columns={columns}
                data={filteredTeams}
            />
        </>
    );
}