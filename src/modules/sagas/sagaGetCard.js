import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { postCardInfo, postCardSuccess, postCardFailure } from "../actions";

function* sagaGetCard(action) {
  const result = yield axios
    .post(`https://loft-taxi.glitch.me/card`, action.payload)
    .then((response) => response.data);
  if (result.success === true) {
    yield put(postCardSuccess(result));
  } else {
    yield put(postCardFailure(result));
  }
}

export function* getCard() {
  yield takeEvery(postCardInfo, sagaGetCard);
}
