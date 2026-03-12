"use client";

import React, { useState } from "react";
import Icons from "@/app/components/common/Icons";
import PageHeader from "@/app/components/common/PageHeader";
import Table from "@/app/components/ui/Table";
import Tabs from "@/app/components/ui/Tabs";
import { projectsData, type ProjectRow, type ProjectStatusColor } from "@/app/components/projects/projects.data";

type ProjectsTableProps = {
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
          className="px-2 py-0.5 border border-transparent bg-cool-mist rounded-full inline-block text-xs leading-4 text-nowrap cursor-default"
        >
          {road}
        </span>
      ))}

      {!expanded && roads.length > 2 ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="px-2 py-0.5 border border-light-grey-300 bg-transparent rounded-full inline-block text-xs leading-4 text-nowrap cursor-pointer hover:bg-cool-mist transition-colors"
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
      <button className="float-right flex justify-center items-center size-10 bg-white hover:bg-cool-grey focus:bg-cool-grey transition-colors border border-light-grey-200 rounded-2xl cursor-pointer outline-none">
        <Icons icon="dots"/>
      </button>
    ),
  },
];

export default function ProjectsTable({ heading, subheading, }: ProjectsTableProps) {
  return (
    <>
      <PageHeader heading={heading} subheading={subheading}/>

      <div className="mb-4 flex max-md:flex-col gap-2 md:items-end">
        <div className="space-y-1.25">
          <span className="text-midnight-blue text-medium text-sm leading-5 tracking-half block">
            Status
          </span>
          <div className="select">
            <div className="select-box">
              All
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
              <path
                stroke="#020817"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.333"
                d="m4 6 4 4 4-4"
                opacity=".5"
              />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1.25">
          <span className="text-midnight-blue text-medium text-sm leading-5 tracking-half block">
            Zone
          </span>
          <div className="select">
            <div className="select-box">
              All zones
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
              <path
                stroke="#020817"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.333"
                d="m4 6 4 4 4-4"
                opacity=".5"
              />
              </svg>
            </div>
          </div>
        </div>

        <Tabs
          tabs={[
            { label: "Active", value: "active" },
            { label: "All", value: "all" },
          ]}
          className="md:ml-auto"
        />
      </div>

      <Table columns={columns} data={projectsData}/>
    </>
  );
}