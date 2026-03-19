"use client";

import React from "react";

import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/common/Modal";
import Icons from "@/app/components/common/Icons";
import Dots from "@/app/components/ui/Dots";

type ProjectDetailsModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function ProjectDetailsModal({ open, onClose }: ProjectDetailsModalProps) {
    return (
        <Modal open={open} onClose={onClose} modalClass="md:max-w-118">
            <div className="flex h-full flex-col bg-white">
                <header className="px-4 md:px-6 pt-7 pb-4 border-b border-light-grey-300">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-2xl leading-9 font-semibold text-midnight-blue tracking-half">
                                Uptown Route Collection
                            </h2>
                            <p className="mt-px text-greenish tracking-minimal">
                                Route Collection &nbsp;·&nbsp; Zone A
                            </p>
                        </div>

                        <span className="mt-1 rounded-full bg-mint-green px-2.5 py-0.5 mr-px text-base font-semibold whitespace-nowrap text-deep-green cursor-default select-none">
                            On Track
                        </span>
                    </div>
                    <div className="mt-5.75 pb-0.75 flex items-center gap-4 max-md:flex-wrap">
                        <Button variant="outline">Reassign team</Button>
                        <Button variant="outline">Add pin</Button>
                        <Button>Mark complete</Button>
                        <Dots
                            className="ml-auto [&>button]:size-8 [&>button]:p-0 [&>button]:rounded-full [&>button>svg]:size-6"
                            items={[
                                { label: "Archive", value: "edit" },
                                { label: "Delete", value: "delete" },
                            ]}
                        />
                    </div>
                </header>

                <div className="p-4 md:px-6 flex-1 overflow-y-auto scrollbar-hidden">

                    <section className="mt-6 rounded-md border border-light-grey-300 bg-lighter p-6">
                        <h3 className="mb-4 text-2xl font-semibold text-midnight-blue tracking-half">
                            Project Snapshot
                        </h3>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium text-greenish">Assigned Team</p>
                                <p className="text-base text-midnight-blue">Crew A</p>
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium text-greenish">Start Time</p>
                                <p className="text-base text-midnight-blue">Nov 24 · 10:00 PM</p>
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium text-greenish">Priority</p>
                                <p className="text-base text-midnight-blue">Normal</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-6 rounded-md border border-light-grey-300 bg-lighter p-6">
                        <h3 className="mb-8 text-2xl font-semibold text-midnight-blue tracking-half">
                            Linked Pins
                        </h3>

                        <div className="flex flex-col items-center justify-center py-5">
                            <p className="text-base text-greenish text-center">
                                No pins are linked to this project yet.
                            </p>
                            <Button className="mt-3" variant="outline">
                                Add pin
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </Modal>
    );
}