"use client";

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export type CompletionChartItem = {
    name: string;
    value: number;
    color: string;
};

type CompletionChartProps = {
    data: CompletionChartItem[];
};

type TooltipProps = {
    active?: boolean;
    payload?: Array<{
        value: number;
        name: string;
        payload: CompletionChartItem;
    }>;
};

function CustomTooltip({ active, payload }: TooltipProps) {
    if (!active || !payload?.length) {
        return null;
    }

    const item = payload[0];

    return (
        <div
            className="rounded-sm border border-light-grey-300 bg-white px-2 py-1 shadow-sm"
            style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)" }}
        >
            <p className="text-xsm leading-100 text-midnight-blue">{item.name}</p>
            <p className="text-xsm leading-100" style={{ color: item.payload.color }}>
                {item.value}% <span className="text-midnight-blue">of projects</span>
            </p>
        </div>
    );
}

export default function CompletionChart({ data }: CompletionChartProps) {
    return (
        <>
            <style jsx>{`
                .recharts-wrapper,
                .recharts-surface,
                svg {
                    outline: none !important;
                }
            `}</style>

            <div className="w-full">
                <div className="mx-auto h-48 max-w-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={62}
                                outerRadius={90}
                                paddingAngle={4}
                                stroke="#FFFFFF"
                                strokeWidth={4}
                            >
                                {data.map((entry) => (
                                    <Cell key={entry.name} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    {data.map((item) => (
                        <div key={item.name} className="flex items-center gap-1.5">
                            <span
                                className="size-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm text-greenish">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}