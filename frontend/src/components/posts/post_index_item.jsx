import React from "react";
// import { useHistory } from 'react-router-dom';
import FeedVideo from "../videos/feed_video";
const PostIndexItem = ({ post }) => {
  // const history = usehistory();
  const { title, user, url } = post;
  return (
    <div
      className="video-container-index"
      style={{
        padding: "100px",
      }}
    >
      <FeedVideo title={title} url={url} user={user} />
    </div>
  );
};

export default PostIndexItem;
