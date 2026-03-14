import React from "react";
import { cn } from "@/app/utils/helper";

type StepsItem = {
    label: string;
};

type StepsProps = {
    items: StepsItem[];
    currentStep: number;
    className?: string;
};

export default function Steps({ items, currentStep, className }: StepsProps) {
    return (
        <div className={cn("flex items-center gap-4", className)}>
            {items.map((item, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;

                return (
                    <div key={item.label} className={cn("flex items-center gap-2", !isActive && !isCompleted && "opacity-50 max-md:hidden")}>
                        <div
                            className={cn(
                                "size-6 rounded-full flex items-center justify-center shrink-0 text-sm font-medium cursor-default select-none",
                                isActive || isCompleted
                                    ? "bg-deep-slate text-white"
                                    : "bg-gray-200 text-midnight-blue"
                            )}
                        >
                            {stepNumber}
                        </div>

                        <span className={cn("font-medium tracking-minimal", (isActive || isCompleted) && "text-midnight-blue")}>
                            {item.label}
                        </span>

                        {index < items.length - 1 ? (
                            <div className="w-12 h-px bg-gray-200 max-md:hidden" />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}