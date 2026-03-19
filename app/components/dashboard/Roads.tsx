"use client";

import React, { useState } from "react";

import Icons from "@/app/components/common/Icons";
import Button from "@/app/components/ui/Button";
import AddRoadModal from "@/app/components/dashboard/AddRoadModal";
import { RoadsDetails } from "@/app/utils/type";

const ROADS_DATA: RoadsDetails[] = [
    { name: "N Tryon St", color: "#da383a" },
    { name: "S Tryon St", color: "#da383a" },
    { name: "Independence Blvd", color: "#ffaa2a" },
    { name: "Wilkinson Blvd", color: "#227d53" },
    { name: "Freedom Dr", color: "#da383a" },
    { name: "South Blvd", color: "#227d53" },
    { name: "Central Ave", color: "#da383a" },
    { name: "Eastway Dr", color: "#ffaa2a" }
];

type RoadData = {
    id: string;
    name: string;
    color: string;
};

const INITIAL_ROADS: RoadData[] = ROADS_DATA.map((road, index) => ({
    id: `default-${index}`,
    name: road.name,
    color: road.color,
}));

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center py-8">
            <span className="text-5xl mb-3">🛣️</span>
            <p className="text-graphite text-base font-normal">No roads selected</p>
            <p className="text-graphite text-sm font-normal mt-1">Click &quot;New&quot; to add a road</p>
        </div>
    );
}

function RoadRow({
                     road,
                     onDelete,
                 }: {
    road: RoadData;
    onDelete: (id: string) => void;
}) {
    return (
        <div
            className="cursor-pointer flex items-center justify-between gap-2 group hover:bg-gray-100 p-[5px] rounded-sm"
            key={road.id}
        >
            <p className="font-normal text-base leading-150 -tracking-[0.64px] text-black">
                {road.name}
            </p>

            <div className="flex items-center gap-2">
                <div className="rounded-full size-2" style={{ backgroundColor: road.color }}/>

                <button
                    type="button"
                    onClick={() => onDelete(road.id)}
                    className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-900 bg-red-500 flex items-center justify-center rounded-sm"
                    title="Delete road"
                    aria-label={`Delete road ${road.name}`}
                >
                    <Icons className="size-4" icon="closenav"/>
                </button>
            </div>
        </div>
    );
}

export default function Roads() {
    const [isAddRoadModalOpen, setIsAddRoadModalOpen] = useState(false);
    const [roads, setRoads] = useState<RoadData[]>(INITIAL_ROADS);

    const handleDeleteRoad = (id: string) => {
        setRoads((currentRoads) => currentRoads.filter((road) => road.id !== id));
    };

    return (
        <div className="bg-white rounded-[15px] p-4 pb-3.5 flex flex-col gap-4 xl:mb-4 max-xl:w-[50%] max-sm:w-full">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-black font-medium leading-120 text-xl -tracking-[0.64px]">
                    Roads
                </h2>

                <Button
                    variant="outline"
                    className="px-5 py-1.5 text-base leading-150 -tracking-mid rounded-full flex items-center gap-2 justify-center"
                    onClick={() => setIsAddRoadModalOpen(true)}
                >
                    <Icons className="-ml-px" icon="greenPlusicon" />
                    New
                </Button>
            </div>

            <div className="flex flex-col h-66 overflow-auto scrollbar-custom">
                {roads.length === 0 ? (
                    <EmptyState />
                ) : (
                    roads.map((road) => (
                        <RoadRow key={road.id} road={road} onDelete={handleDeleteRoad} />
                    ))
                )}
            </div>

            <AddRoadModal
                isOpen={isAddRoadModalOpen}
                onClose={() => setIsAddRoadModalOpen(false)}
            />
        </div>
    );
}