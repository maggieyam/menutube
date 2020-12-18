import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions/post_actions";
import PostShow from "./post_show";
import { createComment, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => { 
  return {
    post: state.entities.posts[ownProps.match.params.id],
    currentUser: state.session.userInfo.id,
    username: state.entities.users
  };
};

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  createComment: (body, postId) => dispatch(createComment(body, postId)),
  deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)) 
});

export default connect(mSTP, mDTP)(PostShow);
