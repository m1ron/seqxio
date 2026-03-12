"use client";

import React, { useState } from "react";

type TabOption = {
  label: string;
  value: string;
};

type TabsProps = {
  tabs: TabOption[];
  activeTab?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const Tabs = ({ tabs, activeTab, onChange, className = "" }: TabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.value);

  const currentActiveTab = activeTab ?? internalActiveTab;

  const handleTabClick = (value: string) => {
    if (activeTab === undefined) {
      setInternalActiveTab(value);
    }

    onChange?.(value);
  };

  return (
    <ul className={`tabs ${className}`.trim()}>
      {tabs.map((tab) => (
        <li
          key={tab.value}
          className={currentActiveTab === tab.value ? "active" : ""}
        >
          <button
            type="button"
            onClick={() => handleTabClick(tab.value)}
            className="py-2.5 px-3 block cursor-pointer"
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;