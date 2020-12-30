import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import loadingReducer from './loading_reducer';
import filterReducer from './filter_reducer';

export default combineReducers({
  modal: modalReducer,
  loading: loadingReducer,
  filter: filterReducer
})

