import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { CartItem } from "../components";
import COLORS from "../consts/colors";

const CartScreen = ({ navigation }) => {
  const cartProducts = useSelector((state) => state.cart);
  const addressInfo = useSelector((state) => state.address);

  if (cartProducts.length === 0)
    return (
      <View style={styles.fallBackTextContainer}>
        <Text style={styles.fallBackText}>Your cart is empty.</Text>
      </View>
    );

  const getTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => (total = total + item.price * item.amount));
    return total.toFixed(2);
  };

  return (
    <ScrollView>
      <Text style={styles.cartTitle}>
        {cartProducts.length} {cartProducts.length === 1 ? "item" : "items"} in
        the cart.
      </Text>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id.toString()}
        data={cartProducts}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <Text style={styles.deliveryLocationText}>Delivery Location</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.deliveryLocationIcon}>
          <Entypo name="location" size={24} color={COLORS.primary} />
        </View>
        <View style={{ marginTop: 25, marginLeft: 10, width: 150 }}>
          {addressInfo.addressNumber &&
          addressInfo.street &&
          addressInfo.apartmentNumber &&
          addressInfo.zip &&
          addressInfo.city &&
          addressInfo.country ? (
            <>
              <Text style={{ fontWeight: "bold" }}>
                {addressInfo?.addressNumber}/{addressInfo?.apartmentNumber}{" "}
                {addressInfo?.street}
              </Text>
              <Text style={{ fontWeight: "300", color: "gray" }}>
                {addressInfo?.zip} {addressInfo?.city}, {addressInfo?.country}
              </Text>
            </>
          ) : (
            <Text style={{ fontWeight: "bold" }}>
              Please fill in all the address details correctly.
            </Text>
          )}
        </View>
        <View style={styles.deliveryLocationChevronIcon}>
          <TouchableOpacity>
            <Entypo
              name="chevron-right"
              size={32}
              color="black"
              onPress={() => navigation.navigate("UserAddress")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.paymentMethodText}>Payment Method</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.deliveryLocationIcon}>
          <Entypo name="credit-card" size={24} color={COLORS.primary} />
        </View>
        <View style={{ marginTop: 25, marginLeft: 10, width: 150 }}>
          <Text style={{ fontWeight: "bold" }}>VISA Classic</Text>
          <Text style={{ fontWeight: "300", color: "gray" }}>****-0921</Text>
        </View>
        <View style={styles.paymentMethodChevronIcon}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethod")}
          >
            <Entypo name="chevron-right" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.deliveryLocationText}>Order Info</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ marginLeft: 20, fontWeight: "300", color: "gray" }}>
          Subtotal
        </Text>
        <Text style={{ marginRight: 20 }}>
          ${(getTotalPrice(cartProducts) - 10).toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ marginLeft: 20, fontWeight: "300", color: "gray" }}>
          Shipping Cost
        </Text>
        <Text style={{ marginRight: 20 }}>+$10.00</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ marginLeft: 20, fontWeight: "300", color: "gray" }}>
          Total
        </Text>
        <Text style={{ marginRight: 20, fontSize: 22, fontWeight: "bold" }}>
          ${getTotalPrice(cartProducts)}
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Button
          mode="contained"
          style={styles.checkoutButton}
          color={COLORS.accent}
          icon="sticker-check-outline"
        >
          <Text style={{ color: "white" }}>Checkout</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

CartScreen.navigationOptions = {
  headerTitle: () => (
    <Text
      style={{
        textAlign: "center",
        fontWeight: "bold",
        color: COLORS.primary,
        fontSize: 18,
      }}
    >
      Cart
    </Text>
  ),
};

const styles = StyleSheet.create({
  cartTitle: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  deliveryLocationText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  paymentMethodText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  deliveryLocationIcon: {
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 30,
    width: 50,
  },
  deliveryLocationChevronIcon: {
    marginTop: 25,
    marginLeft: Dimensions.get("window").width / 4.2,
    width: 150,
  },
  paymentMethodChevronIcon: {
    marginTop: 25,
    marginLeft: Dimensions.get("window").width / 4.2,
    width: 150,
  },
  fallBackTextContainer: {
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },
  fallBackText: {
    fontSize: 30,
    fontWeight: "500",
  },
  totalContainer: {
    flex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButton: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    marginVertical: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default CartScreen;
