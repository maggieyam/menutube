import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import { fetchPosts } from "../../actions/post_actions";
import { fetchTags } from '../../actions/tag_actions';
import { updateFilter, clearFilter } from '../../actions/filter_actions';
import { selectPosts } from '../../util/selectors';
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react';
import PostIndexItem from "./post_index_item";
import "./post_index_page.css";

const PostIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const filter = useSelector((state) => state.ui.filter);

  const posts = useSelector((state) => selectPosts(filter, state.entities.posts));
  
  const diet = useSelector((state) => state.entities.tags[0]);
  const ingredients = useSelector((state) => state.entities.tags[1]);
  const nutrition = useSelector((state) => state.entities.tags[2]);
  
  
  const optionify = (category) => {
    const options = Object.keys(category).map(tag => {
      return {key: tag, text: tag[0].toUpperCase() + tag.slice(1), value: tag}
    })
    options.pop();
    return options
  }

  const handleFilter = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    let category = data.placeholder.toLowerCase()
    let filter = {[category]: data.value}
    dispatch(updateFilter(filter))
    window.scroll(0, 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchPosts())
    dispatch(fetchTags())

    return () => {
      dispatch(clearFilter())
    }
  }, []);
  
  return (
    <div className="posts-content">
      <button id='saved-post-btn' onClick={() => history.push('/posts/saved')}>Saved Posts</button>
      <div className="search-bars">
      <h2>Filter By Tag:</h2>
      <label className="diet"> Diet/Restrictions: 
        <Dropdown 
          onChange={handleFilter}
          placeholder='Diet'
          closeOnChange
          fluid
          clearable
          multiple
          search
          selection
          defaultValue={filter["diet"]}
          options={optionify(diet || {})}
          
        />
      </label>
      <label className="nutrition"> Nutrition: 
        <Dropdown 
          placeholder='Nutrition'
          closeOnChange
          fluid
          clearable
          multiple
          search
          selection
          defaultValue={filter["nutrition"]}
          options={optionify(nutrition || {})}
          onChange={handleFilter}
        />
      </label>
      <label className="ingredients"> Ingredients: 
        <Dropdown 
          placeholder='Ingredients'
          closeOnChange
          fluid
          clearable
          multiple
          search
          selection
          defaultValue={filter["ingredients"]}
          options={optionify(ingredients || {})}
          onChange={handleFilter}
        />
      </label>
      </div>
      <ul className="posts-list">
        {posts.map((post) => {
          return <PostIndexItem post={post} key={post.id} />
        })}
      </ul>
    </div>
  );
};

export default PostIndex;
