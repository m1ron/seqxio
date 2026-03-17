import React from "react";

type RankingTableRow = {
    rank: number;
    name: string;
    value: string;
    suffix: string;
};

type RankingTableProps = {
    rows: RankingTableRow[];
};

export default function RankingTable({ rows }: RankingTableProps) {
    return (
        <table className="min-w-full text-sm">
            <thead>
                <tr className="border-b border-light-grey-300">
                    <th className="px-4 py-3.5 text-left font-medium text-greenish">Rank</th>
                    <th className="px-4 py-3.5 text-left font-medium text-greenish">Name</th>
                    <th className="px-4 py-3.5 text-right font-medium text-greenish">Value</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr
                        key={`${row.rank}-${row.name}`}
                        className={index !== rows.length - 1 ? "border-b border-light-grey-300" : undefined}
                    >
                        <td className="px-4 py-4 font-medium text-midnight-blue">{row.rank}</td>
                        <td className="px-4 py-4 text-midnight-blue">{row.name}</td>
                        <td className="px-4 py-4 text-right text-midnight-blue">
                            {row.value} <span className="text-greenish">{row.suffix}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}