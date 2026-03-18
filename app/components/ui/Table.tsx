import React from "react";

type Column<T> = {
  header: string;
  accessor?: keyof T;
  className?: string;
  render?: (row: T) => React.ReactNode;
};

type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
    className?: string;
};

export default function Table<T>({ columns, data, className = "" }: TableProps<T>) {
    return (
        <div className={`overflow-hidden rounded-lg border border-light-grey-300 bg-white ${className}`.trim()}>
            <div className="px-4 md:px-6 -mx-4 md:-mx-6 overflow-x-auto scrollbar-hidden">
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                    <tr>
                        {columns.map((col, index) => {
                            const isLast = index === columns.length - 1;

                            return (
                                <th
                                    key={col.header}
                                    className={`px-4 py-3.5 text-sm leading-5 font-medium text-nowrap text-greenish ${
                                        isLast ? "text-right" : "text-left"
                                    } ${col.className ?? ""}`}
                                >
                                    {col.header}
                                </th>
                            );
                        })}
                    </tr>
                    </thead>

                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-lighter focus:bg-lighter transition-colors duration-200">
                            {columns.map((col, colIndex) => {
                                const content = col.render
                                    ? col.render(row)
                                    : col.accessor
                                        ? (row[col.accessor] as React.ReactNode)
                                        : null;

                                return (
                                    <td
                                        key={colIndex}
                                        className={`p-4 border-t border-light-grey-300 text-sm leading-5 text-midnight-blue ${col.className ?? ""}`}
                                    >
                                        {content}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}