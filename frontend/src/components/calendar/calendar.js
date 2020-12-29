import React from "react";
import Slot from "./slot";
import "./calendar.css";
import { connect } from 'react-redux';
import { fetchCalendar } from '../../actions/calendar_actions';

class Calendar extends React.Component{

  constructor(props){
    super(props)
    this.state = {checked: false};
  }

  componentDidMount(){
    this.props.fetchCalendar(this.props.userId)
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
            <Slot className={`${dayName}-0`} calId={this.props.calendar._id} />
            <Slot className={`${dayName}-1`} calId={this.props.calendar._id}/>
            <Slot className={`${dayName}-2`} calId={this.props.calendar._id}/>
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
                "Tue",
                "Wed",
                "Thur",
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

  const mStP = state => ({
    userId: state.session.userInfo.id,
    calendar: state.entities.calendar
  })

  const mDtP = dispatch => ({
    fetchCalendar: userId => dispatch(fetchCalendar(userId))
  })

  export default connect(mStP, mDtP)(Calendar);
