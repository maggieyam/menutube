import React from "react";
import Slot from "./slot";
import "./calendar.css";
import { connect } from 'react-redux';
import { fetchCalendar, toggleCalendar } from '../../actions/calendar_actions';

class Calendar extends React.Component{

  componentDidMount(){
    this.props.fetchCalendar(this.props.userId)
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
      {(!this.props.openCalendar) ? null : ( 
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
    calendar: state.entities.calendar,
    openCalendar: state.ui.openCalendar
  })

  const mDtP = dispatch => ({
    fetchCalendar: userId => dispatch(fetchCalendar(userId)),
    
  })

  export default connect(mStP, mDtP)(Calendar);
