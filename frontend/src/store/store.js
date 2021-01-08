import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

const middleware = process.env.NODE_ENV === 'development' ?
  applyMiddleware(thunk, logger) : applyMiddleware(thunk);

console.log(process.env.NODE_ENV)

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, middleware);

export default configureStore;
