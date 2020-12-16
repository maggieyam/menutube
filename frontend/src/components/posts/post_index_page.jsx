import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import PostIndexItem from "./post_index_item";
import "./post_index_page.css";

const PostIndex = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.entities.posts));
  const currentUser = useSelector((state) => state.session.userInfo);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);
  

  const filterSaved = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  const setAllPosts = (event) => {
    event.preventDefault();
    setSaved(false);
  };

  const display = () => {
    if (!saved) return posts;
    else {
      return posts.filter(post => currentUser.saved.includes(post._id))
    }
  }
  
  return (
    <div className="posts-content">
      <button onClick={setAllPosts}>Home</button>
      <button onClick={filterSaved}>Saved Posts</button>
      <ul className="posts-list">
        {display().map((post) => {
          return <PostIndexItem post={post} key={post.id} />
        })}
      </ul>
    </div>
  );
};

export default PostIndex;
