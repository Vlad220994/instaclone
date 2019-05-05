import {
    POSTS_LOAD_START,
    POSTS_LOAD_SUCCESS,
    POSTS_LOAD_ERROR
} from '../constants/actionTypes';

export function loadPostsStart() {
    return {
        type: POSTS_LOAD_START
    }
}

export function loadPostsSuccess(posts) {
    return {
        type: POSTS_LOAD_SUCCESS,
        posts
    }
}

export function loadPostsError(error) {
    return {
        type: POSTS_LOAD_ERROR,
        error
    }
}
