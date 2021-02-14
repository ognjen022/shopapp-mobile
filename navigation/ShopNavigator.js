import React from "react";
import { Dimensions, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Avatar } from "react-native-paper";

import {
  CartScreen,
  EditProductScreen,
  MyProductsScreen,
  OrdersScreen,
  ProductDetailScreen,
  ShopScreen,
  UserAddressScreen,
  PaymentMethodScreen,
} from "../screens";
import COLORS from "../consts/colors";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
  },
};

const StackNavigator = createStackNavigator({
  Shop: ShopScreen,
  Cart: CartScreen,
  UserAddress: UserAddressScreen,
  PaymentMethod: PaymentMethodScreen,
  ProductDetail: ProductDetailScreen,
});

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const ProductsNavigator = createStackNavigator(
  {
    Products: MyProductsScreen,
    EditProduct: EditProductScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 175,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar.Icon
        {...props}
        icon="electron-framework"
        backgroundColor={COLORS.primary}
        size={100}
        style={{ marginTop: 30 }}
      />
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
        Shop App
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainNavigator = createDrawerNavigator(
  {
    Shop: StackNavigator,
    Orders: OrdersNavigator,
    Products: ProductsNavigator,
  },
  {
    contentOptions: {
      activeTintColor: COLORS.accent,
    },
    drawerWidth: Dimensions.get("window").width * 0.5,
    contentComponent: DrawerContent,
  }
);

export default createAppContainer(MainNavigator);
