import * as APIUtil from '../util/session_api_util';
// on a successful login close the modal form
import { closeModal } from '../actions/modal_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';


export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

// to clear errors if user leaves the session form
export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
})


export const loginUser = user => dispatch => (
  APIUtil.login(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
    dispatch(closeModal());
    dispatch(clearErrors());
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
)

export const signupUser = user => dispatch => (
  API.signup(user).then(() => {
    dispatch(loginUser(user))
  }, err => {
    dispatch(receiveErrors(err.response.data))
  }
  )
);


export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser())
}