import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createAppStore from "./store";
import { BrowserRouter } from "react-router-dom";

const store = createAppStore();

jest.mock("mapbox-gl", () => ({}));

it("App is rendering without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("home-container")).toBeTruthy();
});
