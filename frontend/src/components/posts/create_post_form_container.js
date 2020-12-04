import { connect } from 'react-redux';
import { createPost, clearPostErrors } from '../../actions/post_actions';
import {loadingOn, loadingOff} from '../../actions/loading_actions';
import { fetchTags } from '../../actions/tag_actions';
import CreatePostForm from './create_post_form';

const mStP = state => ({
  currentUser: state.session.userInfo,
  errors: state.errors.post,
  loading: state.ui.loading,
  diet: state.entities.tags[0],
  ingredients: state.entities.tags[1],
  nutrition: state.entities.tags[2],
})

const mDtP = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  loadingOn: () => dispatch(loadingOn()),
  loadingOff: () => dispatch(loadingOff()),
  clearPostErrors: () => dispatch(clearPostErrors()),
  fetchTags: () => dispatch(fetchTags())
})

export default connect(mStP, mDtP)(CreatePostForm);