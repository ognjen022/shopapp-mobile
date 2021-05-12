import { SET_USER } from "../actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
