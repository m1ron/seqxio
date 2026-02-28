"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import useStore from "@/app/utils/store";

export const SIDEBAR_DATA = [
    {
        title: "Menu",
        sublinks: [
            { name: "Dashboard", url: "/", icon: "dashboard" },
            { name: "Projects", url: "#", icon: "projects" },
            { name: "Calendar", url: "#", icon: "calendar" },
            { name: "Analytics", url: "#", icon: "analytics" },
            { name: "Reports", url: "#", icon: "reports" },
            { name: "Team", url: "#", icon: "team" },
        ],
    },
    {
        title: "General",
        sublinks: [
            { name: "Settings", url: "#", icon: "settings" },
            { name: "Help", url: "#", icon: "help" },
            { name: "Logout", url: "/sign-in", icon: "logout" },
        ],
    },
];

const Sidebar: React.FC = () => {
    const router = useRouter();
    const { openNav, setOpenNav } = useStore() as {
        openNav: boolean;
        setOpenNav: (open: boolean) => void;
    };

    // State to track the active link
    const [activeItem, setActiveItem] = useState<string>("Dashboard");

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = openNav ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [openNav]);

    return (
        <>
            {/* SIDEBAR */}
            <aside
                className={`w-66 p-6 bg-light-grey rounded-3xl flex flex-col justify-between gap-8 overflow-y-auto scrollbar-hide fixed top-4 lg:left-4 bottom-3 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
                    openNav ? "translate-x-0 max-lg:left-4" : "-translate-x-full max-lg:left-0"
                }`}
            >
                {/* Logo */}
                <Link href="/" className="py-4 block">
                    <Image
                        className="block select-none"
                        src="/assets/images/png/logo-dashboard.png"
                        width={180}
                        height={83}
                        alt="seqxio"
                        title="seqxio"
                    />
                </Link>

                {/* Menu */}
                {SIDEBAR_DATA.map((section) => (
                    <div key={section.title} className="flex flex-col gap-3.5">
                        <p className="text-grey text-base font-medium -tracking-standart uppercase cursor-default select-none">{section.title}</p>
                        <menu className="flex flex-col gap-4 text-xl leading-6.25 tracking-[-2%]">
                            {section.sublinks.map((sublink) => (
                                <li key={sublink.name} className="mt-[-0.5px]">
                                    <Link
                                        href={sublink.url}
                                        onClick={() => setActiveItem(sublink.name)}
                                        className={`w-full flex items-center gap-3 relative outline-none ${activeItem === sublink.name ? "font-medium text-black" : "text-grey hover:text-black focus:text-black transition-colors outline-none"}`}
                                    >
                                        {sublink.icon && (
                                            <Icons icon={sublink.icon} className="block"/>
                                        )}
                                        <span className="block">{sublink.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </menu>
                    </div>
                ))}

                {/* Download Section */}
                <div className="p-4 bg-black bg-cover rounded-2xl bg-[url('/assets/images/download.webp')] cursor-default">
                    <div className="mb-2.5 size-6.25 bg-white rounded-full flex items-center justify-center">
                        <Icons icon="download"/>
                    </div>
                    <p className="max-w-40 mb-2.25 font-light text-xl leading-100 -tracking-[3%] text-white select-none"><strong className="font-semibold">Download</strong> our Mobile App</p>
                    <p className="mb-4 text-xsm leading-100 text-white -tracking-standart select-none">Stay on track.</p>
                    <a href="#" className="px-2.25 py-2.25 -mx-0.75 text-white bg-dark-green hover:text-dark-green hover:bg-white focus:text-dark-green focus:bg-white rounded-full block text-center text-sm font-medium leading-6 -tracking-standart transition ease-linear outline-none">
                        Download
                    </a>
                </div>

                {/* Close Button */}
                <button onClick={() => setOpenNav(false)} className="lg:hidden h-fit bg-dark-green rounded-sm p-1 hover:scale-105 transition">
                    <Icons icon="closenav"/>
                </button>
            </aside>

            {/* Blur Background */}
            {openNav && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-black/20 lg:hidden z-40 transition"
                    onClick={() => setOpenNav(false)}
                />
            )}
        </>
    );
};

export default Sidebar;