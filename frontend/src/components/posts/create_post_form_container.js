import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mStP = state => ({
  currentUser: state.session.userInfo,
  errors: state.errors.post
})

const mDtP = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

export default connect(mStP, mDtP)(CreatePostForm);