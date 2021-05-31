import { authReducer } from "./authReducer";
import * as act from "../actions";

describe("Reducer login change state correct", () => {
  const state = {
    isLoggedIn: false,
    isLoading: false,
    email: null,
    password: null,
    token: null,
    name: null,
    error: null,
  };

  it("LOGIN_REQUEST", () => {
    const action = {
      type: act.postLoginRequest.toString(),
      payload: {
        email: "email",
        password: "password",
      },
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      isLoading: true,
    });
  });

  it("REGISTR_REQUEST", () => {
    const action = {
      type: act.postRegRequest.toString(),
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      token: "",
      isLoading: true,
      isLoggedIn: false,
    });
  });

  it("REGISTR_SUCCESS", () => {
    const action = {
      type: act.postRegSuccess.toString(),
      payload: {
        token: "test token",
        success: true,
      },
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      token: action.payload.token,
      isLoading: false,
      isLoggedIn: action.payload.success,
    });
  });

  it("LOGIN_SUCCESS", () => {
    const action = {
      type: act.postLoginSuccess.toString(),
      payload: {
        token: "test token",
        success: true,
      },
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      token: action.payload.token,
      isLoading: false,
      isLoggedIn: action.payload.success,
    });
  });

  it("LOGIN_FAILURE", () => {
    const action = {
      type: act.postLoginFailure.toString(),
      payload: {
        error: "smth went wrong",
      },
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      isLoggedIn: false,
      isLoading: false,
      error: action.payload.error,
    });
  });

  it("REGISTR_FAILURE", () => {
    const action = {
      type: act.postRegFailure.toString(),
      payload: {
        error: "smth went wrong",
      },
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      isLoggedIn: false,
      isLoading: false,
      error: action.payload.error,
    });
  });

  it("LOGOUT", () => {
    const action = {
      type: act.logOut.toString(),
      payload: {
        error: "smth went wrong",
      },
    };
    expect(authReducer(state, action)).toEqual({
      ...state,
      isLoggedIn: false,
      token: null,
    });
  });
});
