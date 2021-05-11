import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Avatar } from "react-native-paper";

import OrdersStack from "./OrdersStack";
import ProductsStack from "./ProductsStack";
import ShopStack from "./ShopStack";

import COLORS from "../consts/colors";

const Drawer = createDrawerNavigator();

const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 175,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar.Icon {...props} icon="electron-framework" backgroundColor={COLORS.primary} size={100} style={{ marginTop: 30 }} />
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>Shop App</Text>
    </View>
    <DrawerItemList {...props} />
  </View>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRoute="Shop"
      drawerContent={DrawerContent}
      drawerContentOptions={{
        activeTintColor: COLORS.accent,
      }}
    >
      <Drawer.Screen name="Shop" component={ShopStack} />
      <Drawer.Screen name="Orders" component={OrdersStack} />
      <Drawer.Screen name="Products" component={ProductsStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
