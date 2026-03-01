"use client";

import React from "react";

type PageHeaderProps = {
    heading: string;
    subheading?: string;
    className?: string;
};

export default function PageHeader({ heading, subheading, className }: PageHeaderProps) {
    return (
        <header className={["mb-4.5 space-y-2", className].filter(Boolean).join(" ")}>
            {heading ? (
                <h1 className="text-black font-medium text-3xl md:text-custom-4xl leading-100">
                    {heading}
                </h1>
            ) : null}

            {subheading ? (
                <p className="text-light-green font-light text-base md:text-xl leading-120 -tracking-[0.022em]">
                    {subheading}
                </p>
            ) : null}
        </header>
    );
}