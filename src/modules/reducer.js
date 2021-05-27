import {
  postLoginRequest,
  postRegRequest,
  postLoginSuccess,
  postRegSuccess,
  logOut,
  postLoginFailure,
  postRegFailure,
} from "./actions";

const savedData = JSON.parse(localStorage.getItem("loft-taxi-state"));

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  email: null,
  password: null,
  token: null,
  name: null,
  error: null,
  ...savedData,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postLoginRequest.toString():
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoading: true,
        isLoggedIn: false,
      };
    case postRegRequest.toString():
      return {
        ...state,
        token: "",
        isLoading: true,
        isLoggedIn: false,
      };
    case postRegSuccess.toString():
      localStorage.setItem(
        "loft-taxi-state",
        JSON.stringify({ isLoggedIn: action.payload.success, token: action.payload.token })
      );
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        isLoggedIn: action.payload.success,
      };
    case postLoginSuccess.toString():
      localStorage.setItem(
        "loft-taxi-state",
        JSON.stringify({ isLoggedIn: action.payload.success, token: action.payload.token })
      );
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        isLoggedIn: action.payload.success,
      };
    case logOut.toString():
      localStorage.removeItem("loft-taxi-state");
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    case postLoginFailure.toString():
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload.error,
      };
    case postRegFailure.toString():
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
