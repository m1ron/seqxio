import React from "react";

type MenuItem = {
    label: string;
    href: string;
    active?: boolean;
};

type MenuProps = {
    items: MenuItem[];
    className?: string;
};

export default function Menu({ items, className = "" }: MenuProps) {
    return (
        <ul className={`text-sm leading-5 text-charcoal-grey font-medium space-y-1 ${className}`.trim()}>
            {items.map((item) => (
                <li key={item.label}>
                    <a
                        className={`py-2 px-3 block rounded-md transition-colors duration-200 ${
                            item.active
                                ? "bg-light-grey-300 text-gunmetal"
                                : "hover:bg-cool-grey"
                        }`}
                        href={item.href}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}