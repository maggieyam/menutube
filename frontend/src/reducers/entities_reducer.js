import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import tagsReducer from './tags_reducer';

export default combineReducers({
  posts: postsReducer,
  tags: tagsReducer
})