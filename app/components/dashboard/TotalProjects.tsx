"use client";

import React from "react";

import Icons from "@/app/components/common/Icons";
import WasteChart from "@/app/components/dashboard/WasteChart";

const TotalProjects = () => {
    return (
        <>
            {/* BOXES */}
            <div className="flex xl:flex-row flex-col items-center gap-4">

                {/* TOTAL */}
                <div className="flex items-center sm:flex-row flex-col gap-4 w-full">
                    <div className="max-[1480px]:max-w-[265px] max-xl:max-w-full w-full p-4 rounded-[15px] bg-linear-to-b from-dark-green to-[#227D53] xl:min-h-47 min-h-40">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-white font-medium leading-120 text-xl -tracking-[0.64px]">
                                Total Projects
                            </p>
                            <div className="rounded-full bg-white size-6 flex items-center justify-center transition-all ease-linear cursor-pointer group hover:bg-green border border-transparent hover:border-white">
                                <Icons icon="rightArrowTop" className="text-black group-hover:text-white transition-all ease-linear duration-150"/>
                            </div>
                        </div>

                        <p className="text-white xl:text-custom-6xl text-5xl font-semibold -tracking-[0.64px] leading-100 mb-4">
                            24
                        </p>

                        <div className="flex items-center gap-2">
                            <div className="border w-6 h-5 border-lime-green rounded-[5px] flex items-center justify-center gap-0.5">
                                <p className="text-lime-green text-[10px] leading-100 font-normal">
                                    5
                                </p>
                                <Icons icon="triangleDropIcon" className="text-lime-green"/>
                            </div>
                            <p className="text-sm font-normal leading-100! text-lime-green -tracking-standart">
                                Increased from last month
                            </p>
                        </div>
                    </div>

                    {/* ENDED */}
                    <div className="max-[1480px]:max-w-[265px] max-xl:max-w-full w-full p-4 rounded-[15px] bg-white xl:min-h-47 h-40">
                        <div className="flex flex-wrap justify-between mb-4">
                            <p className="text-black font-medium leading-120 text-xl -tracking-[0.64px]">
                                Ended Projects
                            </p>
                            <div className="rounded-full bg-white border border-black size-6 transition-all ease-in-out duration-150 cursor-pointer flex items-center justify-center hover:border-green hover:bg-green group">
                                <Icons icon="rightArrowTop" className="text-black group-hover:text-white transition-all ease-linear duration-150"/>
                            </div>
                        </div>

                        <p className="text-black xl:text-custom-6xl text-5xl font-semibold -tracking-[0.64px] leading-100 mb-4">
                            10
                        </p>

                        <div className="flex items-center gap-2">
                            <div className="border w-6 h-5 border-green rounded-[5px] flex items-center justify-center gap-[1.5px] bg-light-grey-100">
                                <p className="text-green text-xs leading-100 font-normal">
                                    6
                                </p>
                                <Icons icon="triangleDropIcon" className="text-green"/>
                            </div>
                            <p className="text-sm font-normal leading-100! text-green -tracking-standart">
                                Increased from last month
                            </p>
                        </div>
                    </div>
                </div>

                {/* CHART */}
                <div className="max-[1480px]:max-w-137 max-xl:max-w-full w-full p-4 rounded-[15px] bg-white flex max-sm:flex-col justify-between gap-1.5 sm:h-47 min-[1480px]:w-[674px] min-[1480px]:shrink-0 overflow-x-clip">
                    <div className="xlmax-w-[237px]">
                        <p className="mb-4 xl:text-nowrap -tracking-mid text-black font-medium leading-120 text-xl">
                            Collected Waste Summary
                        </p>
                        <p className="text-black xl:text-custom-6xl text-5xl font-semibold leading-100 mb-4">
                            1,284.6
                        </p>
                        <div className="flex items-center gap-2 max-sm:mb-6">
                            <div className="border w-[39px] h-[20px] border-green rounded-[5px] flex items-center justify-center gap-0.5 bg-light-grey-100">
                                <p className="text-green text-[10px] leading-100 font-normal">
                                    200
                                </p>
                                <Icons icon="triangleDropIcon" className="text-green"/>
                            </div>
                            <p className="text-sm font-normal leading-100! text-green -tracking-standart">
                                Increased from last month
                            </p>
                        </div>
                    </div>

                    <div className="xl:max-w-none min-[1150px]:max-w-[500px] lg:max-w-[350px] md:max-w-[400px] max-w-[262px] w-full max-sm:mx-auto">
                        <WasteChart/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TotalProjects;
