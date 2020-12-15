import { RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts.users;
    case RECEIVE_USER:
      return {...state, [action.user.data._id]: action.user.data};
    default :
      return state;
  }
}
