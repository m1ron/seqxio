"use client";

import React, { useState } from "react";

import PageHeader from "@/app/components/common/PageHeader";
import Icons from "@/app/components/common/Icons";

import Button from "@/app/components/ui/Button";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";

import DateModal from "@/app/components/calendar/DateModal";
import AddNoteModal from "@/app/components/calendar/AddNoteModal";

type CalendarProps = {
    heading: string;
    subheading?: string;
};

type CalendarDay = {
    day: string;
    month: "prev" | "current" | "next";
    weekday: number;
};

const WEEKDAY_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const WEEKDAY_FULL = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
] as const;

const CALENDAR_DAYS: CalendarDay[] = [
    { day: "23", month: "prev", weekday: 0 },
    { day: "24", month: "prev", weekday: 1 },
    { day: "25", month: "prev", weekday: 2 },
    { day: "26", month: "prev", weekday: 3 },
    { day: "27", month: "prev", weekday: 4 },
    { day: "28", month: "prev", weekday: 5 },
    { day: "1", month: "current", weekday: 6 },
    { day: "2", month: "current", weekday: 0 },
    { day: "3", month: "current", weekday: 1 },
    { day: "4", month: "current", weekday: 2 },
    { day: "5", month: "current", weekday: 3 },
    { day: "6", month: "current", weekday: 4 },
    { day: "7", month: "current", weekday: 5 },
    { day: "8", month: "current", weekday: 6 },
    { day: "9", month: "current", weekday: 0 },
    { day: "10", month: "current", weekday: 1 },
    { day: "11", month: "current", weekday: 2 },
    { day: "12", month: "current", weekday: 3 },
    { day: "13", month: "current", weekday: 4 },
    { day: "14", month: "current", weekday: 5 },
    { day: "15", month: "current", weekday: 6 },
    { day: "16", month: "current", weekday: 0 },
    { day: "17", month: "current", weekday: 1 },
    { day: "18", month: "current", weekday: 2 },
    { day: "19", month: "current", weekday: 3 },
    { day: "20", month: "current", weekday: 4 },
    { day: "21", month: "current", weekday: 5 },
    { day: "22", month: "current", weekday: 6 },
    { day: "23", month: "current", weekday: 0 },
    { day: "24", month: "current", weekday: 1 },
    { day: "25", month: "current", weekday: 2 },
    { day: "26", month: "current", weekday: 3 },
    { day: "27", month: "current", weekday: 4 },
    { day: "28", month: "current", weekday: 5 },
    { day: "29", month: "current", weekday: 6 },
    { day: "30", month: "next", weekday: 0 },
    { day: "31", month: "next", weekday: 1 },
    { day: "1", month: "next", weekday: 2 },
    { day: "2", month: "next", weekday: 3 },
    { day: "3", month: "next", weekday: 4 },
    { day: "4", month: "next", weekday: 5 },
    { day: "5", month: "next", weekday: 6 },
];

