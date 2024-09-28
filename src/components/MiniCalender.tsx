"use client";

// app/date-picker/components/MiniCalendar.tsx
import React, { useEffect, useState } from "react";
import { useDatePicker } from "./DatePickerContext";

const MiniCalendar: React.FC = () => {
  const { startDate, endDate, recurrence, interval, selectedDays, nthDay } =
    useDatePicker();
  const [dates, setDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const generateRecurringDates = () => {
      const start = new Date(startDate!);
      const end = endDate
        ? new Date(endDate)
        : new Date(start.getFullYear(), start.getMonth() + 1, 0);

      const tempDates: Date[] = [];

      if (recurrence === "Daily") {
        for (let d = new Date(start); d <= end; ) {
          tempDates.push(new Date(d));
          d.setDate(d.getDate() + interval);
        }
      } else if (recurrence === "Weekly") {
        for (
          let d = new Date(start);
          d <= end;
          d.setDate(d.getDate() + 7 * interval)
        ) {
          // For each week, loop through the selected days
          if (selectedDays.length > 0) {
            selectedDays.forEach((day) => {
              const targetDate = new Date(d);

              // Find the offset for the selected day of the week
              const dayIndex = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].indexOf(day);
              const dayOffset = (7 + dayIndex - targetDate.getDay()) % 7; // Ensure offset stays within week

              // Calculate the new date for the selected day
              const recurringDate = new Date(targetDate);
              recurringDate.setDate(targetDate.getDate() + dayOffset);

              // Only push the date if it's within the start-end range
              if (recurringDate >= start && recurringDate <= end) {
                tempDates.push(recurringDate);
              }
            });
          } else {
            tempDates.push(new Date(d));
          }
        }
      } else if (recurrence === "Monthly") {
        for (
          let d = new Date(start);
          d <= end;
          d.setMonth(d.getMonth() + interval)
        ) {
          // If nthDay is provided (e.g., "2nd Tuesday")
          if (nthDay && nthDay.nth && nthDay.weekday !== undefined) {
            const targetDate = getNthWeekday(
              d.getFullYear(),
              d.getMonth(),
              nthDay.nth,
              nthDay.weekday!
            );

            // If the computed Nth weekday is within the range
            if (targetDate && targetDate <= end) {
              tempDates.push(new Date(targetDate));
            }
          }
          // If nthDay is not provided, just use the specific day of the month
          else {
            const specificDay = new Date(d);
            if (typeof nthDay === "number") {
              specificDay.setDate(nthDay);
            }

            // Ensure the specific date is valid and within the range
            if (specificDay <= end) {
              tempDates.push(new Date(specificDay));
            }
          }
        }
      } else if (recurrence === "Yearly") {
        for (
          let d = new Date(start);
          d <= end;
          d.setFullYear(d.getFullYear() + interval)
        ) {
          tempDates.push(d);
        }
      }

      // Remove duplicates and sort the dates
      // const uniqueDates = Array.from(
      //   new Set(tempDates.map((date) => date.toDateString()))
      // )
      //   .map((dateString) => new Date(dateString))
      //   .sort((a, b) => a.getTime() - b.getTime());

      setDates(tempDates);
    };

    if (startDate) {
      generateRecurringDates();
    }
  }, [startDate, endDate, recurrence, interval, selectedDays, nthDay]);

  // Helper function to get the nth weekday of the month
  const getNthWeekday = (
    year: number,
    month: number,
    nth: number,
    weekday: number
  ) => {
    let count = 0;
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() !== month) break; // Break if the month changes
      if (date.getDay() === weekday) {
        count++;
        if (count === nth) {
          return date;
        }
      }
    }
    return new Date(year, month, 0); // Return the last day of the month if not found
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
    setCurrentMonth(nextMonth);
  };

  const renderCalendar = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay(); // Day of the week of the first day of the month
    const calendar = [];
    const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    // Add empty cells for days of the week before the first day of the month
    for (let i = 0; i < 7; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="p-2 border rounded capitalize">
          {weeks[i]}
        </div>
      );
    }

    for (let i = 0; i < startDay; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="p-2 border rounded"></div>
      );
    }

    // Add actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = dates.some(
        (selectedDate) => selectedDate.toDateString() === date.toDateString()
      );
      calendar.push(
        <div
          key={day}
          className={`p-2 border rounded ${
            isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          {day}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1">{calendar}</div>;
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">Selected Dates Preview</h2>

      <div className="flex justify-between mb-2">
        <button onClick={handlePrevMonth} className="px-2 py-1 border rounded">
          Prev
        </button>
        <h3 className="font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </h3>
        <button onClick={handleNextMonth} className="px-2 py-1 border rounded">
          Next
        </button>
      </div>

      {renderCalendar()}
    </div>
  );
};

export default MiniCalendar;
