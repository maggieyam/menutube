import {UPDATE_FILTER, CLEAR_FILTER} from '../actions/filter_actions';

export default (state = null, action) => {
  switch(action.type){
    case UPDATE_FILTER: 
      return action.filter;
    case CLEAR_FILTER:
      return null;
    default:
      return state;
  }
}