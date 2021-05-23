import React from "react";
import Login from "./login";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createAppStore from "../../store";
import { BrowserRouter } from "react-router-dom";

const store = createAppStore();

jest.mock("mapbox-gl", () => ({}));

it("Login is rendering without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("login-header")).toBeTruthy();
});

it("Form is rendering", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );

  expect(getByTestId("form")).toBeTruthy();
});
