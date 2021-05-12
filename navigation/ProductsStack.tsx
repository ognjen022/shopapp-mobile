import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MyProductsScreen, EditProductScreen } from "../screens";
import { screenOptions as productsScreenOptions } from "../screens/Products/MyProductsScreen";
import { screenOptions as editProductScreenOptions } from "../screens/Products/EditProductScreen";

const Stack = createStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={MyProductsScreen} options={productsScreenOptions} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} options={editProductScreenOptions} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
