import { createAction } from "redux-actions";

export const postLoginRequest = createAction("POST_LOGIN_FORM");
export const postRegRequest = createAction("POST_REG_FORM");
export const postLoginSuccess = createAction("POST_LOGIN_SUCCESS");
export const postRegSuccess = createAction("POST_REG_SUCCESS");
export const postLoginFailure = createAction("POST_LOGIN_FAILURE");
export const postRegFailure = createAction("POST_REG_FAILURE");
export const logOut = createAction("LOG_OUT");
