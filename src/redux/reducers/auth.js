import { IS_LOGGED } from '../constants/actionTypes';

const initialState = { isLogin: false };

export default function isLogged(state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state, isLogin: action.isLogin,
      };
    default:
      return { state };
  }
}
