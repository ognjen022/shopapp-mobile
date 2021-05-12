import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CartScreen, ProductDetailScreen, ShopScreen, UserAddressScreen, PaymentMethodScreen, UserInfoScreen, CategoriesScreen } from "../screens";
import { screenOptions as categoriesScreenOptions } from "../screens/Shop/CategoriesScreen";
import { screenOptions as shopScreenOptions } from "../screens/Shop/ShopScreen";
import { screenOptions as cartScreenOptions } from "../screens/Shop/CartScreen";
import { screenOptions as userAddressScreenOptions } from "../screens/Shop/UserAddressScreen";
import { screenOptions as userInfoScreenOptions } from "../screens/Shop/UserInfoScreen";
import { screenOptions as paymentMethodScreenOptions } from "../screens/Shop/PaymentMethodScreen";
import { screenOptions as productDetailScreenOptions } from "../screens/Shop/ProductDetailScreen";

const Stack = createStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} options={categoriesScreenOptions} />
      <Stack.Screen name="Shop" component={ShopScreen} options={shopScreenOptions} />
      <Stack.Screen name="Cart" component={CartScreen} options={cartScreenOptions} />
      <Stack.Screen name="UserAddress" component={UserAddressScreen} options={userAddressScreenOptions} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} options={userInfoScreenOptions} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} options={paymentMethodScreenOptions} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={productDetailScreenOptions} />
    </Stack.Navigator>
  );
};

export default ShopStack;
