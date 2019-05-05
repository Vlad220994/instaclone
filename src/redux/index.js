import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
