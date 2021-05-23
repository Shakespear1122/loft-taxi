import React from "react";
import TaxiMap from "./map";
import { render, screen } from "@testing-library/react";
import createAppStore from "../store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const store = createAppStore();

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

it("authPage render without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <TaxiMap />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("map-container")).toBeTruthy();
});
