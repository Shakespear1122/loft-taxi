import { createAction } from "redux-actions";

export const postLoginRequest = createAction("POST_LOGIN_FORM");
export const postRegRequest = createAction("POST_REG_FORM");
export const postLoginSuccess = createAction("POST_LOGIN_SUCCESS");
export const postRegSuccess = createAction("POST_REG_SUCCESS");
export const postLoginFailure = createAction("POST_LOGIN_FAILURE");
export const postRegFailure = createAction("POST_REG_FAILURE");
export const logOut = createAction("LOG_OUT");

export const postCardInfo = createAction("POST_CARD_INFO");
export const postCardSuccess = createAction("POST_CARD_SUCCESS");
export const postCardFailure = createAction("POST_CARD_FAILURE");
export const setCardInfo = createAction("SET_CARD_INFO");

export const getCoordinates = createAction("GET_COORDINATES");
export const getCoordinatesSuccess = createAction("GET_COORDINATES_SUCCESS");
export const getAllAdresses = createAction("GET_ALL_ADRESSES");
export const getAllAdressesSuccess = createAction("GET_ALL_ADRESSES_SUCCESS");
