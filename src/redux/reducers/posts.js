import {
  POSTS_LOAD_START,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_ERROR,
} from '../constants/actionTypes';

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case POSTS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case POSTS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        posts: action.error,
      };
    default:
      return state;
  }
}
