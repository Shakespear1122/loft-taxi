import { postCardInfo, postCardSuccess, postCardFailure, setCardInfo } from "../actions";

export function cardReducer(state = {}, action) {
  switch (action.type) {
    case postCardInfo.toString():
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
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
    case setCardInfo.toString():
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
      };
    default:
      return state;
  }
}
