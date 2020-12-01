import { RECEIVE_USER_LOGOUT,
         RECEIVE_CURRENT_USER  } from '../actions/session_actions';

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
    case RECEIVE_CURRENT_USER:
        return {
          isAuthenticated: !!action.currentUser,
          userInfo: action.currentUser
        }
    default:
      return state;
  }
}