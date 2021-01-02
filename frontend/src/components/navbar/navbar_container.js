import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { fetchCalendar, toggleCalendar } from '../../actions/calendar_actions';
const mStP = state => ({
  currentUser: state.session,
  openCalendar: state.ui.openCalendar
})

const mDtP = dispatch => ({
  logout: () => dispatch(logout()),
  toggleCalendar: () => dispatch(toggleCalendar()),
  openModal: modalType => dispatch(openModal(modalType))
})

export default connect(mStP, mDtP)(NavBar);