import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStore.jwtToken);
    const userInfo = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, userInfo}};
    store = configureStore(preloadedState);
    const now = Date.now() / 1000;

    if (user.exp < now) {
      store.dispatch(logout());
      // should we immediately redirect to log in?
    }

  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
})

