import React from "react";
import Icons from "@/app/components/common/Icons";

type TroubleshootingItem = {
    title: string;
    description: string;
    icon: string;
};

type TroubleshootingProps = {
    items: TroubleshootingItem[];
};

export default function Troubleshooting({ items }: TroubleshootingProps) {
    return (
        <>
            {items.map((item) => (
                <div key={item.title} className="rounded-lg bg-white border border-light-grey-300 p-4 space-y-6">
                    <div className="flex gap-4">
                        <Icons icon={item.icon}/>
                        <div>
                            <h3 className="text-base leading-6 font-semibold text-midnight-blue tracking-half">
                                {item.title}
                            </h3>
                            <p className="text-charcoal-grey text-sm leading-5 -tracking-min">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}