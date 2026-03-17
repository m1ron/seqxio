import React from "react";
import { cn } from "@/app/utils/helper";

type PageHeaderProps = {
    children?: React.ReactNode;
    heading: string;
    subheading?: string;
    className?: string;
    headingClassName?: string;
};

export default function PageHeader({
                                       children,
                                       heading,
                                       subheading,
                                       className,
                                       headingClassName,
                                   }: PageHeaderProps) {
    return (
        <div className={cn("mb-6.5 flex max-md:flex-col gap-4", className)}>
            <header className="space-y-0.5">
                {heading ? (
                    <h1
                        className={cn(
                            "text-black font-medium leading-150 tracking-half text-3xl xl:text-[40px]",
                            headingClassName
                        )}
                    >
                        {heading}
                    </h1>
                ) : null}

                {subheading ? (
                    <p className="text-light-green font-light text-base xl:text-xl leading-120 -tracking-minimal">
                        {subheading}
                    </p>
                ) : null}
            </header>
            <div className="ml-auto flex gap-4 items-center">
                {children}
            </div>
        </div>
    );
}