"use client";

import React, { useState } from "react";
import { cn } from "@/app/utils/helper";

type TabOption = {
  label: string;
  value: string;
};

type TabsProps = {
  tabs: TabOption[];
  activeTab?: string;
  onChangeAction?: (value: string) => void;
  className?: string;
};

const Tabs = ({ tabs, activeTab, onChangeAction, className }: TabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.value);

  const currentActiveTab = activeTab ?? internalActiveTab;

  const handleTabClick = (value: string) => {
    if (activeTab === undefined) {
      setInternalActiveTab(value);
    }

    onChangeAction?.(value);
  };

  return (
    <ul
      className={cn(
        "p-1 inline-flex items-stretch gap-1 text-sm leading-5 tracking-minimal font-medium text-greenish bg-cool-mist rounded-md",
        className
      )}
    >
      {tabs.map((tab) => (
        <li
          key={tab.value}
          className={cn(
            "rounded-md transition-all duration-200 ease-out",
            currentActiveTab === tab.value && "bg-white text-midnight-blue shadow-sm"
          )}
        >
          <button
            type="button"
            onClick={() => handleTabClick(tab.value)}
            className="py-2.5 px-3 block transition-colors duration-200 ease-out cursor-pointer"
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;