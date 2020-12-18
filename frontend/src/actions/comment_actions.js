import axios from 'axios';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';



export const receiveComment = (postId, comment) => ({
  type: RECEIVE_COMMENT,
  postId,
  comment: comment.data
})

export const removeComment = (postId, commentId) => ({
  type: REMOVE_COMMENT,
  postId,
  commentId
})

export const createComment = (body, postId) => dispatch => {
  return axios.post('/api/comments/create', {body, postId})
    .then(comment => {dispatch(receiveComment(postId, comment))})
}


export const deleteComment = (postId, commentId) => dispatch => {
  return axios.delete(`/api/comments/delete/${commentId}?postId=${postId}`).then(
    () => { dispatch(removeComment(postId, commentId)) }
  )
}