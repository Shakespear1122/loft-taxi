import { postCardSuccess, postCardFailure, postCardInfo } from "../actions";
import axios from "axios";

export const fetchCardMiddleware = (store) => (next) => (action) => {
  if (action.type === postCardInfo.toString()) {
    axios.post(`https://loft-taxi.glitch.me/card`, action.payload).then((response) => {
      if (response.data.success === true) {
        store.dispatch(postCardSuccess(response.data));
      } else {
        store.dispatch(postCardFailure(response.data));
      }
    });
  }
  return next(action);
};
