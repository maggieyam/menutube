import { RECEIVE_POST } from '../actions/post_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      return {...state, [action.post.id]: action.post}
    default:
      return state;
  }
}