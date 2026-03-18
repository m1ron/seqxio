"use client";

import React from "react";

import Heading from "@/app/components/ui/Heading";

export default function InteractiveMap() {
    return (
        <div className="flex flex-col w-full sm:w-[50%] bg-white p-4 rounded-[15px] h-auto">
            <Heading className="mb-4">Interactive Map</Heading>

            <div className="relative w-full h-45 sm:flex-1 sm:h-full">
                <div
                    ref={null}
                    className="w-full h-45 rounded-xl overflow-hidden"
                />
            </div>
        </div>
    );
}