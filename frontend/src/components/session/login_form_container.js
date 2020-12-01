import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import LoginForm from './login_form';

const mStP = state => ({
  errors: state.errors.session
})

const mDtP = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
})

export default connect(mStP, mDtP)(LoginForm)