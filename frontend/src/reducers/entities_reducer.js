import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import tagsReducer from './tags_reducer';
<<<<<<< HEAD
// import usersReducer from './users_reducer';
=======
import usersReducer from './users_reducer';
>>>>>>> e4824c961175148b3da0d43d02c40f2133881d67

export default combineReducers({
  posts: postsReducer,
  tags: tagsReducer,
  users: usersReducer
})