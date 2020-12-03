import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mStP = state => ({
  errors: state.errors.session
})

const mDtP = dispatch => ({
  signupUser: user => dispatch(signupUser(user))
})

export default connect(mStP, mDtP)(SignupForm)