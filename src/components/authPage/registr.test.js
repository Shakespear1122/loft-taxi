import React from "react";
import Registr from "./login";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import createAppStore from "../../store";
import { BrowserRouter } from "react-router-dom";

const store = createAppStore();

jest.mock("mapbox-gl", () => ({}));

it("Login is rendering without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Registr />
      </BrowserRouter>
    </Provider>
  );
});

it("Form is rendering", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Registr />
      </BrowserRouter>
    </Provider>
  );
  expect(getByTestId("form")).toBeTruthy();
});
