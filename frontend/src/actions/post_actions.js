import * as APIUtil from '../util/post_api_util';

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
      err => dispatch(receivePostErrors(err.response.data))
    )
)

export const fetchPosts = () => dispatch => {
  return APIUtil.fetchPosts().then(
    posts => dispatch(receivePosts(posts.data))
  )
  }

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
    
