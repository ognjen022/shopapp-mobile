import { createStore, combineReducers } from "redux";
import cartReducer from "../store/reducers/cart";
import addressReducer from "../store/reducers/address";

const store = createStore(
  combineReducers({
    cart: cartReducer,
    address: addressReducer,
  })
);

export default store;
