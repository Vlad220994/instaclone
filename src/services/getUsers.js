export default class UsersService {
  getResource() {
    return JSON.parse(localStorage.getItem("usersData")) || [];
  }
}
