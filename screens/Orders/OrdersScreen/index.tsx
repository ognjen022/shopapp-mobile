import React from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { HeaderButton } from "../../../components";
import styles from "./styles";

const OrdersScreen = () => {
  return (
    <View>
      <Text>OrdersScreen</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: () => null,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
