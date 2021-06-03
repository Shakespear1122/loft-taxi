import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { getAllAdressesSuccess, getAllAdresses } from "../actions";

function* sagaGetAllAdresses(action) {
  const result = yield axios
    .get(`https://loft-taxi.glitch.me/addressList`)
    .then((response) => response.data);
  yield put(getAllAdressesSuccess(result.addresses));
}

export function* getAdresses() {
  yield takeEvery(getAllAdresses, sagaGetAllAdresses);
}
