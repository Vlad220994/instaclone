export default class PostsService {
    getResource() {
        return JSON.parse(localStorage.getItem('postsData')) || [];
    };
}