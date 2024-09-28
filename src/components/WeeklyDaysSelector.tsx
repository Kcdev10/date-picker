// app/date-picker/components/WeeklyDaysSelector.tsx
import React from "react";
import { useDatePicker } from "./DatePickerContext";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeeklyDaysSelector: React.FC = () => {
  const { selectedDays, setSelectedDays, recurrence } = useDatePicker();

  // console.log(selectedDays);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <>
      {recurrence === "Weekly" && (
        <div className="space-x-2">
          <h2 className="text-lg font-bold">Recurrence Options</h2>
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`p-2 border rounded ${
                selectedDays.includes(day) ? "bg-blue-500 text-white" : ""
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default WeeklyDaysSelector;
