import { createStore, compose, applyMiddleware } from "redux";
import { fetchAuthMiddleware } from "./modules/fetchAuthMiddleware";
import reducer from "./modules/reducer";

const createAppStore = () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(fetchAuthMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
    )
  );
  return store;
};

export default createAppStore;
