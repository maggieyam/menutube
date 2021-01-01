import React from 'react';
import "./comments.css";

class Comments extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {commentBody: ""};
    this.submitComment = this.submitComment.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteButton(postId, commentId){
    return <button
      className="comment-delete"
      onClick={() => this.deleteComment(postId, commentId)}
    ><p>Delete</p></button>
  }

  deleteComment(postId, commentId){
    this.props.deleteComment(postId, commentId);
  }

  submitComment(e){
    e.preventDefault();
    this.props.createComment(this.state.commentBody, this.props.post._id)
      .then(() => this.setState({commentBody: ""}))
  }

   updateBody(e){
    this.setState({commentBody: e.target.value})
  }

  render() {
    const {post, currentUser} = this.props;

    if (post.comments.length > 0 && !post.comments[0].user) return null;

    return (
      <div className="comments-section">
        <h2 className="comments-header">Comments</h2>
        <ul className="comment-list">
          {post.comments.map((comment, i) => {
            return (
              <li className="comment-info" key={i}>
                <p className="comment-body">{comment.body}</p> 
                <div className="comment-author-and-delete">
                  {currentUser !== comment.user._id ? (<div />) : this.deleteButton(post._id, comment._id)}
                  <p className="comment-author">by {comment.user.username}</p>
                </div>
              </li>
            )
          })}
        </ul>
        
        <form className="add-comment" onSubmit={this.submitComment}>
        <label><p className="add-comment-label">Add Comment</p>
          <textarea className="comment-bod" value={this.state.commentBody} onChange={this.updateBody}></textarea>
        </label>
        <input type="submit" value="Submit"/>
        </form>
     </div>
    )
  }

}

export default Comments;