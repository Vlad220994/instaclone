import { combineReducers } from 'redux';
import postsReducer from './posts';
import usersReducer from './users';
import isLogged from './auth';
import activeUserReducer from './activeUser';

export default combineReducers({
  postsReducer, usersReducer, isLogged, activeUserReducer,
});
