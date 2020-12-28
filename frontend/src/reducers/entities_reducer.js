import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import tagsReducer from './tags_reducer';
import usersReducer from './users_reducer';
import calendarReducer from './calendar_reducer';

export default combineReducers({
  posts: postsReducer,
  tags: tagsReducer,
  users: usersReducer,
  calendar: calendarReducer
})