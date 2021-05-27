import { createStore, compose, applyMiddleware } from "redux";
import { fetchAuthMiddleware } from "./modules/authStore/fetchAuthMiddleware";
import { fetchCardMiddleware } from "./modules/cardStore/fetchCardMiddleware";
import { rootReducer } from "./modules/rootReducer";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(fetchAuthMiddleware),
      applyMiddleware(fetchCardMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
    )
  );
  return store;
};

export default createAppStore;
