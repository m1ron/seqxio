import React from "react";
import PageHeader from "@/app/components/common/PageHeader";
import Table from "@/app/components/common/Table";
import Button from "@/app/components/ui/Button";

type Status = {
    text: string;
    color: "on" | "off" | "red";
};

type Location = {
    text: string;
    icon?: "alert";
};

export type TeamRow = {
    name: string;
    title: string;
    status: Status;
    assignment?: string;
    time?: string;
    location: Location;
    issues?: string;
};

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
                <span className="block font-medium text-nowrap text-greenish tracking-[0.01em]">{row.title}</span>
            </>
        ),
    },
    {
        header: "Status",
        render: (row: TeamRow) => (
            <>
                <span className={`px-2.5 py-0.5 text-xs font-semibold text-nowrap tracking-[0.01em] inline-block border rounded-full cursor-default ${statusStyles[row.status.color]}`}>
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
            <button className="float-right flex justify-center items-center size-10 bg-white hover:bg-cool-grey focus:bg-cool-grey transition-colors border border-light-grey-200 rounded-2xl cursor-pointer outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"/></svg>
            </button>
        ),
    },
];

const data: TeamRow[] = [
    {
        name: "Crew A",
        title: "North · 4 members",
        status: {
            text: "On Duty",
            color: "on",
        },
        assignment: "Westside Bulk Pickup",
        time: "8:00 AM",
        location: {
            text: "Last ping: 4&nbsp;min&nbsp;ago",
        },
        issues: "2",
    },
    {
        name: "Crew B",
        title: "South · 5 members",
        status: {
            text: "Off Duty",
            color: "off",
        },
        time: "No active assignment",
        location: {
            text: "Last ping: 2&nbsp;hours&nbsp;ago",
        },
    },
    {
        name: "Crew C",
        title: "East · 3 members",
        status: {
            text: "Needs Attention",
            color: "red",
        },
        assignment: "Downtown Cleanup",
        time: "9:30 AM",
        location: {
            text: "Stale&nbsp;location",
            icon: "alert",
        },
        issues: "1",
    },
] satisfies TeamRow[];

export default function TeamTable({ heading, subheading }: TeamTableProps) {
    return (
        <>
            <PageHeader
                heading={heading}
                subheading={subheading}
            >
                <label htmlFor="live" className="checkbox text-sm leading-3.5 font-medium"><input id="live" type="checkbox" /> <span></span> Live only</label>
                <Button>+ Add Team</Button>
            </PageHeader>

            <div className="mb-4 flex max-md:flex-col gap-2">
                <div className="select">
                    <div className="select-box">All zones <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg></div>
                </div>
                <div className="select">
                    <div className="select-box">All <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg></div>
                </div>
                <input className="grow block px-3 py-2 border border-light-grey-200 text-sm leading-normal bg-white rounded-md outline-none" type="text" placeholder="Search teams or members…"/>
            </div>

            <Table
                columns={columns}
                data={data}
            />
        </>
    );
}