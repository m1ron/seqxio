"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import PageHeader from "@/app/components/common/PageHeader";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";

import { pinsData, type PinItem, type PinPriority } from "@/app/components/map/map.data";

const LeafletMap = dynamic(() => import("@/app/components/map/LeafletMap"), {
    ssr: false,
});

function PinsList({ pins }: { pins: PinItem[] }) {
    const priorityStyles: Record<PinPriority, string> = {
        High: "bg-red-200 text-red-800",
        Medium: "bg-yellow-200 text-yellow-800",
        Low: "bg-gray-200 text-gray-800",
    };

    const getDateTime = (date: string) => {
        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    return (
        <div className="flex-1 flex flex-col">
            <div className="flex-1 xl:overflow-y-auto xl:max-h-[calc(100vh-515px)] xl:overflow-hidden">
                {pins.map((pin) => (
                    <div
                        key={`${pin.title}-${pin.date}`}
                        className="p-4 border-b border-b-light-grey-300 hover:bg-gray-50 cursor-pointer"
                    >
                        <div className="flex justify-between">
                            <strong className="block font-semibold tracking-minimal">{pin.title}</strong>
                            <span className={`px-2 py-1 block self-start text-xs rounded-full ${priorityStyles[pin.priority]}`}>
                            {pin.priority}
                        </span>
                        </div>
                        <p className="text-sm text-gray-500">{pin.type}</p>
                        <time className="mt-1 block text-xs text-grey" dateTime={getDateTime(pin.date)}>
                            {pin.date}
                        </time>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Map() {
    const [searchValue, setSearchValue] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [selectedPriority, setSelectedPriority] = useState("all");

    const filteredPins = useMemo(() => {
        const normalizedSearch = searchValue.trim().toLowerCase();

        return pinsData.filter((pin) => {
            const matchesSearch =
                normalizedSearch === "" ||
                pin.title.toLowerCase().includes(normalizedSearch) ||
                pin.type.toLowerCase().includes(normalizedSearch);

            const matchesStatus =
                selectedStatus === "all" ||
                pin.status.toLowerCase().replace(/\s+/g, "-") === selectedStatus;

            const matchesType =
                selectedType === "all" ||
                pin.type.toLowerCase().replace(/\s+/g, "-") === selectedType;

            const matchesPriority =
                selectedPriority === "all" ||
                pin.priority.toLowerCase() === selectedPriority;

            return matchesSearch && matchesStatus && matchesType && matchesPriority;
        });
    }, [searchValue, selectedStatus, selectedType, selectedPriority]);

    return (
        <>
            <PageHeader
                className="md:[&>div]:gap-2"
                heading="Map"
                subheading="View all projects and roads on the interactive map"
            >
                <Button variant="outline">Draw Area</Button>
                <Button className="xl:px-5 xl:mt-px">+ Add Pin</Button>
            </PageHeader>

            <div className="flex-1 flex flex-col-reverse xl:flex-row gap-6 xl:gap-8.5">
                <aside className="w-full xl:w-104.25 bg-white border-b border-b-light-grey-300 xl:border-b-0 xl:border-r xl:border-r-light-grey-300 flex flex-col">
                    <header className="p-4 border-b border-b-light-grey-300">
                        <h2 className="text-2xl font-bold tracking-mid">Pins</h2>
                    </header>

                    <div className="p-4 space-y-4">
                        <input
                            className="input w-full"
                            id="full-name"
                            type="text"
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            placeholder="Search pins..."
                        />

                        <div className="grid grid-cols-3 gap-2">
                            <Select
                                className="flex-1 space-y-1"
                                label="Status"
                                value={selectedStatus}
                                onChangeAction={setSelectedStatus}
                                options={[
                                    { label: "All Statuses", value: "all" },
                                    { label: "Open", value: "open" },
                                    { label: "In Progress", value: "in-progress" },
                                    { label: "Resolved", value: "resolved" },
                                ]}
                            />
                            <Select
                                className="flex-1 space-y-1"
                                label="Type"
                                value={selectedType}
                                onChangeAction={setSelectedType}
                                options={[
                                    { label: "All Types", value: "all" },
                                    { label: "Overflow", value: "overflow" },
                                    { label: "Missed Pickup", value: "missed-pickup" },
                                    { label: "Illegal Dumping", value: "illegal-dumping" },
                                    { label: "Blocked Access", value: "blocked-access" },
                                    { label: "Equipment Issue", value: "equipment-issue" },
                                ]}
                            />
                            <Select
                                className="flex-1 space-y-1"
                                label="Priority"
                                value={selectedPriority}
                                onChangeAction={setSelectedPriority}
                                options={[
                                    { label: "All Priorities", value: "all" },
                                    { label: "Low", value: "low" },
                                    { label: "Medium", value: "medium" },
                                    { label: "High", value: "high" },
                                ]}
                            />
                        </div>
                    </div>

                    <PinsList pins={filteredPins}/>
                </aside>

                <div className="w-full relative h-105 md:h-140 xl:h-auto xl:flex-1 overflow-hidden rounded-lg border border-gray-300">
                    <LeafletMap pins={filteredPins}/>
                </div>
            </div>
        </>
    );
}