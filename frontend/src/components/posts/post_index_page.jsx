import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import PostIndexItem from "./post_index_item";
import "./post_index_page.css";

const PostIndex = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.entities.posts));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchPosts]);

  return (
    <div className="posts-content">
      <ul className="posts-list">
        {posts.map((post) => (
          <PostIndexItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostIndex;