export default function Calendar({ heading, subheading }: CalendarProps) {
    const [dateModalOpen, setDateModalOpen] = useState(false);
    const [addNoteOpen, setAddNoteOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Thursday, January 29");

    const openModalForDay = (item: CalendarDay) => {
        setSelectedDate(`${WEEKDAY_FULL[item.weekday]}, January ${item.day}`);
        setDateModalOpen(true);
    };

    return (
        <div className="w-full flex-1">
            <PageHeader
                className="md:mb-9.25 gap-4 lg:gap-6 max-sm:[&>div]:flex-col max-sm:[&>div]:w-full max-sm:[&>div]:gap-4"
                heading={heading}
                subheading={subheading}
            >
                <div className="max-md:mr-2 xl:mr-2 flex gap-2 self-start">
                    <Button onClick={() => setAddNoteOpen(true)}>+ Add note</Button>
                    <Button variant="outline">Today</Button>
                </div>

                <Tabs
                    className="p-0 bg-transparent self-start [&>.shadow-sm]:shadow-none [&>.bg-white]:bg-cool-mist"
                    tabs={[
                        { label: "Month", value: "month" },
                        { label: "Week", value: "week" },
                        { label: "Day", value: "day" },
                    ]}
                />
            </PageHeader>

            <div className="mb-8 flex max-xxl:flex-col gap-4 xxl:gap-8.5 xxl:items-end">
                <div className="flex max-sm:flex-col sm:justify-between gap-4 xxl:gap-8.5">
                    <h2 className="text-black text-xl md:text-2xl leading-10 font-bold tracking-mid">
                        February 2026
                    </h2>

                    <div className="flex gap-2 max-sm:justify-between">
                        <Button variant="outline" className="flex gap-2 items-center tracking-minimal">
                            <Icons icon="arrowPrev"/>
                            Previous
                        </Button>

                        <Button variant="outline" className="flex gap-2 items-center tracking-minimal">
                            Next
                            <Icons icon="arrowNext"/>
                        </Button>
                    </div>
                </div>

                <div className="xxl:ml-auto flex max-sm:flex-col gap-3 xxl:gap-4">
                    <Select
                        className="min-w-40 xl:min-w-45 max-xxl:flex-1 md:space-y-px"
                        label="Zone"
                        defaultValue="all-zones"
                        options={[
                            { label: "All zones", value: "all-zones" },
                            { label: "Zone A", value: "zone-a" },
                            { label: "Zone B", value: "zone-b" },
                            { label: "Zone C", value: "zone-c" },
                        ]}
                    />
                    <Select
                        className="min-w-40 xl:min-w-45 max-xxl:flex-1 md:space-y-px"
                        label="Team"
                        defaultValue="all-teams"
                        options={[
                            { label: "All teams", value: "all-teams" },
                            { label: "Crew A", value: "crew-a" },
                            { label: "Crew B", value: "crew-b" },
                            { label: "Crew C", value: "crew-c" },
                        ]}
                    />
                    <Select
                        className="min-w-40 xl:min-w-45 max-xxl:flex-1 md:space-y-px"
                        label="Status"
                        defaultValue="all"
                        options={[
                            { label: "All", value: "all" },
                            { label: "On Track", value: "on-track" },
                            { label: "At Risk", value: "at-risk" },
                            { label: "Completed", value: "completed" },
                            { label: "Critical", value: "critical" },
                            { label: "In Progress", value: "in-progress" },
                        ]}
                    />
                </div>
            </div>

            <div className="w-full bg-white rounded-md">
                <div className="w-full py-2 xl:mb-2 flex text-[11px] md:text-xs leading-normal font-bold uppercase text-greenish tracking-minimal text-center cursor-default [&>div]:w-1/7 [&>div]:p-1.5">
                    {WEEKDAY_SHORT.map((day) => (
                        <div key={day}>{day}</div>
                    ))}
                </div>

                <div className="flex flex-wrap text-midnight-blue text-xs md:text-[13.3px] leading-4.5 border-r border-r-light-grey-200 border-b border-b-light-grey-200 rounded-bl-md rounded-br-md [&>button]:w-1/7 [&>button]:aspect-square sm:[&>button]:aspect-173/120 [&>button]:p-1.5 md:[&>button]:p-2 [&>button]:flex [&>button]:text-left [&>button]:cursor-pointer [&>button]:outline-none [&>button]:hover:bg-light-grey-200/25 [&>button]:focus:bg-light-grey-200/25 [&>button]:border-t [&>button]:border-l [&>button]:border-t-light-grey-200 [&>button]:border-l-light-grey-200">
                    {CALENDAR_DAYS.map((item, index) => (
                        <button
                            key={`${item.day}-${index}`}
                            type="button"
                            onClick={() => openModalForDay(item)}
                            className={item.month !== "current" ? "text-light-grey-600" : ""}
                        >
                            {item.day}
                        </button>
                    ))}
                </div>
            </div>

            <DateModal
                modalClass="md:max-w-128"
                open={dateModalOpen}
                selectedDate={selectedDate}
                onCloseAction={() => setDateModalOpen(false)}
                onSaveAction={() => {
                    setDateModalOpen(false);
                    setAddNoteOpen(true);
                }}
            />

            <AddNoteModal
                open={addNoteOpen}
                onCloseAction={() => setAddNoteOpen(false)}
                onSaveAction={() => setAddNoteOpen(false)}
            />
        </div>
    );
}