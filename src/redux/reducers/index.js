import { combineReducers } from 'redux';
import postsReducer from './posts';
import usersReducer from './users';
import isLogged from './auth';

export default combineReducers({
  postsReducer, usersReducer, isLogged,
});
