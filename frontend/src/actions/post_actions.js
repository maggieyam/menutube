import * as APIUtil from './post_actions';
import { receivePostErrors } from "./session_actions";

export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS,
})


export const createPost = post => dispatch => (
 
    APIUtil.createPost(post).then(
      post => dispatch(receivePost(post)),
      err => receiveErrors(err.response.data)
    )
)

