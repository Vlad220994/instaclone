export default class PostsService {
  // eslint-disable-next-line class-methods-use-this
  getResource() {
    return JSON.parse(localStorage.getItem('postsData')) || [];
  }
}
