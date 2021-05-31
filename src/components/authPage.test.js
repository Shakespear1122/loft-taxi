import React from "react";
import AuthPage from "./authPage";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("mapbox-gl", () => ({}));

it("opens the corresponding page", () => {
  const mockStore = {
    getState: () => ({ authReducer: { isLoggedIn: true } }),
    subscribe: () => {},
    dispatch: () => {},
  };
  const history = createMemoryHistory();

  const { container, getByText } = render(
    <Router history={history}>
      <Provider store={mockStore}>
        <AuthPage />
      </Provider>
    </Router>
  );
});
