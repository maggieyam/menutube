import React from "react";
import Slot from "./slot";
import "./calendar.css";

const day = (dayName) => {
  return (
    <li key={dayName}>
      <h3 className="dayname">{dayName}</h3>
      <div className="slots">
        <Slot className={`${dayName}-1`} />
        <Slot className={`${dayName}-2`} />
        <Slot className={`${dayName}-3`} />
      </div>
    </li>
  );
};

class Calendar extends React.Component{

  constructor(props){
    super(props)
    this.state = {checked: false};
  }

  calText(){
    return this.state.checked ? "Close" : "Open"
  }
  
  render() {
    
    return (
      <>
      <button id="cal-checkbox" onClick={() => this.setState({checked: !this.state.checked})}>{this.calText()} Calendar</button>
      
      {(!this.state.checked) ? null : ( 
          <div className="calendar-wrapper">
            <ul className="calendar">
              {[
                "Sun",
                "Mon",
                "Tues",
                "Wed",
                "Thurs",
                "Fri",
                "Sat",
              ].map((dayName) => {
                return day(dayName);
              })}
            </ul>
          </div>
          )}
      </>
      );
    };
  }

  export default Calendar;
