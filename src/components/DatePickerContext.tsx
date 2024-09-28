"use client";
// context/DatePickerContext.tsx
// context/DatePickerContext.tsx
// app/date-picker/context/DatePickerContext.tsx
import React, { createContext, useContext, useState } from "react";

interface NthDay {
  nth: number;
  weekday: number | null;
}

interface DatePickerContextProps {
  recurrence: string;
  setRecurrence: (recurrence: string) => void;
  interval: number;
  setInterval: (interval: number) => void;
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
  nthDay: NthDay | null;
  setNthDay: (nthDay: NthDay | null) => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

const DatePickerContext = createContext<DatePickerContextProps | undefined>(
  undefined
);

export const useDatePicker = () => {
  const context = useContext(DatePickerContext);
  if (!context)
    throw new Error("useDatePicker must be used within DatePickerProvider");
  return context;
};

export const DatePickerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [recurrence, setRecurrence] = useState("Daily");
  const [interval, setInterval] = useState(1);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [nthDay, setNthDay] = useState<NthDay | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
    <DatePickerContext.Provider
      value={{
        recurrence,
        setRecurrence,
        interval,
        setInterval,
        selectedDays,
        setSelectedDays,
        nthDay,
        setNthDay,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
