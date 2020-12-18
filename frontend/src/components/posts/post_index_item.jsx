import React from "react";
// import { useHistory } from "react-router-dom";
import FeedVideo from "../videos/feed_video";

const PostIndexItem = ({ post, saved }) => {
  // const history = useHistory();
  // const handleClick = () => history.push(`/`)
  // const { title, user, url } = post;
  // return <FeedVideo title={title} url={url} user={user} />;
  return <FeedVideo key={post._id} {...post} saved={saved} />;
};

export default PostIndexItem;
