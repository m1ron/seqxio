"use client";

import React from "react";
import { cn } from "@/app/utils/helper";

type RadioBoxProps = {
    id: string;
    name: string;
    label: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChangeAction?: (checked: boolean) => void;
};

export default function RadioBox({
    id,
    name,
    label,
    className,
    checked,
    defaultChecked,
    onChangeAction,
}: RadioBoxProps) {
    return (
        <label
            htmlFor={id}
            className={cn(
                "radiobox",
                className
            )}
        >
            <input
                id={id}
                name={name}
                type="radio"
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={(e) => onChangeAction?.(e.target.checked)}
            />
            <span />
            <span className="inline-block cursor-pointer">{label}</span>
        </label>
    );
}