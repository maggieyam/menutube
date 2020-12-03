import React, { Component } from "react";
import ShowPageVideo from "../videos/show_page_video";

class PostShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <span className="post-title" />
        <div className="post-show-container">
          <ShowPageVideo {...post} />
        </div>
      </div>
    );
  }
}

export default PostShow;
