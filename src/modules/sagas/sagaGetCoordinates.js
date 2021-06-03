import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { getCoordinates, getCoordinatesSuccess } from "../actions";

function* sagaGetCoordinates(action) {
  const result = yield axios
    .get(
      `https://loft-taxi.glitch.me/route?address1=${action.payload.adress1}&address2=${action.payload.adress2}`
    )
    .then((response) => response.data);
  yield put(getCoordinatesSuccess(result));
}

export function* getCoor() {
  yield takeEvery(getCoordinates, sagaGetCoordinates);
}
