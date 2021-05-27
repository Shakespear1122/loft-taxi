import { postCardInfo, postCardSuccess, postCardFailure } from "../actions";

export function cardReducer(state = {}, action) {
  switch (action.type) {
    case postCardInfo.toString():
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        cardDate: action.payload.cardDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
        isLoading: true,
      };
    case postCardSuccess.toString():
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
      };
    case postCardFailure.toString():
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
