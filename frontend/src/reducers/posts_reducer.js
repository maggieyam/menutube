import { RECEIVE_POST,
         RECEIVE_POSTS,
         RECEIVE_NEW_POST } from '../actions/post_actions';

export default (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEW_POST:
      return {...state, [action.post.data._id]: action.post.data}
    case RECEIVE_POSTS:
      return action.posts.posts;
    case RECEIVE_POST:
      return {...state, [action.post._id]: action.post}
    default:
      return state;
  }

}