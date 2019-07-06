import {
  POSTS_LOAD_START,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_ERROR,
  USERS_LOAD_START,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_ERROR,
  SET_ACTIVE_USER,
  SET_DISACTIVE_USER,
} from '../constants/actionTypes';

export function loadPostsStart() {
  return {
    type: POSTS_LOAD_START,
  };
}

export function loadPostsSuccess(posts) {
  return {
    type: POSTS_LOAD_SUCCESS,
    posts,
  };
}

export function loadPostsError(error) {
  return {
    type: POSTS_LOAD_ERROR,
    error,
  };
}

export function loadUsersStart() {
  return {
    type: USERS_LOAD_START,
  };
}

export function loadUsersSuccess(users) {
  return {
    type: USERS_LOAD_SUCCESS,
    users,
  };
}

export function loadUsersError(error) {
  return {
    type: USERS_LOAD_ERROR,
    error,
  };
}

export function setUser(user) {
  return {
    type: SET_ACTIVE_USER,
    user,
  };
}

export function unsetUser(user) {
  return {
    type: SET_DISACTIVE_USER,
    user,
  };
}
