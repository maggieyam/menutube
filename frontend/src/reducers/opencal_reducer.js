import { TOGGLE_CALENDAR } from '../actions/calendar_actions';

export default (state = false, action) => {
  switch(action.type) {
    case TOGGLE_CALENDAR:
      return !state;
    default:
      return state;
  }
}