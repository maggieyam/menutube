import { connect } from "react-redux";
import { fetchUserPosts } from "../../actions/post_actions";
import Profile from "./profile_page";

const mSTP = (state, ownProps) => {
  return {
    // posts: state.entities.posts[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
  };
};

const mDTP = (dispatch) => ({
  fetchUserPosts: (posts) => dispatch(fetchUserPosts(posts)),
});

export default connect(mSTP, mDTP)(Profile);
