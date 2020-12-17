import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions/post_actions";
import PostShow from "./post_show";
import { createComment } from '../../actions/comment_actions';
import { receiveCurrentUser } from "../../actions/session_actions";
const mSTP = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.id],
    currentUser: state.session.userInfo.id,
  };
};

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  createComment: (body, postId) => dispatch(createComment(body, postId))
});

export default connect(mSTP, mDTP)(PostShow);
