import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import {loadingOn, loadingOff} from '../../actions/loading_actions';
import { fetchTags } from '../../actions/tag_actions';
import CreatePostForm from './create_post_form';

const mStP = state => ({
  currentUser: state.session.userInfo,
  errors: state.errors.post,
  loading: state.ui.loading,
  tags: state.entities.tags
})

const mDtP = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  loadingOn: () => dispatch(loadingOn()),
  loadingOff: () => dispatch(loadingOff()),
  fetchTags: () => dispatch(fetchTags())
})

export default connect(mStP, mDtP)(CreatePostForm);