import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player/file";
import "./post_show.css";

class PostShow extends Component {
  constructor(props) {
    super(props);

    this.vidRef = React.createRef();

    this.jumpToTime = this.jumpToTime.bind(this);
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

  render() {
    const { post } = this.props;
    if (!post) return null;

    const timestamps = [1, 3, 10];
    const tags = ["sugar 16g", "protein 20g", "vegetarian", "broccoli", "Tofu"];
    const timestampList = timestamps.map((ts, idx) => (
      <li key={idx}>
        <div className="timestamps">
          <button onClick={() => this.jumpToTime(ts)}>
            {this.formatSeconds(ts)}
          </button>
          <p>This is a step</p>
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

    return (
      <div className="post-container">
        <div className="video-header">
          <p>{post.title}</p>
          {/* <p>by {post.user}</p> */}
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
      </div>
    );
  }
}

export default withRouter(PostShow);
