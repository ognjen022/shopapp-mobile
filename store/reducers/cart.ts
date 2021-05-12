import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT } from "../actionTypes";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyInCart = state.findIndex(item => item.id === action.payload.id);
      if (alreadyInCart != -1) {
        return state.map(item => (item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item));
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case CHANGE_AMOUNT:
      return state.map(item => (item.id === action.payload.id ? { ...item, amount: item.amount + action.payload.amount } : item));
    default:
      return state;
  }
}
