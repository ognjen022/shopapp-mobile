import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { HeaderButton } from "../components";

const MyProductsScreen = () => {
  return (
    <View>
      <Text>MyProductsScreen</Text>
    </View>
  );
};

MyProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => <Text>Your Products</Text>,
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Product"
          iconName="md-add-circle-outline"
          onPress={() => {
            navData.navigation.navigate("EditProduct", { mode: "add" });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default MyProductsScreen;
