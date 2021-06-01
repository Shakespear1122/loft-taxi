import {
  getCoordinates,
  getCoordinatesSuccess,
  getAllAdresses,
  getAllAdressesSuccess,
} from "../actions";

export function orderReducer(state = { coordinates: [], addresses: [] }, action) {
  switch (action.type) {
    case getCoordinates.toString():
      return {
        ...state,
        isLoading: true,
      };
    case getCoordinatesSuccess.toString():
      return {
        ...state,
        coordinates: action.payload,
        isLoading: false,
      };
    case getAllAdresses.toString():
      return {
        ...state,
        isLoading: true,
      };
    case getAllAdressesSuccess.toString():
      return {
        ...state,
        addresses: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
