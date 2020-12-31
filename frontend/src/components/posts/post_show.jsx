import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player/file";
import "./post_show.css";
import Comments from '../comments/comments';
import {Link} from 'react-router-dom';
import DraggableVideo from "../calendar/draggablevideo";

class PostShow extends Component {
  constructor(props) {
    super(props);

    this.vidRef = React.createRef();
    this.state = {commentBody: ""}

    this.jumpToTime = this.jumpToTime.bind(this);
    this.goToEditPage = this.goToEditPage.bind(this);
    this.findTags = this.findTags.bind(this);
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

  findTags(){
    let {diet, nutrition, ingredients} = this.props.post;
    diet = Object.keys(diet).filter(tag => tag !== "_id" && diet[tag]).map(tag => [tag, "diet"])
    nutrition = Object.keys(nutrition).filter(tag => tag !== "_id" && nutrition[tag]).map(tag => [tag, "nutrition"])
    ingredients = Object.keys(ingredients).filter(tag => tag !== "_id" && ingredients[tag]).map(tag => [tag, "ingredients"])
    return [...diet, ...nutrition, ...ingredients];
  }

  goToSearchTag(tag) {
    this.props.updateFilter({[tag[1]]: [tag[0]]})
    this.props.history.push('/feed')
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
    
    this.tags = this.tags || this.findTags();

    const instructionList = post.steps.map(({timestamp, description}, idx) => (
      <li key={idx}>
        <div className="instructions">
          <button onClick={() => this.jumpToTime(timestamp)}>
            <p>{this.formatSeconds(timestamp)}</p>
          </button>
          <p>{description}</p>
        </div>
      </li>
    ));
    const tagsList = this.tags.map((tag, idx) => (
      <li key={idx}>
        <button className="tag-button" onClick={() => this.goToSearchTag(tag)}>
          <p>{`#${tag[0]}`}</p>
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
              <p className="show-title">{post.title}</p>
              {/* <p>by <Link
                className='profile-link'
                to={`/profile/${post.user._id}`}
              >{post.user.username}</Link>
              </p> */}
              <p>by {post.user.username}</p>
            </div>
            {postButtons}
          </div>
          <div className="middle-show-section">
            <div className="show-video-container">
              <DraggableVideo
                id = {this.props.post._id}
                contents = {
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
                }
              />
            </div>
            <div className="instructions-section">
              <p className="instructions-header">Instructions</p>
              <div className="instructions-body">
                <ul>{instructionList}</ul>
              </div>
            </div>
          </div>
          <div className="tags-section">
            <ul className="tags-list">{tagsList}</ul>
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
