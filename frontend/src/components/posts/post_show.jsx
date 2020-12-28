import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player/file";
import "./post_show.css";
import Comments from '../comments/comments';
import {Link} from 'react-router-dom';
class PostShow extends Component {
  constructor(props) {
    super(props);

    this.vidRef = React.createRef();
    this.state = {commentBody: ""}

    this.jumpToTime = this.jumpToTime.bind(this);
    this.goToEditPage = this.goToEditPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  formatSeconds(secs) {
    let remainingSecs = secs % 60;
    let remainingMins = Math.floor(secs / 60);
    if (remainingSecs < 10) {
      remainingSecs = "0" + remainingSecs;
    }
    return `${remainingMins}:${remainingSecs}`;
  }

  jumpToTime(secs) {
    if (this.vidRef.current) {
      this.vidRef.current.seekTo(secs);
    }
  }

  goToSearchTag(tag) {
    // this.props.history.push(`/search/${tag}`);
  }

  goToEditPage() {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  }

  goToFeed() {
    this.props.history.push(`/feed`)
  }


  render() {
    const { post, deletePost, currentUser, createComment, deleteComment } = this.props;
    if (!post) return null;
    const tags = [
      "sugar 16g",
      "protein 20g",
      "vegetarian",
      "broccoli 1/2 lb.",
      "tofu 1 block",
    ];
    const timestampList = post.steps.map(({timestamp, description}, idx) => (
      <li key={idx}>
        <div className="timestamps">
          <button onClick={() => this.jumpToTime(timestamp)}>
            {this.formatSeconds(timestamp)}
          </button>
          <p>{description}</p>
        </div>
      </li>
    ));
    const tagsList = tags.map((tag, idx) => (
      <li key={idx}>
        <button className="tag-button" onClick={() => this.goToSearchTag(tag)}>
          {`#${tag}`}
        </button>
      </li>
    ));
    const postButtons = currentUser !== post.user._id ? null : (
      <div className="post-buttons">
        <button onClick={this.goToEditPage}>
          <p>Edit</p>
        </button>
        <button onClick={() => deletePost(post._id).then(this.goToFeed())}>
          <p>Delete</p>
        </button>
      </div>
    );

    return (
      <div className="post-show-wrapper">
        <div className="post-container">
          <div className="video-header">
            <div className="left-side-header">
              <p>{post.title}</p>
              {postButtons}
            </div>
            <p>
              by <Link className='profile-link' to={`/profile/${post.user.userId}`}>{post.user.username}</Link>
            </p>
          </div>
          <div className="show-video-container">
            <ReactPlayer
              ref={this.vidRef}
              url={post.url}
              controls
              height={"inherit"}
              width={"inherit"}
              config={{
                file: {
                  attributes: {
                    controlsList: ["nodownload"],
                    disablePictureInPicture: true,
                  },
                },
              }}
            />
          </div>
          <div className="video-info">
            <div className="timestamps-section">
              <p>Instructions</p>
              <ul>{timestampList}</ul>
            </div>
            <div className="tags-section">
              <p>Tags</p>
              <ul className="tags-list">{tagsList}</ul>
            </div>
          </div>

          <Comments
            post={post}
            createComment={createComment}
            currentUser={currentUser}
            deleteComment={deleteComment}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PostShow);
