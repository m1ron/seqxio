"use client";

import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export type CollectionChartItem = {
    day: string;
    value: number;
};

type CollectionChartProps = {
    data: CollectionChartItem[];
};

type TooltipProps = {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: CollectionChartItem;
    }>;
};

function CustomTooltip({ active, payload }: TooltipProps) {
    if (!active || !payload?.length) {
        return null;
    }

    return (
        <div
            className="rounded-sm border border-light-grey-300 bg-white px-2 py-1 shadow-sm"
            style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)" }}
        >
            <p className="text-xsm leading-100 text-midnight-blue">
                {payload[0].payload.day}
            </p>
            <p className="text-xsm leading-100 text-green">
                {payload[0].value} <span className="text-midnight-blue">tons</span>
            </p>
        </div>
    );
}

export default function CollectionChart({ data }: CollectionChartProps) {
    return (
        <>
            <style jsx>{`
                .recharts-wrapper,
                .recharts-surface,
                svg {
                    outline: none !important;
                }
            `}</style>

            <div className="w-full h-52.5">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 8, right: 0, left: -24, bottom: 0 }}
                        barCategoryGap={12}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#E5E7EB"
                            strokeDasharray="3 3"
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#64748B",
                                fontSize: 12,
                            }}
                        />
                        <YAxis
                            domain={[0, 400]}
                            ticks={[0, 100, 200, 300, 400]}
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#64748B",
                                fontSize: 12,
                            }}
                        />
                        <Tooltip
                            cursor={{ fill: "rgba(141, 136, 218, 0.08)" }}
                            content={<CustomTooltip />}
                            wrapperStyle={{ outline: "none" }}
                        />
                        <Bar
                            dataKey="value"
                            fill="#8D88DA"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={44}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}