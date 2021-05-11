import React from "react";
import { View, Text, Image } from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { removeFromCart, changeAmount } from "../../store/actions/cartActions";
import styles from "./styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.chipContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.cartItemImage} source={{ uri: item.images[0] }} />
        <View>
          <View>
            <View style={{ width: 180 }}>
              <Text style={styles.titleSubtitle}>
                {item.title} - {item.subtitle}
              </Text>
            </View>
            <View>
              <Text style={styles.price}>
                ${item.discount > 0 ? (item.price * (1 - item.discount * 0.01) * item.amount).toFixed(2) : (item.price * item.amount).toFixed(2)}
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
            <AntDesign name="pluscircleo" size={30} color="gray" onPress={() => dispatch(changeAmount(1, item.id))} />
          </View>
        </View>
      </View>
      <FontAwesome onPress={() => dispatch(removeFromCart(item.id))} name="trash-o" size={30} color="red" />
    </View>
  );
};

export default CartItem;
