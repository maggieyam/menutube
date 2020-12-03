import React from "react";
import Slot from "./slot";
import "./calendar.css";

const day = (dayName) => {
  return (
    <li key={dayName}>
      <h3>{dayName}</h3>
      <Slot className={`${dayName}-1`} />
      <Slot className={`${dayName}-2`} />
      <Slot className={`${dayName}-3`} />
    </li>
  );
};

export default () => {
  return (
    <div className="calendar-wrapper">
      <ul className="calendar">
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wedndesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((dayName) => {
          return day(dayName);
        })}
      </ul>
    </div>
  );
};
