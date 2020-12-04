import {LOADING_ON,
        LOADING_OFF} from '../actions/loading_actions';

export default (state = false, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case LOADING_ON:
      return true;
    case LOADING_OFF:
      return false;
    default:
      return state;
  }
}
  