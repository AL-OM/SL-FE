import { combineReducers } from "redux";
import { appReducer } from "./app";
import { sessionReducer } from "./session";
import { userRolesReducer } from "@/view/users/store/reducer";

export const rootReducer = combineReducers({
  session: sessionReducer,
  app: appReducer,
  userRole: userRolesReducer,
});
