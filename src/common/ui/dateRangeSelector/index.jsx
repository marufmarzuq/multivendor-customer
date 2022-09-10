import React, { useState } from "react";
import "./dateRangeSelector.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const DateRangeSelector = ({startDate , endDate, setStartDate, setEndDate }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="tata-start-date"
      endDate={endDate}
      endDateId="tata-end-date"
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      numberOfMonths={1}
      showClearDates={true}
      isOutsideRange={() => false}
    />
  );
};

export default DateRangeSelector;
