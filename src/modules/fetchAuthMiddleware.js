import {
  postLoginRequest,
  postLoginSuccess,
  postLoginFailure,
  postRegRequest,
  postRegSuccess,
  postRegFailure,
} from "./actions";
import axios from "axios";

export const fetchAuthMiddleware = (store) => (next) => (action) => {
  console.log("middleware called!!!");
  if (action.type === postLoginRequest.toString()) {
    axios.post(`https://loft-taxi.glitch.me/auth`, action.payload).then((response) => {
      if (response.data.success === true) {
        console.log("Success");
        store.dispatch(postLoginSuccess(response.data));
      } else {
        console.log("Failure");
        store.dispatch(postLoginFailure(response.data));
      }
    });
  }
  if (action.type === postRegRequest.toString()) {
    axios
      .post(`https://loft-taxi.glitch.me/register`, action.payload)
      .then((response) => {
        console.log(response.data);
        store.dispatch(postRegSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(postRegFailure(error));
      });
  }
  return next(action);
};
