import { RECEIVE_SESSION_ERRORS,
         CLEAR_SESSION_ERRORS,
         RECEIVE_USER_LOGIN } from '../actions/session_actions';

// Displaying errors works well as key-value pairs
export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return {};
    case RECEIVE_USER_LOGIN:
      return {};
    default:
      return state;
  }
}