import { orderReducer } from "./orderReducer";
import * as act from "../actions";

describe("Reducer correct state change", () => {
  const state = {
    coordinates: [],
    addresses: [],
    isLoading: false,
  };

  it("CARD_INFO", () => {
    const getCoordinates = {
      type: act.getCoordinates.toString(),
    };

    expect(orderReducer(state, getCoordinates)).toEqual({
      ...state,
      isLoading: true,
    });
  });
});
