import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_NEW_POST,
  REMOVE_POST,
  RECEIVE_USER_POSTS,
} from "../actions/post_actions";

import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_NEW_POST:
      return { ...state, [action.post.data._id]: action.post.data };
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      if (!action.post) return state;
      return { ...state, [action.post._id]: action.post };
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      nextState[action.postId]["comments"].push(action.comment);
      return nextState;
    case REMOVE_COMMENT:
      nextState = merge({}, state);

      let comments = nextState[action.postId]["comments"].slice();
      let idx = comments.findIndex(
        (comment) => comment._id === action.commentId
      );
      comments.splice(idx, 1);

      nextState[action.postId]["comments"] = comments;
      return nextState;
    case REMOVE_POST:
      nextState = Object.assign({}, state);
      delete nextState[action.postId.data];

      return nextState;
    default:
      return state;
  }
};
