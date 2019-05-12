import {
  loadPostsStart,
  loadPostsSuccess,
  loadPostsError
} from "../actions/actionCreators";
import PostsService from "../../services/getPosts";

const postsService = new PostsService();

export function loadPosts() {
  return async dispatch => {
    dispatch(loadPostsStart());

    try {
      // имитация работы сервера
      setTimeout(() => {
        const posts = postsService.getResource();
        dispatch(loadPostsSuccess(posts));
      }, 500);
    } catch (e) {
      dispatch(loadPostsError(e));
    }
  };
}

export function addPost(newPost) {
  return async dispatch => {
    dispatch(loadPostsStart());

    try {
      setTimeout(() => {
        const posts = postsService.getResource();
        const newPosts = [...newPost, ...posts];
        dispatch(loadPostsSuccess(newPosts));
        localStorage.setItem("postsData", JSON.stringify(newPosts));
      }, 500);
    } catch (e) {
        dispatch(loadPostsError(e));
    }
  }
}
