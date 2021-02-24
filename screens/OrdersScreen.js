import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { HeaderButton } from "../components";

const OrdersScreen = () => {
  return (
    <View>
      <Text>OrdersScreen</Text>
    </View>
  );
};

OrdersScreen.navigationOptions = navData => {
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

const styles = StyleSheet.create({});

export default OrdersScreen;
