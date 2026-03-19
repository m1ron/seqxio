"use client";

import React, { useEffect, useRef, useState } from "react";

import Modal from "@/app/components/common/Modal";
import Button from "@/app/components/ui/Button";
import RadioBox from "@/app/components/ui/RadioBox";
import CheckBox from "@/app/components/ui/CheckBox";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";

type UploadPhotosModalProps = {
    open: boolean;
    onClose: () => void;
    onSubmit?: () => void;
};

type Step = 1 | 2;

const PHOTO_TYPES = [
    { label: "Before", value: "before" },
    { label: "During", value: "during" },
    { label: "After", value: "after" },
    { label: "Issue", value: "issue" },
];

export default function UploadPhotosModal({
                                              open,
                                              onClose,
                                              onSubmit,
                                          }: UploadPhotosModalProps) {
    const [step, setStep] = useState<Step>(1);
    const [context, setContext] = useState<"project" | "road">("project");
    const [flagAsIssue, setFlagAsIssue] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            setStep(1);
            setContext("project");
            setFlagAsIssue(true);
        }
    }, [open]);

    const handleNext = () => {
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = () => {
        onSubmit?.();
        onClose();
    };

    const handleBrowseFiles = () => {
        fileInputRef.current?.click();
    };

    return (
        <Modal open={open} onClose={onClose} modalClass="md:max-w-170">
            <div className="flex h-full flex-col bg-white">
                <div className="px-4 md:px-6 pt-6 pb-4 border-b border-light-grey-300">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-[18px] leading-7 font-semibold text-midnight-blue tracking-half">
                                Upload Photos
                            </h2>
                            <p className="mt-1 text-sm text-greenish">
                                Attach proof of work to a project or road.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-hidden px-4 md:px-6 py-6">
                    {step === 1 ? (
                        <div className="space-y-6">
                            <section className="space-y-3">
                                <h3 className="text-sm font-semibold text-midnight-blue">
                                    Choose Context*
                                </h3>

                                <div className="flex flex-col gap-2">
                                    <RadioBox
                                        id="upload-context-project"
                                        name="upload-context"
                                        label="Project"
                                        checked={context === "project"}
                                        onChangeAction={() => setContext("project")}
                                    />
                                    <RadioBox
                                        id="upload-context-road"
                                        name="upload-context"
                                        label="Road"
                                        checked={context === "road"}
                                        onChangeAction={() => setContext("road")}
                                    />
                                </div>
                            </section>

                            <section className="space-y-3">
                                <Select
                                    label={context === "project" ? "Project*" : "Road*"}
                                    placeholder={context === "project" ? "Select project" : "Select road"}
                                    options={[
                                        { label: "Option 1", value: "option-1" },
                                        { label: "Option 2", value: "option-2" },
                                        { label: "Option 3", value: "option-3" },
                                    ]}
                                />
                                <p className="text-sm text-greenish">
                                    Photos will appear in the project record and Recent Photos.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h3 className="text-sm font-semibold text-midnight-blue">
                                    Photo Type*
                                </h3>

                                <Tabs
                                    className="bg-cool-grey p-1 rounded-md [&>li>button]:rounded-sm [&>li>button]:px-4 [&>li>button]:py-1.5"
                                    tabs={[
                                        { label: "Before", value: "before" },
                                        { label: "During", value: "during" },
                                        { label: "After", value: "after" },
                                        { label: "Issue", value: "issue" },
                                    ]}
                                />
                            </section>

                            <section className="space-y-3">
                                <label className="block text-sm font-semibold text-midnight-blue" htmlFor="upload-notes">
                                    Notes (optional)
                                </label>
                                <textarea
                                    id="upload-notes"
                                    className="input w-full min-h-28 resize-none"
                                    placeholder="Add a short note (optional)..."
                                />
                            </section>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                            />

                            <button
                                type="button"
                                onClick={handleBrowseFiles}
                                className="w-full rounded-md border-2 border-dashed border-light-grey-300 bg-white px-4 py-8 md:px-6 md:py-10 cursor-pointer outline-none focus:border-greenish hover:border-greenish transition-colors"
                            >
                                <div className="flex min-h-44 flex-col items-center justify-center text-center">
                                    <p className="text-base md:text-lg font-medium text-greenish">
                                        Drag and drop photos here
                                    </p>
                                    <p className="mt-3 text-sm text-greenish">or</p>
                                    <span className="mt-3 inline-flex px-5 py-2.5 rounded-full border border-dark-green text-dark-green bg-white">
                                        Browse files
                                    </span>
                                    <p className="mt-4 text-sm text-greenish">
                                        PNG, JPG up to 10MB each. Up to 12 photos at a time.
                                    </p>
                                </div>
                            </button>

                            <section className="space-y-2">
                                <CheckBox
                                    id="flag-as-issue"
                                    name="flag-as-issue"
                                    label="Flag as issue"
                                    checked={flagAsIssue}
                                    onChangeAction={setFlagAsIssue}
                                />
                                <p className="text-sm text-greenish">
                                    Adds a warning indicator to the road/project for review.
                                </p>
                            </section>
                        </div>
                    )}
                </div>

                <div className="border-t border-light-grey-300 px-4 md:px-6 py-4">
                    <div className="flex justify-between gap-2">
                        <Button variant="outline" onClick={step === 1 ? onClose : handleBack}>
                            {step === 1 ? "Cancel" : "Back"}
                        </Button>

                        {step === 1 ? (
                            <Button onClick={handleNext} className="px-5.5">
                                Next: Upload
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} className="px-5.5">
                                Upload &amp; Attach
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
}