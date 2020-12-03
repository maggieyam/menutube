import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mStP = state => ({
  currentUser: state.session
})

const mDtP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modalType => dispatch(openModal(modalType))
})

export default connect(mStP, mDtP)(NavBar);