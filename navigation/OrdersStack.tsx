import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { OrdersScreen } from "../screens";
import { screenOptions as ordersScreenOptions } from "../screens/Orders/OrdersScreen";

const Stack = createStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={OrdersScreen} options={ordersScreenOptions} />
    </Stack.Navigator>
  );
};

export default OrdersStack;
