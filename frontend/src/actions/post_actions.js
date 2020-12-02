import * as APIUtil from './post_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS';


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
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
          err => receivePostErrors(err.response.data)
        )
)
    