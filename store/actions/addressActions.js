import { SET_ADDRESS } from "../actionTypes";

export const setAddress = addressInfo => ({
  type: SET_ADDRESS,
  payload: addressInfo,
});
