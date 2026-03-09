import React from "react";

type PageHeaderProps = {
    children?: React.ReactNode;
    heading: string;
    subheading?: string;
    className?: string;
};

export default function PageHeader({ children, heading, subheading, className }: PageHeaderProps) {
    return (
        <div className={`mb-6.5 flex max-md:flex-col gap-2 ${className || ""}`}>
            <header className="space-y-0.5">
                {heading ? (
                    <h1 className="text-black font-medium text-3xl md:text-custom-4xl leading-150 tracking-half">
                        {heading}
                    </h1>
                ) : null}

                {subheading ? (
                    <p className="text-light-green font-light text-base md:text-xl leading-120 -tracking-minimal">
                        {subheading}
                    </p>
                ) : null}
            </header>
            <div className="pt-px ml-auto flex gap-4 items-center">
                {children}
            </div>
        </div>
    );
}

/* inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[15px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-[#155234] to-[#227D53] text-white hover:from-[#103e28] hover:to-[#1a6341] h-10 px-4 py-2 */