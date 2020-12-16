import { RECEIVE_USER_LOGOUT,
         RECEIVE_CURRENT_USER  } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

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
    case RECEIVE_USER:
      debugger
      if (action.user.data._id === state.userInfo.id){
        let newState = {...state};
        newState.userInfo.saved = action.user.data.saved;
        return newState;
      }
      else {
        return state;
      }
    default:
      return state;
  }
}