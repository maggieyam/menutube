<<<<<<< HEAD
import { RECEIVE_USER_POSTS } from '../actions/post_actions';
=======
>>>>>>> main
import { RECEIVE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
<<<<<<< HEAD
    case RECEIVE_USER_POSTS:
      return action.posts.userId;
=======
>>>>>>> main
    case RECEIVE_USER:
      return {...state, [action.user.data._id]: action.user.data};
    default :
      return state;
  }
}
