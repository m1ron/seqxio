"use client";

import React from "react";

import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/common/Modal";

type DateModalProps = {
    open: boolean;
    onCloseAction: () => void;
    selectedDate: string;
    onSaveAction: () => void;
    modalClass?: string;
};

export default function DateModal({
    open,
    onCloseAction,
    selectedDate,
    onSaveAction,
    modalClass,
}: DateModalProps) {
    return (
        <Modal open={open} onClose={onCloseAction} modalClass={modalClass}>
            <div className="h-full flex flex-col">
                <div className="px-4 md:px-6 py-5 border-b border-light-grey-300">
                    <h2 className="text-lg xl:text-xl font-semibold text-midnight-blue tracking-minimal">
                        {selectedDate}
                    </h2>
                </div>

                <div className="space-y-4 p-4 md:px-6 flex-1 bg-lighter overflow-y-auto scrollbar-hidden">
                    <section className="px-3.5 py-4 md:py-5 border border-light-grey-300 bg-white rounded-md">
                        <header className="mb-3.75 flex items-center justify-between gap-3">
                            <h3 className="mt-1 text-xl xl:text-2xl font-semibold md:tracking-half text-midnight-blue">
                                Scheduled Projects
                            </h3>
                            <Button className="tracking-minimal" onClick={onSaveAction}>
                                Add Note
                            </Button>
                        </header>
                        <div className="pt-7 pb-5.5">
                            <p className="text-sm xl:text-base text-center text-greenish tracking-min">
                                No projects scheduled for this day.
                            </p>
                        </div>
                    </section>

                    <section className="px-3.5 py-4 md:py-5 border border-light-grey-300 bg-white rounded-md">
                        <h3 className="xl:px-2.5 xl:py-0.5 mb-4 text-xl xl:text-2xl font-semibold md:tracking-half text-midnight-blue">
                            Notes
                        </h3>
                        <div className="pt-3.25 pb-5.75">
                            <p className="text-sm xl:text-base text-center text-greenish tracking-min">
                                No notes for this day.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </Modal>
    );
}