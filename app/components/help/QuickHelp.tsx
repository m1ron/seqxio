import React from "react";
import Icons from "@/app/components/common/Icons";

type QuickHelpItem = {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
    icon: string;
};

type QuickHelpProps = {
    items: QuickHelpItem[];
};

export default function QuickHelp({ items }: QuickHelpProps) {
    return (
        <>
            {items.map((item) => (
                <div key={item.title} className="rounded-lg bg-white border border-light-grey-300 p-6 pt-5 space-y-6">
                    <div className="flex gap-4">
                        <div className="relative top-0.75 shrink-0">
                            <img
                                className="size-8 block select-none"
                                src={item.icon}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className="text-[18px] md:text-2xl leading-6 md:leading-8 font-semibold text-midnight-blue">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-5 text-greenish">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <a href={item.href} className="flex items-center gap-4 text-dark-green font-semibold text-sm leading-5 tracking-minimal outline-none hover:text-black focus:text-black">
                            <span className="block">{item.linkLabel}</span>
                            <Icons icon="arrowRight"/>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}