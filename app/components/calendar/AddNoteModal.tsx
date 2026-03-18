"use client";

import React, { useState } from "react";

import Button from "@/app/components/ui/Button";
import CheckBox from "@/app/components/ui/CheckBox";
import RadioBox from "@/app/components/ui/RadioBox";
import Tabs from "@/app/components/ui/Tabs";
import Modal from "@/app/components/common/Modal";

type AddNoteModalProps = {
    open: boolean;
    onCloseAction: () => void;
    onSaveAction: () => void;
    modalClass?: string;
    selectedDate?: string;
};

function getTodayLabel() {
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date());
}

export default function AddNoteModal({ open, onCloseAction, onSaveAction, modalClass, selectedDate, }: AddNoteModalProps) {
    const [details, setDetails] = useState("");
    const displayDate = selectedDate || getTodayLabel();

    return (
        <Modal open={open} onClose={onCloseAction} modalClass={modalClass}>
            <div className="h-full flex flex-col">
                <header className="px-4 pt-6 md:px-6 pb-4 border-b border-light-grey-300">
                    <h2 className="mb-2 text-[18px] leading-7 font-semibold text-midnight-blue tracking-half">
                        Add Calendar Note
                    </h2>
                    <p className="text-sm text-greenish">
                        Add an operational note for this date.
                    </p>
                </header>

                <div className="space-y-4.5 p-4 md:px-6 flex-1 overflow-y-auto scrollbar-hidden">
                    <div>
                        <p className="text-base font-medium text-midnight-blue">
                            {displayDate}
                        </p>
                        <p><a href="#" className="text-sm font-medium text-dark-green hover:underline cursor-pointer">Change date</a></p>
                    </div>

                    <div className="space-y-2.25">
                        <label className="block text-sm font-medium text-midnight-blue" htmlFor="note-title">
                            Title*
                        </label>
                        <input
                            id="note-title"
                            type="text"
                            className="w-full input -tracking-min"
                            placeholder="e.g., Holiday schedule adjustment"
                        />
                        <p className="text-sm text-slate-blue -tracking-min">
                            Short summary shown on the calendar.
                        </p>
                    </div>

                    <div className="space-y-2.25">
                        <label className="block text-sm font-medium text-midnight-blue">
                            Type*
                        </label>
                        <div className="max-md:-mx-4 max-md:px-4 max-md:overflow-x-auto scrollbar-hidden">
                            <Tabs
                                className="gap-0 [&>li>button]:py-1.5"
                                tabs={[
                                    { label: "General", value: "general" },
                                    { label: "Disruption", value: "disruption" },
                                    { label: "Staffing", value: "staffing" },
                                    { label: "Equipment", value: "equipment" },
                                    { label: "Weather", value: "weather" },
                                    { label: "Reminder", value: "reminder" },
                                ]}
                            />
                        </div>
                    </div>

                    <section className="space-y-2.25 pt-px mb-6.5">
                        <label className="block text-sm font-medium text-midnight-blue" htmlFor="note-details">
                            Details
                        </label>
                        <textarea
                            id="note-details"
                            className="input w-full min-h-20 tracking-normal resize-none"
                            placeholder="Add details for the team..."
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            maxLength={500}
                        />
                        <div className="text-right text-sm text-greenish cursor-default select-none">
                            {details.length} / 500
                        </div>
                    </section>

                    <section className="mb-6.25 space-y-3.75">
                        <h3 className="text-sm font-medium text-midnight-blue tracking-min">
                            Link this note to
                        </h3>
                        <div className="space-y-3">
                            <CheckBox id="note-project" name="note-links" label="Project"/>
                            <CheckBox id="note-road" name="note-links" label="Road"/>
                            <CheckBox id="note-zone" name="note-links" label="Zone"/>
                        </div>
                        <p className="text-sm text-greenish -tracking-min">
                            Linked notes appear in related views for context.
                        </p>
                    </section>

                    <section className="mb-8 space-y-2">
                        <h3 className="text-sm font-medium text-midnight-blue tracking-min">
                            Visibility
                        </h3>
                        <div className="mb-1.5 space-y-1">
                            <RadioBox
                                id="visibility-all"
                                name="visibility"
                                label="All team members"
                                defaultChecked
                            />
                            <RadioBox
                                id="visibility-admins"
                                name="visibility"
                                label="Dispatchers & admins only"
                            />
                        </div>
                        <p className="text-sm text-greenish -tracking-min">
                            Controls who can see this note on the calendar.
                        </p>
                    </section>

                    <section className="mb-6 md:mb-10 xl:mb-12 flex items-center gap-2.25">
                        <h3 className="text-sm font-medium text-midnight-blue tracking-min">
                            Priority
                        </h3>
                        <Tabs
                            className="gap-0 [&>li>button]:py-1.5"
                            tabs={[
                                { label: "Normal", value: "normal" },
                                { label: "Important", value: "important" },
                            ]}
                        />
                    </section>
                </div>

                <div className="border-t border-light-grey-300 px-4 md:px-6 py-4">
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={onCloseAction}>
                            Cancel
                        </Button>
                        <Button onClick={onSaveAction}>
                            Save Note
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}