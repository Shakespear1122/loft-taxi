import { authReducer } from "./authStore/authReducer";
import { cardReducer } from "./cardStore/cardReducer";
import { orderReducer } from "./orderStore/orderReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  authReducer,
  cardReducer,
  orderReducer,
});
