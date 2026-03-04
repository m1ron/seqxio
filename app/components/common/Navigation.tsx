"use client";

import React from "react";

import Image from "next/image";
import Icons from "./Icons";

import useStore from "@/app/utils/store"
import SearchBox from "./SearchBox";

const Navigation = () => {
    const userName = "Ciara Thomas";
    const userEmail = "cthomas@mail.com";

    const ICONS_DATA_LIST = [
        "mailIcon", "notification"
    ]

    const { setOpenNav } = useStore() as {
        openNav: boolean;
        setOpenNav: (open: boolean) => void;
    };
    return (
        <>
            <div className="w-full p-4 md:p-6 bg-light-grey rounded-3xl">
                <div className="flex items-center justify-between">

                    <div className="flex sm:gap-3 gap-2">
                        <button
                            onClick={() => setOpenNav(true)}
                            className="lg:hidden">
                            <div className="cursor-pointer flex items-center justify-center bg-white rounded-full w-11.25 h-11.25 hover:bg-dark-green group transition-all ease-linear duration-300">
                                <Icons
                                    className="rounded-full group-hover:text-white text-black"
                                    icon="hamburger"
                                />
                            </div>
                        </button>
                        <SearchBox/>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-[17.5px]">
                        {ICONS_DATA_LIST.map((obj, i) => (
                            <a href="#" key={i} className="group bg-white size-12 aspect-square flex items-center justify-center rounded-full hover:bg-dark-green focus:bg-dark-green transition-colors duration-100 ease outline-none">
                                <Icons icon={obj} className="text-black group-hover:text-white group-focus:text-white transition-colors duration-100"/>
                            </a>
                        ))}

                        <div className="w-fit flex items-center gap-2">
                            <div className="bg-light-red size-12.5 aspect-square flex items-center justify-center rounded-full">
                                <Image
                                    className="block select-none"
                                    src="/assets/images/webp/profile.webp"
                                    width={33}
                                    height={40}
                                    alt={userName}
                                    title={userName}
                                    draggable={false}
                                />
                            </div>
                            <div className="hidden sm:flex flex-col leading-150 -tracking-standart">
                                <p className="font-semibold text-black">{userName}</p>
                                <p className="text-graphite">{userEmail}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navigation