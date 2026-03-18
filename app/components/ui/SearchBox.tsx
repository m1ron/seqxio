"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Icons from "../common/Icons";

const SearchBox = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchValue.trim() !== "") {
            router.push("/");
            setOpenSearch(false);
        }
    };

    return (
        <>
            {/* ===== Desktop Search ===== */}
            <div className="hidden md:flex items-center bg-white py-3 px-4 rounded-full xl:max-w-[361px] xl:min-w-[361px] lg:max-w-[300px] max-w-[250px] w-full">
                <div className="flex items-center gap-2 w-full">
                    <Image width={25} height={25} src="/assets/images/svg/search-icon.svg" alt="search-icon" />

                    <input
                        type="text"
                        placeholder="Search task"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full outline-none pe-2 tracking-[-.04em]"
                    />
                </div>

                <Image width={46} height={26} src="/assets/images/svg/f-icon.svg" alt="f-icon" />
            </div>

            {/* ===== Mobile Search Icon ===== */}
            <button
                onClick={() => setOpenSearch(true)}
                className="md:hidden cursor-pointer bg-white hover:bg-dark-green transition-all ease-linear duration-300 size-[45px] rounded-full flex items-center justify-center group"
            >
                <Icons icon="searchIcon" className="w-6 h-6 text-black group-hover:text-white transition-all ease-linear duration-300" />
            </button>

            {/* ===== Mobile Overlay ===== */}
            {openSearch && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-start pt-20 px-4"
                    onClick={() => setOpenSearch(false)} // ✅ CLOSE ON OUTSIDE CLICK
                >

                    {/* STOP CLOSING WHEN CLICK INSIDE SEARCH BOX */}
                    <div
                        className="flex items-center bg-white py-3 px-4 rounded-full w-full max-w-[500px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-2 w-full">
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search task"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full outline-none"
                            />
                        </div>

                        <button onClick={() => setOpenSearch(false)}>
                            <Image width={46} height={26} src="/assets/images/svg/f-icon.svg" alt="close" />
                        </button>
                    </div>

                </div>
            )}
        </>
    );
};

export default SearchBox;
