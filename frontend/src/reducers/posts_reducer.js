import { RECEIVE_POST,
         RECEIVE_POSTS } from '../actions/post_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      return {...state, [action.post._id]: action.post}
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}