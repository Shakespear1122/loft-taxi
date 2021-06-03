import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { postRegRequest, postRegFailure, postRegSuccess } from "../actions";

function* sagaRegRequest(action) {
  const result = yield axios
    .post(`https://loft-taxi.glitch.me/register`, action.payload)
    .then((response) => response.data);
  if (result.success === true) {
    yield put(postRegSuccess(result));
  } else {
    yield put(postRegFailure(result));
  }
}

export function* registr() {
  yield takeEvery(postRegRequest, sagaRegRequest);
}
