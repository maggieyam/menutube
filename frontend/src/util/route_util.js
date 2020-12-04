import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Protected = ({component: Component, loggedIn, ...rest}) => (
  <Route {...rest} render={(props) => (
    loggedIn ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
  )}
  />
);

const Auth = ({component: Component, loggedIn, ...rest}) => (
  <Route {...rest} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/feed" />
    )
  )}
  />
);

const mStP = state => ({
  loggedIn: state.session.isAuthenticated
})

export const ProtectedRoute = withRouter(connect(mStP)(Protected));
export const AuthRoute = withRouter(connect(mStP)(Auth));