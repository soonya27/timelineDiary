import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";

export default function CalendarPage() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const handleTodayClick = () => {
    setActiveStartDate(today);
    setDate(today);
  };

  console.log(date);
  const mark = ["2024-11-18", "2022-02-02", "2022-02-10"];

  return (
    <section>
      <Calendar
        onChange={handleDateChange}
        value={date}
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        className="w-full"
        // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
        activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
        tileContent={({ date, view }) => {
          let html = [];
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="dot"></div>);
          }
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">{html}</div>
            </>
          );
        }}
      />
      <button onClick={handleTodayClick}>오늘</button>
    </section>
  );
}
