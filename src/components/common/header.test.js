import React from "react";
import Header from "./header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createAppStore from "../../store";
import { BrowserRouter } from "react-router-dom";

const store = createAppStore();

jest.mock("mapbox-gl", () => ({}));

it("header is rendering without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("header-container")).toBeTruthy();
});
