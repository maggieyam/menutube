import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { openModal, closeModal } from './actions/modal_actions';
import { fetchPost } from './actions/post_actions';
import { fetchTags } from './actions/tag_actions';
import { savePost } from './util/post_api_util';
import axios from 'axios';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    debugger
    setAuthToken(localStorage.jwtToken);
    const userInfo = jwt_decode(localStorage.jwtToken);
    debugger
    const preloadedState = { session: { isAuthenticated: true, userInfo}};
    store = configureStore(preloadedState);
    const now = Date.now() / 1000;

    if (userInfo.exp < now) {
      store.dispatch(logout());
      // should we immediately redirect to log in?
    }

  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

  // START TESTING
  window.store = store;
  window.dispatch = store.dispatch;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.fetchTags = fetchTags;
  window.fetchPost = fetchPost;
  window.logout = logout;
  window.savePost = savePost;
  window.axios = axios;

  // END TESTING
})

