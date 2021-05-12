import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Badge } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import { HeaderButton, Product } from "../../../components";
import { PRODUCTS } from "../../../data/products";
import COLORS from "../../../consts/colors";
import styles from "./styles";

const ShopScreen = ({ navigation, route }) => {
  const category = route.params?.category;
  const cartItems = useSelector((state: any) => state.cart);
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
    navigation.setOptions({
      headerRight: () => (
        <>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Cart"
              iconName={"md-cart"}
              onPress={() => {
                navigation.navigate("Cart");
              }}
            />
          </HeaderButtons>
          <Badge
            visible={length > 0}
            size={19}
            style={{
              backgroundColor: "red",
              top: 6,
              right: 3,
              position: "absolute",
            }}
          >
            {length > 0 ? <Text style={{ fontWeight: "bold", fontSize: 15 }}>{length}</Text> : null}
          </Badge>
        </>
      ),
    });
  }, [length]);

  return (
    <View>
      <FlatList data={items} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Product product={item} navigation={navigation} />} />
    </View>
  );
};

export const screenOptions = navData => {
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
  };
};

export default ShopScreen;
