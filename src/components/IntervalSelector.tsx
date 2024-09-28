// app/date-picker/components/IntervalSelector.tsx
import React from "react";
import { useDatePicker } from "./DatePickerContext";

const IntervalSelector: React.FC = () => {
  const { interval, setInterval, recurrence } = useDatePicker();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(parseInt(e.target.value));
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="interval" className="font-medium">
        Repeat every
      </label>
      <input
        id="interval"
        type="number"
        min="1"
        value={interval}
        onChange={handleChange}
        className="w-16 p-1 border rounded"
      />
      <span>
        {recurrence === "Daily"
          ? "days"
          : recurrence === "Weekly"
          ? "weeks"
          : recurrence === "Monthly"
          ? "months"
          : "years"}
      </span>
    </div>
  );
};

export default IntervalSelector;
