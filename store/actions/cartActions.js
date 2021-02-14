import { ADD_TO_CART, CHANGE_AMOUNT, REMOVE_FROM_CART } from "../actionTypes";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const changeAmount = (amount, id) => ({
  type: CHANGE_AMOUNT,
  payload: { id, amount },
});
