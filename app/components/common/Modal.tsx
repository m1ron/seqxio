"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import Icons from "@/app/components/common/Icons";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>

            <div
                className={clsx(
                    "fixed inset-0 z-100 bg-black/80 transition-opacity duration-300 ease",
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            <aside
                className={clsx(
                    "fixed right-0 top-0 z-110 h-dvh w-full max-w-110 xl:max-w-lg bg-white shadow-2xl",
                    "transform transition-transform duration-300 ease",
                    open ? "translate-x-0" : "translate-x-full"
                )}
                aria-hidden={!open}
            >
                <div className="flex h-full flex-col">
                    <div className="px-4 md:px-6 pt-5 pb-4 flex items-center justify-between">
                        <h2 className="text-lg xl:text-xl font-semibold text-midnight-blue tracking-minimal">
                            {title}
                        </h2>

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full p-1 -mr-1 hover:bg-light-grey-200 focus:bg-light-grey-200 cursor-pointer outline-none"
                            aria-label="Close modal"
                        >
                            <Icons icon="close" />
                        </button>
                    </div>

                    <div className="p-4 md:px-6 flex-1 bg-lighter overflow-y-auto scrollbar-hide">
                        {children}
                    </div>
                </div>
            </aside>
        </>
    );
}