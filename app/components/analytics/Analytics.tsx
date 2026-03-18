"use client";

import React from "react";

import PageHeader from "@/app/components/common/PageHeader";

import CheckBox from "@/app/components/ui/CheckBox";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import Tabs from "@/app/components/ui/Tabs";

import CollectionChart from "@/app/components/analytics/CollectionChart";
import CompletionChart from "@/app/components/analytics/CompletionChart";
import EfficiencyChart from "@/app/components/analytics/EfficiencyChart";
import RankingTable from "@/app/components/analytics/RankingTable";

type AnalyticsProps = {
    heading: string;
    subheading?: string;
};

function formatMinutes(value: number) {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours}h ${minutes}m`;
}

export default function Analytics({ heading, subheading }: AnalyticsProps) {
    return (
        <div className="w-full flex-1">

            <PageHeader
                className="mb-4.5"
                heading={heading}
                subheading={subheading}
            />

            <div className="mb-4 flex gap-3 flex-wrap">
                <Select
                    className="[&>*>*]:min-w-55"
                    options={[
                        { label: "Custom range…", value: "" },
                    ]}
                />

                <Button className="tracking-minimal" variant="outline">
                    Select dates
                </Button>

                <Button className="tracking-half" variant="outline">
                    Nov 1, 2023 – Feb 19, 2026
                </Button>

                <CheckBox
                    className="ml-1"
                    id="compare"
                    label="Compare to previous period"
                />
            </div>


            {/* Filters */}
            <div className="py-4 mb-4 md:mb-6 grid xl:flex grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-t-light-grey-300 border-b-light-grey-300">
                <Select
                    className="max-xl:w-full xl:min-w-45"
                    options={[
                        { label: "All zones", value: "" },
                    ]}
                />
                <Select
                    className="max-xl:w-full xl:min-w-45"
                    options={[
                        { label: "All teams", value: "" },
                    ]}
                />
                <Select
                    className="max-xl:w-full xl:min-w-45"
                    options={[
                        { label: "All types", value: "" },
                    ]}
                />
                <Select
                    className="max-xl:w-full xl:min-w-45"
                    options={[
                        { label: "All", value: "" },
                        { label: "On Track", value: "On Track" },
                        { label: "At Risk", value: "At Risk" },
                        { label: "Delayed", value: "Delayed" },
                        { label: "Critical", value: "Critical" },
                        { label: "In Progress", value: "In Progress" },
                        { label: "Completed", value: "Completed" },
                    ]}
                />
            </div>

            {/* Statistics */}
            <div className="grid xxl:flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="xxl:w-51.5 p-6 shrink-0 grow-0 rounded-lg border border-light-grey-300 bg-white text-midnight-blue shadow-xs">
                    <div className="mb-2 flex flex-row gap-2 items-center justify-between">
                        <p className="text-sm font-medium -tracking-half">Collected Waste</p>
                        <Tabs
                            className="p-0.5 xl:mt-1.5 xl:-mr-2 text-xs bg-cool-grey [&>li>button]:px-1.5 [&>li>button]:py-1"
                            tabs={[
                                { label: "tons", value: "tons" },
                                { label: "lbs", value: "lbs" },
                            ]}
                        />
                    </div>
                    <p><strong className="text-2xl font-bold tracking-wider">1,284.6</strong> <small className="ml-1 text-base font-normal text-greenish">tons</small></p>
                    <small className="block text-xs text-greenish">+200 vs previous period</small>
                </div>
                <div className="p-6 border border-light-grey-300 flex-1 bg-white rounded-lg text-midnight-blue shadow-xs">
                    <p className="mb-2 text-sm font-medium -tracking-half">Projects Completed</p>
                    <strong className="block text-2xl font-bold tracking-standart">86</strong>
                    <small className="block text-xs text-greenish">92% on-time</small>
                </div>
                <div className="p-6 border border-light-grey-300 flex-1 bg-white rounded-lg text-midnight-blue shadow-xs">
                    <p className="mb-2 text-sm font-medium -tracking-half">Avg Completion Time</p>
                    <strong className="block text-2xl font-bold tracking-standart">2h 14m</strong>
                    <small className="block text-xs text-greenish">-8m vs previous period</small>
                </div>
                <div className="p-6 border border-light-grey-300 flex-1 bg-white rounded-lg text-midnight-blue shadow-xs">
                    <p className="mb-2 text-sm font-medium -tracking-half">Open Issues</p>
                    <strong className="block text-2xl font-bold tracking-standart">12</strong>
                    <small className="block text-xs text-greenish">Top source: Road hazards</small>
                </div>
                <div className="p-6 border border-light-grey-300 flex-1 bg-white rounded-lg text-midnight-blue shadow-xs">
                    <p className="mb-2 text-sm font-medium -tracking-half">Unassigned Projects</p>
                    <strong className="block text-2xl font-bold tracking-standart">3</strong>
                    <small className="block text-xs text-greenish">Needs dispatch action</small>
                </div>
                <div className="p-6 border border-light-grey-300 flex-1 bg-white rounded-lg text-midnight-blue shadow-xs">
                    <p className="mb-2 text-sm font-medium -tracking-half">Active Crews</p>
                    <strong className="block text-2xl font-bold tracking-standart">3 / 5</strong>
                    <small className="block text-xs text-greenish">2 crews currently in field</small>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* Collection Trend */}
                <section className="p-6 rounded-lg bg-white text-midnight-blue shadow-xs border border-light-grey-300">
                    <div className="mt-1.25 mb-3.5 flex flex-row gap-2 items-start">
                        <h3 className="text-base font-semibold tracking-[-0.015em]">Collection Trend</h3>
                        <Tabs
                            className="ml-auto p-0.5 text-xs bg-cool-grey [&>li>button]:px-1.75 [&>li>button]:py-1.25"
                            tabs={[
                                { label: "Daily", value: "daily" },
                                { label: "Weekly", value: "weekly" },
                            ]}
                        />
                        <Tabs
                            className="p-0.5 text-xs bg-cool-grey [&>li>button]:px-1.75 [&>li>button]:py-1.25"
                            tabs={[
                                { label: "lbs", value: "lbs" },
                                { label: "tons", value: "tons" },
                            ]}
                        />
                    </div>
                    <div className="pt-2 pr-3.75 pb-3 pl-7.25 relative w-full overflow-y-auto scrollbar-hidden">
                        <CollectionChart
                            data={[
                                { day: "Mon", value: 400 },
                                { day: "Tue", value: 300 },
                                { day: "Wed", value: 200 },
                                { day: "Thu", value: 280 },
                                { day: "Fri", value: 180 },
                                { day: "Sat", value: 240 },
                                { day: "Sun", value: 350 },
                            ]}
                        />
                    </div>
                </section>

                {/* On-Time Completion */}
                <section className="p-6 rounded-lg bg-white text-midnight-blue shadow-xs border border-light-grey-300">
                    <h3 className="mb-6 text-base font-semibold tracking-[-0.015em]">On-Time Completion</h3>
                    <div className="pt-1.5 relative w-full overflow-y-auto scrollbar-hidden">
                        <CompletionChart
                            data={[
                                { name: "On time", value: 68, color: "#1E88F5" },
                                { name: "Late", value: 12, color: "#FFC83D" },
                                { name: "In progress", value: 20, color: "#14C7A1" },
                            ]}
                        />

                    </div>
                </section>

                {/* Issue Sources */}
                <section className="p-6 rounded-lg bg-white text-midnight-blue shadow-xs border border-light-grey-300">
                    <h3 className="mb-6 text-base font-semibold tracking-[-0.015em]">Issue Sources</h3>
                    <div className="relative h-60 w-full overflow-y-auto scrollbar-hidden">
                        <EfficiencyChart
                            yAxisWidth={112}
                            data={[
                                { label: "Overflow", value: 140 },
                                { label: "Missed pickup", value: 106 },
                                { label: "Illegal dumping", value: 78 },
                                { label: "Road blocked", value: 52 },
                                { label: "Equipment", value: 34 },
                                { label: "Weather", value: 17 },
                                { label: "Other", value: 8 },
                            ]}
                        />
                    </div>
                </section>

                {/* Team Efficiency */}
                <section className="p-6 rounded-lg bg-white text-midnight-blue shadow-xs border border-light-grey-300">
                    <h3 className="mb-6 text-base font-semibold tracking-[-0.015em]">Team Efficiency (Avg Completion Time)</h3>
                    <div className="relative h-60 w-full overflow-y-auto scrollbar-hidden">
                        <EfficiencyChart
                            data={[
                                { label: "Crew A", value: 130 },
                                { label: "Crew B", value: 114 },
                                { label: "Crew C", value: 100 },
                                { label: "Crew D", value: 86 },
                                { label: "Crew E", value: 74 },
                            ]}
                            valueType="minutes"
                            valueSuffix="avg time"
                        />
                    </div>
                </section>

                {/* Top Performing Zones */}
                <section className="p-6 xl:mt-2 rounded-lg bg-white text-midnight-blue shadow-xs border border-light-grey-300">
                    <h3 className="mb-6 text-base font-semibold tracking-[-0.015em]">Top Performing Zones (by waste collected)</h3>
                    <div className="relative w-full overflow-y-auto scrollbar-hidden">
                        <RankingTable
                            rows={[
                                { rank: 1, name: "Zone 1", value: "4.2k ", suffix: "tons" },
                                { rank: 2, name: "Zone 2", value: "3.8k ", suffix: "tons" },
                                { rank: 3, name: "Zone 3", value: "3.1k ", suffix: "tons" },
                                { rank: 4, name: "Zone 4", value: "2.9k ", suffix: "tons" },
                                { rank: 5, name: "Zone 5", value: "2.5k ", suffix: "tons" },
                            ]}
                        />
                    </div>
                </section>

                {/* Most Efficient Teams */}
                <section className="p-6 xl:mt-2 rounded-lg bg-white text-midnight-blue shadow-xs border border-light-grey-300">
                    <h3 className="mb-6 text-base font-semibold tracking-[-0.015em]">Most Efficient Teams (by completion time)</h3>
                    <div className="relative w-full overflow-y-auto scrollbar-hidden">
                        <RankingTable
                            rows={[
                                { rank: 1, name: "Crew A", value: "2h 10m ", suffix: "avg time" },
                                { rank: 2, name: "Crew B", value: "2h 15m ", suffix: "avg time" },
                                { rank: 3, name: "Crew C", value: "2h 20m ", suffix: "avg time" },
                                { rank: 4, name: "Crew D", value: "2h 25m ", suffix: "avg time" },
                                { rank: 5, name: "Crew E", value: "2h 30m ", suffix: "avg time" },
                            ]}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}