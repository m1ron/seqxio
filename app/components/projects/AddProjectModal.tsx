"use client";

import React, { useRef, useState } from "react";

import Button from "@/app/components/ui/Button";
import CheckBox from "@/app/components/ui/CheckBox";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";
import Icons from "@/app/components/common/Icons";
import Modal from "@/app/components/common/Modal";

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: () => void;
}

type Step = 1 | 2 | 3;

type StepsItem = {
    label: string;
};

type StepsProps = {
    items: StepsItem[];
    currentStep: Step;
    className?: string;
};

function Steps({ items, currentStep, className }: StepsProps) {
    return (
        <div className={`flex items-center justify-center gap-3 overflow-x-auto scrollbar-hidden ${className ?? ""}`}>
            {items.map((item, index) => {
                const stepNumber = (index + 1) as Step;
                const isCompleted = stepNumber < currentStep;
                const isCurrent = stepNumber === currentStep;

                return (
                    <React.Fragment key={item.label}>
                        <div
                            className={`relative left-0.5 flex items-center gap-2 whitespace-nowrap cursor-default ${
                                stepNumber <= currentStep ? "text-midnight-blue" : "text-light-grey-600"
                            }`}
                        >
                            <span
                                className={`size-6 rounded-full flex items-center justify-center text-xs font-bold select-none ${
                                    isCompleted
                                        ? "bg-cool-mist text-midnight-blue"
                                        : isCurrent
                                            ? "bg-deep-slate text-white"
                                            : "bg-cool-mist text-greenish"
                                }`}
                            >
                                {isCompleted ? <Icons icon="check"/> : String(stepNumber).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-medium text-greenish">{item.label}</span>
                        </div>

                        {index < items.length - 1 ? <div className="w-19 max-md:w-1 h-px bg-light-grey-300"/> : null}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default function AddProjectModal({
                                            isOpen,
                                            onClose,
                                            onAdd,
                                        }: AddProjectModalProps) {
    const [step, setStep] = useState<Step>(1);
    const startDateRef = useRef<HTMLInputElement>(null);
    const startTimeRef = useRef<HTMLInputElement>(null);

    const goNext = () => setStep((current) => Math.min(current + 1, 3) as Step);
    const goBack = () => setStep((current) => Math.max(current - 1, 1) as Step);

    const handleCreateProject = () => {
        onClose();
    };

    const openDatePicker = () => {
        const input = startDateRef.current;
        if (!input) return;

        if (typeof input.showPicker === "function") {
            input.showPicker();
            return;
        }

        input.focus();
        input.click();
    };

    const openTimePicker = () => {
        const input = startTimeRef.current;
        if (!input) return;

        if (typeof input.showPicker === "function") {
            input.showPicker();
            return;
        }

        input.focus();
        input.click();
    };

    return (
        <Modal open={isOpen} onClose={onClose} modalClass="max-w-150">
            <div className="flex h-full flex-col bg-white">
                <div className="space-y-4 px-4 pt-6 md:px-6 pb-4 border-b border-light-grey-300">
                    <header className="space-y-2">
                        <h2 className="text-[18px] leading-7 font-semibold text-midnight-blue tracking-half">
                            Add Project
                        </h2>
                        <p className="text-sm text-greenish">
                            Create a new collection project and assign it to today&apos;s operations.
                        </p>
                    </header>

                    <Steps
                        currentStep={step}
                        items={[
                            { label: "Details" },
                            { label: "Location" },
                            { label: "Assignment" },
                        ]}
                    />
                </div>

                <div className="p-4 md:px-6 flex-1 overflow-y-auto scrollbar-hidden">
                    {step === 1 && (
                        <section className="mt-6 space-y-6">
                            <h3 className="mb-6.5 text-lg font-semibold text-midnight-blue tracking-half">
                                Project Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2.5">
                                    <label className="block text-sm font-medium text-midnight-blue tracking-min" htmlFor="project-name">
                                        Project Name*
                                    </label>
                                    <input
                                        id="project-name"
                                        type="text"
                                        className="input w-full"
                                        placeholder="e.g., Uptown Alley Cleanup"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Select
                                        className="space-y-2.5 [&>span]:font-medium [&>span]:text-midnight-blue [&>span]:tracking-min"
                                        label="Project Type*"
                                        placeholder="Select a type"
                                        options={[
                                            { label: "Cleanup", value: "cleanup" },
                                            { label: "Inspection", value: "inspection" },
                                            { label: "Maintenance", value: "maintenance" },
                                        ]}
                                    />
                                </div>
                            </div>

                            <section className="mb-4.75 flex items-center gap-1.5">
                                <p className="block text-sm font-medium text-midnight-blue tracking-min">
                                    Status*
                                </p>
                                <Tabs
                                    className="gap-0 [&>li>button]:py-1.5"
                                    tabs={[
                                        { label: "On Track", value: "on-track" },
                                        { label: "On Hold", value: "on-hold" },
                                        { label: "At Risk", value: "at-risk" },
                                    ]}
                                />
                            </section>

                            <div className="mb-4.5 space-y-2">
                                <Select
                                    className="space-y-2.5 [&>span]:font-medium [&>span]:text-midnight-blue [&>span]:tracking-min"
                                    label="Zone / Area*"
                                    placeholder="Select a zone"
                                    options={[
                                        { label: "North Zone", value: "north-zone" },
                                        { label: "South Zone", value: "south-zone" },
                                        { label: "Central Zone", value: "central-zone" },
                                    ]}
                                />
                                <p className="text-sm text-greenish">
                                    Used for reporting and map filtering.
                                </p>
                            </div>

                            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-midnight-blue tracking-min" htmlFor="start-date">
                                        Start Date*
                                    </label>
                                    <div className="relative">
                                        <input
                                            ref={startDateRef}
                                            id="start-date"
                                            type="date"
                                            className="input-date w-full pr-10"
                                            defaultValue="2026-02-19"
                                        />
                                        <button
                                            type="button"
                                            aria-label="Open date picker"
                                            onClick={openDatePicker}
                                            className="p-1 absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer"
                                        >
                                            <Icons icon="date"/>
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-midnight-blue tracking-min" htmlFor="start-time">
                                        Start Time*
                                    </label>
                                    <div className="relative">
                                        <input
                                            ref={startTimeRef}
                                            id="start-time"
                                            type="time"
                                            className="input-time w-full pr-10"
                                            defaultValue="13:00"
                                        />
                                        <button
                                            type="button"
                                            aria-label="Open time picker"
                                            onClick={openTimePicker}
                                            className="p-1 absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer"
                                        >
                                            <Icons icon="time"/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Select
                                    className="space-y-2.5 [&>span]:font-medium [&>span]:text-midnight-blue [&>span]:tracking-min"
                                    label="Expected Duration"
                                    placeholder="Select duration"
                                    options={[
                                        { label: "15 min", value: "15" },
                                        { label: "30 min", value: "30" },
                                        { label: "1 hour", value: "60" },
                                        { label: "2 hours", value: "120" },
                                    ]}
                                />
                                <p className="text-sm text-greenish">
                                    Used to flag delays if work runs long.
                                </p>
                            </div>
                        </section>
                    )}

                    {step === 2 && (
                        <section className="mt-6 space-y-6">
                            <h3 className="mb-4 text-lg font-semibold text-midnight-blue tracking-half">
                                Project Location
                            </h3>

                            <Tabs
                                className="w-full mb-4.75 gap-0 [&>li]:flex-1 [&>li>button]:w-full [&>li>button]:rounded-md [&>li>button]:px-4 [&>li>button]:py-1.5"
                                tabs={[
                                    { label: "Address", value: "address" },
                                    { label: "Select on Map", value: "map" },
                                ]}
                            />

                            <div className="mb-5 space-y-2.25">
                                <label className="block text-sm font-semibold text-midnight-blue" htmlFor="address">
                                    Address / Location*
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    className="mb-4 input w-full"
                                    placeholder="Start typing an address..."
                                />
                                <p className="text-sm text-greenish">
                                    This will be used to place the project on the map.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-midnight-blue" htmlFor="site-notes">
                                    Site Notes (optional)
                                </label>
                                <textarea
                                    id="site-notes"
                                    className="input w-full min-h-25 resize-none"
                                    placeholder="Gate code, access notes, landmarks..."
                                />
                            </div>
                        </section>
                    )}

                    {step === 3 && (
                        <section className="mt-6 space-y-6">
                            <h3 className="mb-6.75 text-lg font-semibold text-midnight-blue tracking-half">
                                Assignment &amp; Tracking
                            </h3>

                            <div className="mb-6.5 space-y-1.25">
                                <label className="block text-sm font-semibold text-midnight-blue" htmlFor="roads">
                                    Assign Road(s) <span className="text-greenish font-normal">(optional)</span>
                                </label>
                                <div className="mb-2 select">
                                    <input type="text" className="w-full input block" placeholder="Search roads..."/>
                                </div>
                                <p className="text-sm text-greenish">
                                    Roads help group projects for crews and reporting.
                                </p>
                            </div>

                            <div className="mb-8 space-y-2">
                                <Select
                                    className="space-y-1.5 [&>span]:font-medium [&>span]:text-midnight-blue [&>span]:tracking-min"
                                    label="Assign Team*"
                                    placeholder="Select a team"
                                    options={[
                                        { label: "Team Alpha", value: "alpha" },
                                        { label: "Team Bravo", value: "bravo" },
                                        { label: "Team Charlie", value: "charlie" },
                                    ]}
                                />
                                <p className="text-sm text-greenish">
                                    Leave blank to create an unassigned project.
                                </p>
                            </div>

                            <section className="mb-5 flex items-center gap-2">
                                <h3 className="text-sm font-medium text-midnight-blue tracking-min">
                                    Priority*
                                </h3>
                                <Tabs
                                    className="gap-0 [&>li>button]:py-1.5"
                                    tabs={[
                                        { label: "Normal", value: "normal" },
                                        { label: "High", value: "high" },
                                        { label: "Critical", value: "critical" },
                                    ]}
                                />
                            </section>

                            <section className="space-y-1.5">
                                <h4 className="text-sm font-semibold text-midnight-blue">
                                    Tracking Options
                                </h4>
                                <div className="space-y-2">
                                    <CheckBox
                                        id="photo-evidence"
                                        name="tracking-options"
                                        label="Require photo evidence before completion"
                                        defaultChecked
                                    />
                                    <CheckBox
                                        id="notes-flags"
                                        name="tracking-options"
                                        label="Allow crew to add notes and issue flags"
                                        defaultChecked
                                    />
                                </div>
                            </section>
                        </section>
                    )}
                </div>

                <div className="border-t border-light-grey-300 px-4 md:px-6 py-4">
                    <div className="flex justify-between gap-2">
                        <Button variant="outline" onClick={step === 1 ? onClose : goBack}>
                            {step === 1 ? "Cancel" : "Back"}
                        </Button>

                        {step < 3 ? (
                            <Button
                                onClick={goNext}
                                className="px-5.5"
                            >
                                Next: {step === 1 ? "Location" : "Assignment"}
                            </Button>
                        ) : (
                            <Button
                                onClick={handleCreateProject}
                                className="px-5.5"
                            >
                                Create Project
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
}