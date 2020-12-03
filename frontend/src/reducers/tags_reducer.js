import { RECEIVE_TAGS } from '../actions/tag_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      return action.tags.data;
    default:
      return state;
  }
}