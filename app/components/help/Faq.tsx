"use client";

import React, { ReactNode, useState } from "react";
import Icons from "@/app/components/common/Icons";
import { cn } from "@/app/utils/helper";

type FaqItem = {
    question: string;
    answer: ReactNode;
};

type FaqProps = {
    items: FaqItem[];
};

export default function Faq({ items }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
    };

    return (
        <div className="w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <section key={item.question} className="border-b border-b-light-grey-300">
                        <h3 className="text-base leading-6 font-medium text-midnight-blue">
                            <button
                                type="button"
                                onClick={() => handleToggle(index)}
                                className="w-full py-4 pr-8 text-left tracking-minimal relative cursor-pointer"
                                aria-expanded={isOpen}
                            >
                                {item.question}
                                <Icons
                                    icon="select"
                                    className={cn(
                                        "absolute top-1/2 right-0 -translate-y-1/2 transition-transform duration-200",
                                        isOpen && "rotate-180"
                                    )}
                                />
                            </button>
                        </h3>

                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-out",
                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="pb-4 text-sm leading-5">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}