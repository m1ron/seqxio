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

export type EfficiencyChartItem = {
    label: string;
    value: number;
};

type EfficiencyChartProps = {
    data: EfficiencyChartItem[];
    valueType?: "default" | "minutes";
    valueSuffix?: string;
    yAxisWidth?: number;
};

type CustomTooltipProps = {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: EfficiencyChartItem;
    }>;
    valueType: "default" | "minutes";
    valueSuffix?: string;
};

function formatMinutes(value: number) {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours}h ${minutes}m`;
}

function formatValue(value: number, valueType: "default" | "minutes") {
    if (valueType === "minutes") {
        return formatMinutes(value);
    }

    return String(value);
}

function CustomTooltip({
                           active,
                           payload,
                           valueType,
                           valueSuffix,
                       }: CustomTooltipProps) {
    if (!active || !payload?.length) {
        return null;
    }

    const item = payload[0].payload;

    return (
        <div
            className="rounded-sm border border-light-grey-300 bg-white px-2 py-1 shadow-sm"
            style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)" }}
        >
            <p className="text-xsm leading-100 text-midnight-blue">{item.label}</p>
            <p className="text-xsm leading-100 text-green">
                {formatValue(item.value, valueType)}
                {valueSuffix ? <span className="text-midnight-blue"> {valueSuffix}</span> : null}
            </p>
        </div>
    );
}

export default function EfficiencyChart({
                                            data,
                                            valueType = "default",
                                            valueSuffix,
                                            yAxisWidth = 72,
                                        }: EfficiencyChartProps) {
    const maxValue = Math.max(...data.map((item) => item.value), 0);
    const domainMax = Math.ceil(maxValue / 10) * 10 + 10;

    return (
        <>
            <style jsx>{`
                .recharts-wrapper,
                .recharts-surface,
                svg {
                    outline: none !important;
                }
            `}</style>

            <div className="w-full h-full min-h-60">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 0, right: 16, left: 8, bottom: 0 }}
                        barCategoryGap="25%"
                    >
                        <CartesianGrid
                            horizontal={false}
                            stroke="#E5E7EB"
                        />
                        <XAxis
                            type="number"
                            hide
                            domain={[0, domainMax]}
                        />
                        <YAxis
                            dataKey="label"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            width={yAxisWidth}
                            tick={{
                                fill: "#737373",
                                fontSize: 12,
                            }}
                        />
                        <Tooltip
                            cursor={{ fill: "rgba(141, 136, 218, 0.08)" }}
                            content={
                                <CustomTooltip
                                    valueType={valueType}
                                    valueSuffix={valueSuffix}
                                />
                            }
                            wrapperStyle={{ outline: "none" }}
                        />
                        <Bar
                            dataKey="value"
                            fill="#8D88DA"
                            radius={[0, 4, 4, 0]}
                            barSize={18}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}