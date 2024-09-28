"use client";
// app/date-picker/components/DateRangePicker.tsx
import React from "react";
import { useDatePicker } from "./DatePickerContext";

const DateRangePicker: React.FC = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePicker();

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex gap-4 items-center">
        <label>End Date (Optional)</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
