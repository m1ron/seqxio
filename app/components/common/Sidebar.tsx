"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Icons from "./Icons";
import useStore from "@/app/utils/store";

type SidebarLink = {
    name: string;
    url: string;
    icon: string;
};

type SidebarSection = {
    title: string;
    sublinks: SidebarLink[];
};

export const MENU: SidebarSection[] = [
    {
        title: "Menu",
        sublinks: [
            { name: "Dashboard", url: "/", icon: "dashboard" },
            { name: "Map", url: "/map", icon: "map" },
            { name: "Projects", url: "/projects", icon: "projects" },
            { name: "Calendar", url: "/calendar", icon: "calendar" },
            { name: "Analytics", url: "/analytics", icon: "analytics" },
            { name: "Reports", url: "/reports", icon: "reports" },
            { name: "Team", url: "/team", icon: "team" },
        ],
    },
    {
        title: "General",
        sublinks: [
            { name: "Settings", url: "/settings", icon: "settings" },
            { name: "Help", url: "/help", icon: "help" },
            { name: "Logout", url: "/sign-in", icon: "logout" },
        ],
    },
];

const SIDEBAR_BASE_CLASS =
    "fixed top-3 left-4 bottom-3 z-50 w-66 p-6 bg-light-grey rounded-3xl flex flex-col justify-between gap-8 overflow-y-auto scrollbar-hidden transform transition-transform duration-400 ease-out lg:translate-x-0";

const SIDEBAR_OPEN_CLASS = "translate-x-0";
const SIDEBAR_CLOSED_CLASS = "-translate-x-[120%]";
const SIDEBAR_TRANSITION_MS = 400;

function isActivePath(pathname: string, url: string) {
    if (url === "/") return pathname === "/";
    return pathname === url || pathname.startsWith(`${url}/`);
}

function SidebarSectionList({
    section,
    pathname,
    onNavigate,
}: {
    section: SidebarSection;
    pathname: string;
    onNavigate: () => void;
}) {
    return (
        <div className="flex flex-col gap-3.5">
            <p className="text-grey text-base font-medium -tracking-standart uppercase cursor-default select-none">
                {section.title}
            </p>

            <ul className="flex flex-col gap-4 text-xl leading-6.25 tracking-[-2%]">
                {section.sublinks.map((sublink) => {
                    const active = isActivePath(pathname, sublink.url);

                    return (
                        <li key={sublink.name} className="-mt-0.5">
                            <Link
                                href={sublink.url}
                                onClick={onNavigate}
                                aria-current={active ? "page" : undefined}
                                className={`w-full flex items-center gap-3 relative outline-none ${
                                    active
                                        ? "font-medium text-black"
                                        : "text-grey hover:text-black focus:text-black transition-colors"
                                }`}
                            >
                                <Icons icon={sublink.icon} className="block" />
                                <span className="block">{sublink.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default function SideBar() {
    const pathname = usePathname();
    const { openNav, setOpenNav } = useStore() as {
        openNav: boolean;
        setOpenNav: (open: boolean) => void;
    };

    const [overlayMounted, setOverlayMounted] = useState(openNav);
    const [overlayOpen, setOverlayOpen] = useState(openNav);

    useEffect(() => {
        document.body.style.overflow = openNav ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [openNav]);

    useEffect(() => {
        if (openNav) {
            setOverlayMounted(true);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setOverlayOpen(true);
                });
            });

            return;
        }

        setOverlayOpen(false);

        const timeoutId = window.setTimeout(() => {
            setOverlayMounted(false);
        }, SIDEBAR_TRANSITION_MS);

        return () => window.clearTimeout(timeoutId);
    }, [openNav]);

    const sidebarClassName = useMemo(
        () =>
            `${SIDEBAR_BASE_CLASS} ${openNav ? SIDEBAR_OPEN_CLASS : SIDEBAR_CLOSED_CLASS}`,
        [openNav]
    );

    const closeSidebar = () => setOpenNav(false);

    return (
        <>
            <aside className={sidebarClassName} aria-hidden={!openNav}>
                <Link href="/" className="py-4 block" onClick={closeSidebar}>
                    <Image
                        className="block select-none"
                        src="/assets/images/png/logo-dashboard.png"
                        width={180}
                        height={83}
                        alt="seqxio"
                        title="seqxio"
                        draggable={false}
                    />
                </Link>

                {MENU.map((section) => (
                    <SidebarSectionList
                        key={section.title}
                        section={section}
                        pathname={pathname}
                        onNavigate={closeSidebar}
                    />
                ))}

                <div className="p-4 bg-black bg-cover rounded-2xl bg-[url('/assets/images/download.webp')] cursor-default">
                    <div className="mb-2.5 size-6.25 bg-white rounded-full flex items-center justify-center">
                        <Icons icon="download" />
                    </div>

                    <p className="max-w-40 mb-2.25 font-light text-xl leading-100 -tracking-[3%] text-white select-none">
                        <strong className="font-semibold">Download</strong> our Mobile App
                    </p>

                    <p className="mb-4 text-xsm leading-100 text-white -tracking-standart select-none">
                        Stay on track.
                    </p>

                    <a
                        href="#"
                        className="px-2.25 py-2.25 -mx-0.75 text-white bg-dark-green hover:text-dark-green hover:bg-white focus:text-dark-green focus:bg-white rounded-full block text-center text-sm font-medium leading-6 -tracking-standart transition ease-linear outline-none"
                    >
                        Download
                    </a>
                </div>

                <button
                    type="button"
                    onClick={closeSidebar}
                    className="absolute top-3 right-3 lg:hidden"
                    aria-label="Close sidebar"
                >
                    <Icons icon="close" />
                </button>
            </aside>

            {overlayMounted ? (
                <div
                    className={`fixed inset-0 backdrop-blur-sm bg-black/20 lg:hidden z-40 transition-opacity duration-400 ease-out ${
                        overlayOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={closeSidebar}
                />
            ) : null}
        </>
    );
}