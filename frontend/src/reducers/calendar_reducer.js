import {RECEIVE_CALENDAR} from '../actions/calendar_actions'

export default (state={}, action) => {
  switch (action.type) {
    case RECEIVE_CALENDAR: 
      return action.calendar;
    default:
      return state;
  }
}