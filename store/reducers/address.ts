import { SET_ADDRESS } from "../actionTypes";

const initialState = {
  country: "",
  city: "",
  zip: "",
  street: "",
  addressNumber: "",
  apartmentNumber: "",
};

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.city,
        zip: action.payload.zip,
        street: action.payload.street,
        addressNumber: action.payload.addressNumber,
        apartmentNumber: action.payload.apartmentNumber,
      };
    default:
      return state;
  }
}
