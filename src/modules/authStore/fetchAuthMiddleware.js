import {
  postLoginRequest,
  postLoginSuccess,
  postLoginFailure,
  postRegRequest,
  postRegSuccess,
  postRegFailure,
} from "../actions";
import axios from "axios";

export const fetchAuthMiddleware = (store) => (next) => (action) => {
  if (action.type === postLoginRequest.toString()) {
    axios.post(`https://loft-taxi.glitch.me/auth`, action.payload).then((response) => {
      if (response.data.success === true) {
        store.dispatch(postLoginSuccess(response.data));
      } else {
        store.dispatch(postLoginFailure(response.data));
      }
    });
  }
  if (action.type === postRegRequest.toString()) {
    axios
      .post(`https://loft-taxi.glitch.me/register`, action.payload)
      .then((response) => {
        store.dispatch(postRegSuccess(response.data));
      })
      .catch((error) => {
        store.dispatch(postRegFailure(error));
      });
  }
  return next(action);
};
