import {
  USERS_LOAD_START,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_ERROR,
} from '../constants/actionTypes';

export const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case USERS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case USERS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        users: action.error,
      };
    default:
      return state;
  }
}
