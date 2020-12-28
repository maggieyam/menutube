import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import { fetchPosts } from "../../actions/post_actions";
import PostIndexItem from "./post_index_item";
import "./post_index_page.css";

const PostIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector((state) => Object.values(state.entities.posts));
 

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);
  
  return (
    <div className="posts-content">
      <button onClick={() => history.push('/posts/saved')}>Saved Posts</button>
      <ul className="posts-list">
        {posts.map((post) => {
          return <PostIndexItem post={post} key={post.id} />
        })}
      </ul>
    </div>
  );
};

export default PostIndex;
