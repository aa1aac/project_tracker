import { combineReducers } from "redux";

import userReducer from "./user";
import projectReducer from "./project";

export default combineReducers({
  user: userReducer,
  projects: projectReducer,
});
