"use client";

import React, { useEffect, useRef, useState } from "react";

type TimeTrackerProps = {
    className?: string;
};

const TRACKER_BACKGROUND = "/assets/images/webp/Time Tracker-bg.webp";

function formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [hours, minutes, secs]
        .map((value) => String(value).padStart(2, "0"))
        .join(":");
}

export default function TimeTracker({ className }: TimeTrackerProps) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (!isRunning) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isRunning]);

    const handlePlayPause = () => {
        setIsRunning((current) => !current);
    };

    const handleStop = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <section
            className={`xl:h-56 sm:h-auto max-sm:h-50 bg-cover bg-center bg-no-repeat rounded-[15px] overflow-hidden max-xl:w-[50%] max-sm:w-full ${className ?? ""}`}
            style={{ backgroundImage: `url('${TRACKER_BACKGROUND}')` }}
        >
            <div className="p-4 flex h-full flex-col justify-between cursor-default">
                <p className="font-medium leading-120 text-white text-xl -tracking-[0.64px]">
                    Time Tracker
                </p>
                <p className="font-medium md:text-custom-4xl text-4xl -tracking-[0.64px] text-white mx-auto max-sm:my-2">
                    {formatTime(time)}
                </p>
                <div className="flex items-center gap-3.25 mx-auto mb-1.25">
                    <button
                        type="button"
                        onClick={handlePlayPause}
                        className="size-11 rounded-full cursor-pointer bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label={isRunning ? "Pause" : "Play"}
                    >
                        {isRunning ? (
                            <div className="flex gap-1">
                                <div className="w-1.5 h-4.5 bg-gray-800 rounded-xs"/>
                                <div className="w-1.5 h-4.5 bg-gray-800 rounded-xs"/>
                            </div>
                        ) : (
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-gray-800 border-b-8 border-b-transparent ml-1"/>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={handleStop}
                        className="rounded-full cursor-pointer size-11 bg-more-red flex items-center justify-center hover:bg-[#c02f31] transition-colors"
                        aria-label="Stop"
                    >
                        <div className="size-4.75 bg-white rounded-xs"/>
                    </button>
                </div>
            </div>
        </section>
    );
}