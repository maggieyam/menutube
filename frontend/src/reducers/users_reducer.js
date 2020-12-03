import { RECEIVE_POSTS } from '../actions/post_actions';

export default (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts.users;
    default :
      return state;
  }
}
