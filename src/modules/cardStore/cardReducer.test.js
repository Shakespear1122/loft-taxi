import { cardReducer } from "./cardReducer";
import * as act from "../actions";

describe("Reducer correct state change", () => {
  const state = {
    cardNumber: "",
    cardDate: "",
    cardName: "",
    cvc: "",
  };
  it("CARD_INFO", () => {
    const postCardInfo = {
      type: act.postCardInfo.toString(),
      payload: {
        cardNumber: "",
        cardDate: "",
        cardName: "",
        cvc: "",
      },
    };
    expect(cardReducer(state, postCardInfo)).toEqual({
      ...state,
      isLoading: true,
    });
  });

  it("CARD_SUCCESS", () => {
    const postCardSuccess = {
      type: act.postCardSuccess.toString(),
      payload: {
        success: true,
      },
    };
    expect(cardReducer(state, postCardSuccess)).toEqual({
      ...state,
      isLoading: false,
      success: true,
    });
  });

  it("CARD_FAILURE", () => {
    const postCardFailure = {
      type: act.postCardFailure.toString(),
      payload: {
        success: false,
        error: "some error",
      },
    };
    expect(cardReducer(state, postCardFailure)).toEqual({
      ...state,
      isLoading: false,
      success: false,
      error: "some error",
    });
  });
});
