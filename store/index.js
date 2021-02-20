import { createStore, combineReducers } from "redux";
import cartReducer from "../store/reducers/cart";
import addressReducer from "../store/reducers/address";
import userReducer from "../store/reducers/user";

const store = createStore(
  combineReducers({
    cart: cartReducer,
    address: addressReducer,
    user: userReducer,
  })
);

export default store;
