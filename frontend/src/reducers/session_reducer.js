import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const defaultState = { 
  isAuthenticated: false,
  userInfo: {}
}

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        userInfo: null
      }
    default:
      return state;
  }
}