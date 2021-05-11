import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Badge } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import { HeaderButton, Product } from "../components";
import { PRODUCTS } from "../data/products";
import COLORS from "../consts/colors";

const ShopScreen = ({ navigation }) => {
  const category = navigation.getParam("category");
  const cartItems = useSelector(state => state.cart);
  const items = PRODUCTS.filter(item => item.category === category);
  const [length, setLength] = useState(0);

  const handleUpdateTotalLength = () => {
    let length = 0;
    cartItems.forEach(item => {
      length = length + 1;
      if (item.amount > 1) {
        length = length - 1;
        length = length + item.amount;
      }
    });
    setLength(length);
  };

  useEffect(() => {
    handleUpdateTotalLength();
  }, [cartItems, handleUpdateTotalLength]);

  useEffect(() => {
    navigation.setParams({ length });
  }, [length]);

  return (
    <View>
      <FlatList data={items} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Product product={item} navigation={navigation} />} />
    </View>
  );
};

ShopScreen.navigationOptions = navData => {
  const cartTotalLength = navData.navigation.getParam("length") || 0;

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
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName="menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
    headerRight: () => (
      <>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={"md-cart"}
            onPress={() => {
              navData.navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
        <Badge
          visible={cartTotalLength > 0}
          size={19}
          style={{
            backgroundColor: "red",
            top: 6,
            right: 3,
            position: "absolute",
          }}
        >
          {cartTotalLength > 0 ? <Text style={{ fontWeight: "bold", fontSize: 15 }}>{cartTotalLength}</Text> : null}
        </Badge>
      </>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShopScreen;
