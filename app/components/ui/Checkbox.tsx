"use client";

import React from "react";
import { cn } from "@/app/utils/helper";

type CheckboxProps = {
    id: string;
    label: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
};

export default function Checkbox({
    id,
    label,
    className,
    checked,
    defaultChecked,
    onChange,
}: CheckboxProps) {
    return (
        <label
            htmlFor={id}
            className={cn(
                "flex items-center gap-2 text-sm font-normal cursor-pointer select-none",
                className
            )}
        >
            <input
                id={id}
                type="checkbox"
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={(e) => onChange?.(e.target.checked)}
                className="size-4 rounded-md border border-light-grey-300 accent-dark-green"
            />
            <span className="block">{label}</span>
        </label>
    );
}