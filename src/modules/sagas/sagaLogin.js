import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { postLoginRequest, postLoginSuccess, postLoginFailure } from "../actions";

function* sagaLogRequest(action) {
  const result = yield axios
    .post(`https://loft-taxi.glitch.me/auth`, action.payload)
    .then((response) => response.data);
  if (result.success === true) {
    yield put(postLoginSuccess(result));
  } else {
    yield put(postLoginFailure(result));
  }
}

export function* login() {
  yield takeEvery(postLoginRequest, sagaLogRequest);
}
