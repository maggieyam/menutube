import * as APIUtil from '../util/post_api_util';
import { receiveUser } from './user_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
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
      post => dispatch(receiveNewPost(post)),
      err => dispatch(receivePostErrors(err.response.data))
    )
)

export const fetchPosts = () => dispatch => {
  return APIUtil.fetchPosts().then(
    posts => dispatch(receivePosts(posts.data))
  )
}

// export const fetchSavedPosts = userId => dispatch => {
//   return APIUtil.fetchSavedPosts(userId).then(
//     posts => dispatch(receivePosts(posts.data))
//   )
// }

export const fetchUserPosts = userId => dispatch => {
  return APIUtil.fetchUserPosts(userId).then(
    posts => dispatch(receivePosts(posts.data))
  )
}

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId).then(
    post => dispatch(receivePost(post.data))
  )
)

export const savePost = (postId, body) => dispatch => {
  return APIUtil.savePost(postId, body).then(
    user => {
      dispatch(receiveUser(user))
    }
  )
}
    
