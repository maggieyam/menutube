import { connect } from 'react-redux';
import React from 'react';
import {fetchPosts} from '../../actions/post_actions';
import {findSavedPosts} from '../../util/selectors';
import PostIndexItem from '../posts/post_index_item';
import './saved_posts.css';

const mStP = state => ({
  posts: findSavedPosts(state.session.userInfo.saved, Object.values(state.entities.posts)),
  openCalendar: state.ui.openCalendar
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
      <div className="saved-content">
        <h1>Your Saved Recipes:</h1>
        <ul className={`posts-list ${this.props.openCalendar ? "vertical" : ""}`} >
            {this.props.posts.map((post) => {
              return <PostIndexItem post={post} saved={true} key={post.id} />
            })}
        </ul>
      </div>
    )
  }
}

export default connect(mStP, mDtP)(SavedPosts);







