import axios from 'axios';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const createComment = (body, postId) => dispatch => {
  return axios.post('/api/comments/create', {body, postId})
    .then(comment => {
      dispatch(receiveComment(postId, comment))
    })
}

export const receiveComment = (postId, comment) => ({
  type: RECEIVE_COMMENT,
  postId,
  comment: comment.data
})

window.createComment = createComment;