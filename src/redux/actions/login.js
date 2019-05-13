import { IS_LOGGED } from '../constants/actionTypes';

const isLogin = value => (
  {
    type: IS_LOGGED,
    value,
  });

export default isLogin;
