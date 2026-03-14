"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Icons from "@/app/components/common/Icons";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  onChangeAction?: (value: string) => void;
};

export default function Select({ options, value, defaultValue, placeholder = "Select option", label, className = "", onChangeAction, }: SelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentValue = value ?? internalValue;

  const selectedOption = useMemo(
    () => options.find((option) => option.value === currentValue),
    [options, currentValue]
  );

  const showDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setMounted(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOpen(true);
      });
    });
  };

  const hideDropdown = () => {
    setOpen(false);

    closeTimeoutRef.current = setTimeout(() => {
      setMounted(false);
    }, 180);
  };

  const toggleDropdown = () => {
    if (mounted && open) {
      hideDropdown();
      return;
    }

    showDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node) && mounted) {
        hideDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [mounted]);

  const handleSelect = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onChangeAction?.(nextValue);
    hideDropdown();
  };

  return (
    <div className={`space-y-1.25 ${className}`.trim()}>
      {label ? (
        <span className="block text-midnight-blue text-medium text-sm leading-5 tracking-half cursor-default">
          {label}
        </span>
      ) : null}

      <div ref={selectRef} className="select">
        <button
          type="button"
          className={`select-box ${mounted && open ? "is-open" : ""}`}
          onClick={toggleDropdown}
        >
          <span className="block truncate">{selectedOption?.label ?? placeholder}</span>
          <Icons
            icon="select"
            className={`transition-transform duration-200 ${mounted && open ? "rotate-180" : ""}`}
          />
        </button>

        {mounted ? (
          <div className={`select-dropdown ${open ? "is-open" : "is-closed"}`}>
            {options.map((option) => {
              const isActive = option.value === currentValue;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`select-option ${isActive ? "active" : ""}`}
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}