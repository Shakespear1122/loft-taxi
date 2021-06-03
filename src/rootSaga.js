import { fork } from "redux-saga/effects";
import { login } from "./modules/sagas/sagaLogin";
import { registr } from "./modules/sagas/sagaRegistr";
import { getCard } from "./modules/sagas/sagaGetCard";
import { getCoor } from "./modules/sagas/sagaGetCoordinates";
import { getAdresses } from "./modules/sagas/sagaGetAdresses";

export default function* rootSaga() {
  yield fork(login);
  yield fork(registr);
  yield fork(getCard);
  yield fork(getCoor);
  yield fork(getAdresses);
}
