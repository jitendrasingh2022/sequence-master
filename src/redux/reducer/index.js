import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";

const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;
