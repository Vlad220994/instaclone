import {
  loadUsersStart,
  loadUsersSuccess,
  loadUsersError,
  setUser
} from "../actions/actionCreators";
import UsersService from "../../services/getUsers";

const usersService = new UsersService();

export function loadUsers() {
  return async dispatch => {
    dispatch(loadUsersStart());

    try {
      setTimeout(() => {
        const users = usersService.getResource();
        dispatch(loadUsersSuccess(users));
      }, 500);
    } catch (e) {
      dispatch(loadUsersError(e));
    }
  };
}

export function addUser(newUser) {
  return async dispatch => {
    dispatch(loadUsersStart());

    try {
      setTimeout(() => {
        const users = usersService.getResource();
        const newUsers = [...newUser, ...users];
        dispatch(loadUsersSuccess(newUsers));
        localStorage.setItem("usersData", JSON.stringify(newUsers));
      }, 500);
    } catch (e) {
        dispatch(loadUsersError(e));
    }
  }
}

export function removeUser(id) {
  return async dispatch => {
    dispatch(loadUsersStart());

    try {
      setTimeout(() => {
        const users = usersService.getResource();
        const newUsers = users.filter(item => item.id !== id);
        dispatch(loadUsersSuccess(newUsers));
        localStorage.setItem("usersData", JSON.stringify(newUsers));
      }, 500);
    } catch (e) {
        dispatch(loadUsersError(e));
    }
  }
}

export function setActiveUser(user) {
    localStorage.setItem("activeUser", JSON.stringify(user));
    return dispatch => dispatch(setUser(user))
}