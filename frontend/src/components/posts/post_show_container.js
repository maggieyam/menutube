import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from "./post_show";

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
});

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
});

export default connect(mSTP, mDTP)(PostShow);
