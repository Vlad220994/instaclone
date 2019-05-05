import {loadPostsStart, loadPostsSuccess, loadPostsError} from "../actions/actionCreators";
import PostsService from "../../services/getPosts";

export function loadPosts() {
    return  async dispatch => {
        dispatch(loadPostsStart());

        try {
            const postsService = new PostsService();
            const posts = await postsService.getResource();
            dispatch(loadPostsSuccess(posts));
        } catch (e) {
            dispatch(loadPostsError(e));
        }
    }
}