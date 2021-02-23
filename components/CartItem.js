import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { removeFromCart, changeAmount } from "../store/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.chipContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.cartItemImage} source={{ uri: item.images[0] }} />
        <View>
          <View>
            <View style={{ width: 180 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 25,
                  fontSize: 16,
                }}
              >
                {item.title} - {item.subtitle}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 30,
                  color: "gray",
                  fontSize: 16,
                }}
              >
                $
                {item.discount > 0
                  ? (
                      item.price *
                      (1 - item.discount * 0.01) *
                      item.amount
                    ).toFixed(2)
                  : (item.price * item.amount).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.amountModifier}>
            <AntDesign
              name="minuscircleo"
              size={30}
              color={item.amount === 1 ? "lightgray" : "gray"}
              onPress={() => {
                if (item.amount === 1) return;
                dispatch(changeAmount(-1, item.id));
              }}
            />
            <Text style={styles.itemAmount}>{item.amount}</Text>
            <AntDesign
              name="pluscircleo"
              size={30}
              color="gray"
              onPress={() => dispatch(changeAmount(1, item.id))}
            />
          </View>
        </View>
      </View>
      <FontAwesome
        onPress={() => dispatch(removeFromCart(item.id))}
        name="trash-o"
        size={30}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-around",
  },
  amountModifier: {
    flexDirection: "row",
    marginLeft: 17,
    marginTop: 40,
    padding: 13,
  },
  cartItemImage: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 20,
  },
  itemAmount: {
    marginHorizontal: 30,
    marginTop: 5,
    fontSize: 18,
    fontWeight: "200",
  },
  itemPriceText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
    marginTop: 30,
  },
});

export default CartItem;
