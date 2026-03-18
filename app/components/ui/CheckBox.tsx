"use client";

import React from "react";
import { cn } from "@/app/utils/helper";

type CheckBoxProps = {
    id: string;
    name: string;
    label: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChangeAction?: (checked: boolean) => void;
};

export default function CheckBox({
    id,
    name,
    label,
    className,
    checked,
    defaultChecked,
    onChangeAction,
}: CheckBoxProps) {
    return (
        <label
            htmlFor={id}
            className={cn(
                "checkbox",
                className
            )}
        >
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={(e) => onChangeAction?.(e.target.checked)}
            />
            <span />
            <span className="inline-block cursor-pointer">{label}</span>
        </label>
    );
}