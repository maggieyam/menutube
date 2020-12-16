import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions/post_actions";
import PostShow from "./post_show";

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.id],
  currentUser: state.session.userInfo.id
});

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
});

export default connect(mSTP, mDTP)(PostShow);
