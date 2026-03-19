"use client";

import React, { useEffect } from "react";
import Icons from "@/app/components/common/Icons";
import { cn } from "@/app/utils/helper";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    modalClass?: string;
};

export default function Modal({ open, onClose, children, modalClass }: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 z-100 bg-black/70 transition-opacity duration-400 ease",
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            <aside
                className={cn(
                    "fixed right-0 top-0 z-110 h-dvh w-full md:max-w-2xl bg-white",
                    "transform transition-transform duration-400 ease",
                    open ? "translate-x-0" : "translate-x-full",
                    modalClass
                )}
                aria-hidden={!open}
            >
                <div className="flex h-full flex-col relative">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-3 right-3.25 p-1 rounded-full hover:bg-light-grey-200 focus:bg-light-grey-200 cursor-pointer outline-none"
                        aria-label="Close modal"
                    >
                        <Icons className="size-4" icon="close" />
                    </button>

                    {children}
                </div>
            </aside>
        </>
    );
}