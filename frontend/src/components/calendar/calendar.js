import React from "react";
import Slot from "./slot";
import "./calendar.css";

class Calendar extends React.Component{

  constructor(props){
    super(props)
    this.state = {checked: false};
  }

  calText(){
    return this.state.checked ? "Close" : "Open"
  }
  
  render() {

    const day = (dayName) => {
      return (
        <li key={dayName}>
          <h3 className="dayname">{dayName}</h3>
          <div className="slots">
            <Slot className={`${dayName}-1`} postId="5fda90942d3df9586be71591" savedUrl="https://menu-tube-dev.s3.amazonaws.com/1280.mp4" />
            <Slot className={`${dayName}-2`} />
            <Slot className={`${dayName}-3`} />
          </div>
        </li>
      );
    };


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
