import { connect } from 'react-redux';

import SavedIndex from './saved_index';

const mStP = state => {
  let userId = state.session.userInfo.id;
  let currentUser = state.entities.users[userId];
  let posts = [];
  currentUser.saved.forEach(id => posts.push(state.entities.posts[id]))
  return {
    userId,
    posts
  }
}

// const mDtP = dispatch => ({
//   fetchSavedPosts: userId => dispatch(fetchSavedPosts(userId))
// })

export default connect(mStP)(SavedIndex);



