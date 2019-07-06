export default class UsersService {
  // eslint-disable-next-line class-methods-use-this
  getResource() {
    return JSON.parse(localStorage.getItem('usersData')) || [];
  }
}
