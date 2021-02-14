import React from "react";
import { View, StyleSheet, FlatList, Platform, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import COLORS from "../consts/colors";
import { HeaderButton, Product } from "../components";
import { PRODUCTS } from "../data/products";

const ShopScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Product product={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

ShopScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: COLORS.primary,
          fontSize: 18,
        }}
      >
        Shop
      </Text>
    ),
    headerTitleStyle: { color: COLORS.primary, fontWeight: "bold" },
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
          title="Cart"
          iconName={Platform.OS === "ios" ? "md-cart" : "shopping-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShopScreen;
