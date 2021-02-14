import React from "react";
import { Provider } from "react-redux";

import ShopNavigator from "./navigation/ShopNavigator";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
