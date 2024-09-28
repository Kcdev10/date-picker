import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import MiniCalendar from "./MiniCalender";
import DateSelector from "./DateSelection";
import IntervalSelector from "./IntervalSelector";
import DateRangePicker from "./DateSelection";
import WeeklyDaysSelector from "./WeeklyDaysSelector";
import NthDaySelector from "./NthDaySelector";

const DatePicker: React.FC = () => {
  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Custom Recurrence Date Picker</h1>
        <RecurrenceOptions />
        <IntervalSelector />
        <DateRangePicker />
        <div>
          <WeeklyDaysSelector />
          <NthDaySelector />
        </div>
        <MiniCalendar />
      </div>
    </div>
  );
};

export default DatePicker;
