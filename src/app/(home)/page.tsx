"use client";
import React, { useState } from "react";
import DatePicker from "../../components/DatePicker";
import { DatePickerProvider } from "../../components/DatePickerContext";

const Home: React.FC = () => {
  return (
    <DatePickerProvider>
      <DatePicker />
    </DatePickerProvider>
  );
};

export default Home;
