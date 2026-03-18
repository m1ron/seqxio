"use client";

import React, { useState } from "react";

import Button from "@/app/components/ui/Button";
import Checkbox from "@/app/components/ui/Checkbox";
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
            <div className="h-full flex flex-col bg-white">
                <div className="px-4 md:px-6 py-5 border-b border-light-grey-300">
                    <h2 className="text-lg xl:text-xl font-semibold text-midnight-blue tracking-minimal">
                        Add Calendar Note
                    </h2>
                    <p className="mt-1 text-sm text-slate-blue">
                        Add an operational note for this date.
                    </p>
                </div>

                <div className="space-y-6 p-4 md:px-6 flex-1 overflow-y-auto scrollbar-hidden">
                    <section className="space-y-2">
                        <h3 className="text-base font-semibold text-midnight-blue">{displayDate}</h3>
                        <a href="#" className="text-sm font-medium text-dark-green hover:underline cursor-pointer">Change date</a>
                    </section>

                    <section className="space-y-3">
                        <label className="block text-sm font-semibold text-midnight-blue" htmlFor="note-title">
                            Title*
                        </label>
                        <input
                            id="note-title"
                            type="text"
                            className="input w-full"
                            placeholder="e.g., Holiday schedule adjustment"
                        />
                        <p className="text-sm text-slate-blue">
                            Short summary shown on the calendar.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <label className="block text-sm font-semibold text-midnight-blue">
                            Type*
                        </label>
                        <div className="max-md:-mx-4 max-md:px-4 max-md:overflow-x-auto scrollbar-hidden">
                            <Tabs
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
                    </section>

                    <section className="space-y-3">
                        <label className="block text-sm font-semibold text-midnight-blue" htmlFor="note-details">
                            Details
                        </label>
                        <textarea
                            id="note-details"
                            className="input w-full min-h-32 resize-none"
                            placeholder="Add details for the team..."
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            maxLength={500}
                        />
                        <div className="text-right text-sm text-slate-blue">
                            {details.length} / 500
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-sm font-semibold text-midnight-blue">
                            Link this note to
                        </h3>

                        <div className="space-y-3">
                            <Checkbox id="note-project" label="Project"/>
                            <Checkbox id="note-road" label="Road"/>
                            <Checkbox id="note-zone" label="Zone"/>
                        </div>

                        <p className="text-sm text-slate-blue">
                            Linked notes appear in related views for context.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-sm font-semibold text-midnight-blue">Visibility</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm text-midnight-blue">
                                <input type="radio" name="visibility" defaultChecked/>
                                All team members
                            </label>
                            <label className="flex items-center gap-2 text-sm text-midnight-blue">
                                <input type="radio" name="visibility"/>
                                Dispatchers & admins only
                            </label>
                        </div>
                        <p className="text-sm text-slate-blue">
                            Controls who can see this note on the calendar.
                        </p>
                    </section>

                    <section className="flex items-center gap-3">
                        <h3 className="text-sm font-semibold text-midnight-blue">Priority</h3>
                        <Tabs
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