import { RECEIVE_POST,
         RECEIVE_POSTS } from '../actions/post_actions';

export default (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      return {...state, [action.post.data._id]: action.post.data}
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}