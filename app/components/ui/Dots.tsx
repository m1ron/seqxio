"use client";

import React, { useEffect, useRef, useState } from "react";

import Icons from "@/app/components/common/Icons";
import { cn } from "@/app/utils/helper";

export type DotsMenuItem = {
    label: string;
    value: string;
};

type DotsProps = {
    items: DotsMenuItem[];
    className?: string;
    onItemClickAction?: (value: string) => void;
};

export default function Dots({ items, className, onItemClickAction }: DotsProps) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showDropdown = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }

        setMounted(true);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setOpen(true);
            });
        });
    };

    const hideDropdown = () => {
        setOpen(false);

        closeTimeoutRef.current = setTimeout(() => {
            setMounted(false);
        }, 180);
    };

    const toggleDropdown = () => {
        if (mounted && open) {
            hideDropdown();
            return;
        }

        showDropdown();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!menuRef.current?.contains(event.target as Node) && mounted) {
                hideDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);

            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, [mounted]);

    const handleActionClick = (value: string) => {
        onItemClickAction?.(value);
        hideDropdown();
    };

    return (
        <div ref={menuRef} className={cn("relative inline-block", className)}>
            <button
                type="button"
                onClick={toggleDropdown}
                className={`size-10 rounded-2xl p-0 flex items-center justify-center bg-white hover:bg-cool-grey focus:bg-cool-grey transition-colors border border-light-grey-200 cursor-pointer outline-none ${mounted && open ? "is-open" : ""}`}
                aria-label="Open actions menu"
            >
                <Icons
                    className="block"
                    icon="dots"
                />
            </button>

            {mounted ? (
                <div className={`select-dropdown min-w-40 right-0 left-auto ${open ? "is-open" : "is-closed"}`}>
                    {items.map((item) => (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => handleActionClick(item.value)}
                            className="select-option"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    );
}