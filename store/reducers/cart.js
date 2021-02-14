import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT } from "../actionTypes";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyInCart = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (alreadyInCart != -1) {
        const newState = state;
        newState[alreadyInCart] = {
          ...newState[alreadyInCart],
          amount: newState[alreadyInCart].amount + 1,
        };
        return newState;
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    case CHANGE_AMOUNT:
      const itemToChange = state.find((item) => item.id === action.payload.id);
      if (itemToChange.amount === 1 && action.payload.amount === -1)
        return state;
      const index = state.findIndex((item) => item.id === action.payload.id);
      itemToChange.amount = itemToChange.amount + action.payload.amount;
      const newState = [...state];
      newState[index] = itemToChange;
      return newState;
    default:
      return state;
  }
}
