import axios from 'axios';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const getSaved = () => dispatch => {
  return axios.get('/api/users/current').then(
    user => dispatch(receiveUser(user))
  )
}