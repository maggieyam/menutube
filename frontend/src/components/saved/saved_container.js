import { connect } from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';
import SavedIndex from './saved_index';

const mStP = state => ({
  posts: Object.values(state.entities.posts)
})

const mDtP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mStP, mDtP)(SavedIndex);



