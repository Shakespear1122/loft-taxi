import { fork } from "redux-saga/effects";
import { login, registr, getCard, getCoor, getAdresses } from "./sagas";

export default function* rootSaga() {
  yield fork(login);
  yield fork(registr);
  yield fork(getCard);
  yield fork(getCoor);
  yield fork(getAdresses);
}
