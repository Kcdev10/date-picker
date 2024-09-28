"use client";
// app/date-picker/components/RecurrenceOptions.tsx
// app/date-picker/components/RecurrenceOptions.tsx
import React from "react";
import { useDatePicker } from "./DatePickerContext";

const RecurrenceOptions: React.FC = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  return (
    <div className="space-x-4">
      {["Daily", "Weekly", "Monthly", "Yearly"].map((option) => (
        <button
          key={option}
          onClick={() => setRecurrence(option)}
          className={`p-2 border rounded ${
            recurrence === option ? "bg-blue-500 text-white" : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
