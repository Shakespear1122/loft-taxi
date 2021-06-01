import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  postLoginRequest,
  postLoginSuccess,
  postLoginFailure,
  postRegRequest,
  postRegFailure,
  postRegSuccess,
  postCardInfo,
  postCardSuccess,
  postCardFailure,
  getCoordinates,
  getCoordinatesSuccess,
  getAllAdressesSuccess,
  getAllAdresses,
} from "./modules/actions";

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

function* sagaGetCoordinates(action) {
  const result = yield axios
    .get(
      `https://loft-taxi.glitch.me/route?address1=${action.payload.adress1}&address2=${action.payload.adress2}`
    )
    .then((response) => response.data);
  yield put(getCoordinatesSuccess(result));
}

function* sagaGetAllAdresses(action) {
  const result = yield axios
    .get(`https://loft-taxi.glitch.me/addressList`)
    .then((response) => response.data);
  yield put(getAllAdressesSuccess(result.addresses));
}

export function* login() {
  yield takeEvery(postLoginRequest, sagaLogRequest);
}

export function* registr() {
  yield takeEvery(postRegRequest, sagaRegRequest);
}

export function* getCard() {
  yield takeEvery(postCardInfo, sagaGetCard);
}

export function* getCoor() {
  yield takeEvery(getCoordinates, sagaGetCoordinates);
}

export function* getAdresses() {
  yield takeEvery(getAllAdresses, sagaGetAllAdresses);
}
