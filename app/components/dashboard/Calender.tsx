"use client";
import React, { useState, useRef, useEffect } from "react";
import Icons from "../common/Icons";
import Heading from "../ui/Heading";
import DateNotesModal from "./DateNotesModal";

interface DateNote {
  date: string
  note: string
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [dateNotes, setDateNotes] = useState<DateNote[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  // Get first day of month
  const firstDay = new Date(year, month, 1).getDay();

  // Get total days in month
  const totalDays = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const handleDateChange = (newYear: number, newMonth: number) => {
    setCurrentDate(new Date(newYear, newMonth, 1));
    setIsDropdownOpen(false);
  };

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    setIsNotesModalOpen(true);
  };

  const getDateKey = (date: number) => {
    return `${year}-${month + 1}-${date}`;
  };

  const getDateNote = (date: number) => {
    const dateKey = getDateKey(date);
    return dateNotes.find(note => note.date === dateKey);
  };

  const handleSaveNote = (dateKey: string, note: string) => {
    setDateNotes(prev => {
      const existing = prev.find(n => n.date === dateKey);
      if (existing) {
        return prev.map(n => n.date === dateKey ? { date: dateKey, note } : n);
      }
      return [...prev, { date: dateKey, note }];
    });
    console.log('Note saved:', { date: dateKey, note });
  };

  const handleDeleteNote = (dateKey: string) => {
    setDateNotes(prev => prev.filter(n => n.date !== dateKey));
    console.log('Note deleted:', dateKey);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate year options (current year ± 5 years)
  const yearRange = Array.from({ length: 11 }, (_, i) => year - 5 + i);

  // Generate all month-year combinations
  const dateOptions = yearRange.flatMap(y =>
    monthNames.map((_, m) => ({ year: y, month: m }))
  );

  // Create calendar array
  const dates = [];

  // Empty spaces before month start
  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    dates.push(i);
  }

  return (
    <div className="bg-white p-4 rounded-2xl w-full  sm:w-[50%]">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* <h2 className="font-mediun text-black text-xl -tracking-[0.64px] leading-120">Calendar</h2> */}
        <Heading>Calendar</Heading>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 font-semibold cursor-pointer focus:outline-none  min-[1380px]:text-xl text-lg leading-150"
          >
            <span>{monthNames[month]} {year}</span>
            <Icons icon="calenderDropDown" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {dateOptions.map(({ year: y, month: m }) => (
                <button
                  key={`${y}-${m}`}
                  onClick={() => handleDateChange(y, m)}
                  className={`w-full text-left px-4 py-2 cursor-pointer  ${y === year && m === month ? 'bg-dark-green text-white  ' : 'hover:bg-gray-100 '
                    }`}
                >
                  {monthNames[m]} {y}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border border-light-grey rounded-[10px] p-2 mb-2.5 h-[245px] overflow-auto custom-scroll">

        {/* Week Days */}
        <div className="grid grid-cols-7 text-center text-gray-400 pb-2 ">
          {days.map((d, i) => (
            <p key={i} className="text-light-grey-400  font-normal text-base leading-150">{d}</p>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {dates.map((date, i) => {
            const isToday =
              date === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            const isSelected = date === selectedDate && date !== null;
            const hasNote = date ? getDateNote(date) : null;

            return (
              <div
                key={i}
                onClick={() => date && handleDateClick(date)}
                className={`w-8 h-8 flex items-center text-center justify-center rounded-full transition-colors mx-auto relative
                  ${date ? "cursor-pointer" : ""}
                  ${isToday ? "bg-dark-green text-white" : "text-graphite"}
                  ${isSelected && !isToday ? "border border-grey" : ""}
                  ${date && !isToday ? "hover:bg-gray-200" : ""}
                `}
              >
                <p className="font-normal text-base leading-150">
                  {date}
                </p>
                {hasNote && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green rounded-full" title="Has note" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <DateNotesModal
        key={`${selectedDate ? getDateKey(selectedDate) : 'modal'}-${selectedDate ? getDateNote(selectedDate)?.note || 'empty' : 'empty'}`}
        isOpen={isNotesModalOpen}
        onClose={() => setIsNotesModalOpen(false)}
        selectedDate={selectedDate ? getDateKey(selectedDate) : ''}
        existingNote={selectedDate ? getDateNote(selectedDate)?.note || '' : ''}
        onSave={handleSaveNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default Calendar;