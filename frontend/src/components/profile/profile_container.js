import { connect } from "react-redux";
import { fetchUserPosts } from "../../actions/post_actions";
import Profile from "./profile_page";
debugger;
const mSTP = (state, ownProps) => ({
  posts: state.entities.posts[ownProps.match.params.userId],
  username: state.session.userInfo.username,
});

const mDTP = (dispatch) => ({
  fetchUserPosts: (posts) => dispatch(fetchUserPosts(posts)),
});

export default connect(mSTP, mDTP)(Profile);
