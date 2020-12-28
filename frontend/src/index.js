import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { openModal, closeModal } from './actions/modal_actions';
import { getSaved } from './actions/user_actions';
import { fetchCalendar } from './util/calendar_api_util'
import axios from 'axios';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const userInfo = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, userInfo}};
    store = configureStore(preloadedState);
    const now = Date.now() / 1000;
    store.dispatch(getSaved())

    if (userInfo.exp < now) {
      store.dispatch(logout());
      // should we immediately redirect to log in?
    }

  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');
  window.fetchCalendar = fetchCalendar;


  ReactDOM.render(<Root store={store} />, root);


})

