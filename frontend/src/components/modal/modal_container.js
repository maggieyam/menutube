import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Modal from './modal';

const mStP = state => ({
  modalType: state.ui.modal
})

const mDtP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mStP, mDtP)(Modal);