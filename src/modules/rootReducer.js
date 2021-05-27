import { authReducer } from "./authStore/authReducer";
import { cardReducer } from "./cardStore/cardReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  authReducer,
  cardReducer,
});
