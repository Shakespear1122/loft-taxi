import React from "react";
import TaxiProfile from "./profile";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createAppStore from "../store";
import { BrowserRouter } from "react-router-dom";

const store = createAppStore();

it("authPage render without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <TaxiProfile />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("profile-container")).toBeTruthy();
});
