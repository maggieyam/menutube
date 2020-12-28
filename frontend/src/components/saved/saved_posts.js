import { connect } from 'react-redux';
import React from 'react';
import {fetchPosts} from '../../actions/post_actions';
import {findSavedPosts} from '../../util/selectors';
import PostIndexItem from '../posts/post_index_item';

const mStP = state => ({
  posts: findSavedPosts(state.session.userInfo.saved, Object.values(state.entities.posts))
})

const mDtP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})


class SavedPosts extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    return (
      <ul className="posts-list">
          {this.props.posts.map((post) => {
            return <PostIndexItem post={post} saved={true} key={post.id} />
          })}
      </ul>
    )
  }
}

export default connect(mStP, mDtP)(SavedPosts);







