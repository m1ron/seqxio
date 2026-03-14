"use client";
import React from "react";

type ToggleProps = {
    id: string;
    label: string;
    checked?: boolean;
    defaultChecked?: boolean;
    className?: string;
    onChangeAction?: (checked: boolean) => void;
};

export default function Toggle({
    id,
    label,
    checked,
    defaultChecked,
    className = "",
    onChangeAction,
}: ToggleProps) {
    return (
        <label htmlFor={id} className={`toggle ${className}`.trim()}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={(event) => onChangeAction?.(event.target.checked)}
            />
            <span/>
            {label}
        </label>
    );
}