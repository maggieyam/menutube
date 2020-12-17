import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_NEW_POST,
  REMOVE_POST,
} from "../actions/post_actions";
import { RECEIVE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_NEW_POST:
      return { ...state, [action.post.data._id]: action.post.data };
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return { ...state, [action.post._id]: action.post };
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state)
      nextState[action.postId]["comments"].push(action.comment)
      return nextState;
    case REMOVE_POST:
      nextState = Object.assign({}, state);
      delete nextState[action.postId.data];

      return nextState;
    default:
      return state;
  }
};
