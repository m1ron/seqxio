"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/app/components/map/LeafletMap"), {
    ssr: false,
});

import Modal from "@/app/components/common/Modal";
import Button from "@/app/components/ui/Button";
import CheckBox from "@/app/components/ui/CheckBox";
import Select from "@/app/components/ui/Select";
import Tabs from "@/app/components/ui/Tabs";

type AddRoadModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ROAD_TYPE_OPTIONS = [
    { label: "Residential", value: "residential" },
    { label: "Collector", value: "collector" },
    { label: "Arterial", value: "arterial" },
    { label: "Highway", value: "highway" },
];

const ZONE_OPTIONS = [
    { label: "Zone A", value: "zone-a" },
    { label: "Zone B", value: "zone-b" },
    { label: "Zone C", value: "zone-c" },
];

export default function AddRoadModal({ isOpen, onClose }: AddRoadModalProps) {
    const [roadName, setRoadName] = useState("");
    const [zone, setZone] = useState("");
    const [roadType, setRoadType] = useState("residential");
    const [showCoverageArea, setShowCoverageArea] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setRoadName("");
            setZone("");
            setRoadType("residential");
            setShowCoverageArea(true);
        }
    }, [isOpen]);

    return (
        <Modal open={isOpen} onClose={onClose} modalClass="md:max-w-170">
            <div className="flex h-full flex-col bg-white">
                <header className="px-4 md:px-6 pt-6 pb-4 border-b border-light-grey-300">
                    <h2 className="mb-2 text-[18px] leading-7 font-semibold text-midnight-blue tracking-half">
                        Add Road
                    </h2>
                    <p className="mt-1 text-sm text-greenish">
                        Add a road to track collection status and activity.
                    </p>
                </header>

                <div className="flex-1 overflow-y-auto scrollbar-hidden px-4 md:px-6 py-6.5">
                    <div className="space-y-6">
                        <section className="space-y-2.25 mb-4.75">
                            <label className="block text-sm font-medium text-midnight-blue" htmlFor="road-name">
                                Road Name*
                            </label>
                            <input
                                id="road-name"
                                name="road-name"
                                type="text"
                                value={roadName}
                                onChange={(e) => setRoadName(e.target.value)}
                                placeholder="e.g., Independence Blvd"
                                className="input w-full"
                            />
                        </section>

                        <section className="space-y-2 mb-4.75">
                            <Select
                                className="space-y-2.25 [&>span]:font-medium [&>span]:text-midnight-blue [&>span]:tracking-min"
                                label="Zone / Area*"
                                placeholder="Select a zone"
                                value={zone}
                                onChangeAction={setZone}
                                options={ZONE_OPTIONS}
                            />
                            <p className="text-sm text-greenish">
                                Used for filtering, reporting, and map views.
                            </p>
                        </section>

                        <section className="mb-9.5 space-y-3">
                            <Select
                                className="space-y-2.25 [&>span]:font-medium [&>span]:text-midnight-blue [&>span]:tracking-min"
                                label="Road Type"
                                placeholder="Residential"
                                value={roadType}
                                onChangeAction={setRoadType}
                                options={ROAD_TYPE_OPTIONS}
                            />
                        </section>

                        <section className="space-y-2">
                            <div className="flex gap-2.5 items-center">
                                <p className="text-sm font-medium text-midnight-blue">Priority</p>
                                <Tabs
                                    className="bg-cool-grey p-1 rounded-md gap-0 [&>li>button]:rounded-sm [&>li>button]:px-3 [&>li>button]:py-1.5"
                                    tabs={[
                                        { label: "Low", value: "low" },
                                        { label: "Normal", value: "normal" },
                                        { label: "High", value: "high" },
                                    ]}
                                />
                            </div>
                            <p className="text-sm text-greenish">
                                Priority helps determine attention when issues occur.
                            </p>
                        </section>

                        <div className="space-y-4">
                            <CheckBox
                                id="coverage-area"
                                name="coverage-area"
                                label="Define coverage area on map"
                                checked={showCoverageArea}
                                onChangeAction={setShowCoverageArea}
                            />

                            {showCoverageArea ? (
                                <div className="h-72 md:h-80 overflow-hidden rounded-md border border-light-grey-300 bg-light-grey-100">
                                    <LeafletMap pins={[]} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="border-t border-light-grey-300 px-4 md:px-6 py-4">
                    <div className="flex justify-between gap-2">
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={onClose} className="px-5.5">
                            Add Road
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}