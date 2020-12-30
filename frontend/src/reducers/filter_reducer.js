import {UPDATE_FILTER, CLEAR_FILTER} from '../actions/filter_actions';
import { merge, mergeWith } from 'lodash';

export default (state = {}, action) => {
  switch(action.type){
    case UPDATE_FILTER: 
      console.log(merge({}, {a: [2, 1]}, {a: []}))
      let copy = merge({}, state);
      let newState = mergeWith(copy, action.filter, customizer)
      return newState;
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
}

const customizer = (oldVal, newVal) => {
  return newVal
}