// app/date-picker/components/NthDaySelector.tsx
import React from "react";
import { useDatePicker } from "./DatePickerContext";

const nthOptions = [1, 2, 3, 4, 5];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const NthDaySelector: React.FC = () => {
  const { nthDay, setNthDay, recurrence } = useDatePicker();

  const handleNthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [nth, day] = e.target.value.split("-");
    setNthDay({ nth: parseInt(nth, 10), weekday: daysOfWeek.indexOf(day) });
  };

  return (
    <>
      {recurrence === "Monthly" && (
        <div className="flex items-center space-x-2 mt-2">
          <h2 className="text-lg font-bold">Recurrence Options: </h2>

          <label className="font-medium">On the</label>
          <select
            onChange={handleNthChange}
            value={nthDay ? `${nthDay.nth}-${nthDay.weekday}` : ""}
            className="border p-1 rounded"
          >
            {nthOptions.map((nth) =>
              daysOfWeek.map((day) => (
                <option key={`${nth}-${day}`} value={`${nth}-${day}`}>
                  {nth} {day}
                </option>
              ))
            )}
          </select>
          <span>of the month</span>
        </div>
      )}
    </>
  );
};

export default NthDaySelector;
