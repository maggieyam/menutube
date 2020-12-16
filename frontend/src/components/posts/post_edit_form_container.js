import { connect } from 'react-redux';
import { editPost, clearPostErrors } from '../../actions/post_actions';
import { loadingOn, loadingOff } from '../../actions/loading_actions';
import { fetchTags } from '../../actions/tag_actions';
import EditPostForm from './post_edit_form';

const mStP = (state, ownProps) => ({
  currentUser: state.session.userInfo,
  errors: state.errors.post,
  loading: state.ui.loading,
  diet: state.entities.tags[0],
  ingredients: state.entities.tags[1],
  nutrition: state.entities.tags[2],
  post: state.entities.posts[ownProps.match.params.id]
})

const mDtP = dispatch => ({
  editPost: (postId, newData) => dispatch(editPost(postId, newData)),
  loadingOn: () => dispatch(loadingOn()),
  loadingOff: () => dispatch(loadingOff()),
  clearPostErrors: () => dispatch(clearPostErrors()),
  fetchTags: () => dispatch(fetchTags())
})

export default connect(mStP, mDtP)(EditPostForm);