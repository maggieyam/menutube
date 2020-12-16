import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions/post_actions";
import PostShow from "./post_show";
<<<<<<< HEAD

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.id],
  currentUser: state.session.userInfo.id
});
=======
import { receiveCurrentUser } from "../../actions/session_actions";
const mSTP = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.id],
    currentUser: state.session.userInfo.id,
  };
};
>>>>>>> main

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
});

export default connect(mSTP, mDTP)(PostShow);
