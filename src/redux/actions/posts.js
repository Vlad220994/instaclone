import {
  loadPostsStart,
  loadPostsSuccess,
  loadPostsError
} from "../actions/actionCreators";
import PostsService from "../../services/getPosts";

export function loadPosts() {
  return async dispatch => {
    dispatch(loadPostsStart());

    try {
      // имитация работы сервера
      setTimeout(() => {
        const postsService = new PostsService();
        const posts = postsService.getResource();
        dispatch(loadPostsSuccess(posts));
      }, 500);
    } catch (e) {
      dispatch(loadPostsError(e));
    }
  };
}
