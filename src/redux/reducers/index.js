import { combineReducers } from "redux";
import postsReducer from "./posts";
import usersReducer from "./users";

export default combineReducers({
  postsReducer, usersReducer
});
