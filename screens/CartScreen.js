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
  const userInfo = useSelector((state) => state.user);

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

      <Text style={styles.subHeaderText}>Customer Info</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserInfo")}
        style={{ flexDirection: "row" }}
      >
        <View style={styles.deliveryLocationIcon}>
          <Entypo name="user" size={24} color={COLORS.primary} />
        </View>
        <View style={{ marginTop: 25, marginLeft: 10, width: 150 }}>
          {userInfo.firstName &&
          userInfo.lastName &&
          userInfo.phone &&
          userInfo.email ? (
            <>
              <Text style={{ fontWeight: "bold" }}>
                {userInfo?.firstName} {userInfo?.lastName}{" "}
              </Text>

              <Text style={{ fontWeight: "300", color: "gray" }}>
                {userInfo?.phone}
              </Text>
              <Text style={{ fontWeight: "300", color: "gray" }}>
                {userInfo?.email.length > 12
                  ? userInfo.email.substring(0, 14) + "..."
                  : userInfo.email}
              </Text>
            </>
          ) : (
            <Text style={{ fontWeight: "bold" }}>
              Please fill in your info correctly.
            </Text>
          )}
        </View>
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>Delivery Location</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserAddress")}
        style={{ flexDirection: "row" }}
      >
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
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>Payment Method</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("PaymentMethod")}
        style={{ flexDirection: "row" }}
      >
        <View style={styles.deliveryLocationIcon}>
          <Entypo name="credit-card" size={24} color={COLORS.primary} />
        </View>
        <View
          style={{
            marginTop: 25,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>VISA Classic</Text>
          <Text style={{ fontWeight: "300", color: "gray" }}>****-0921</Text>
        </View>
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>Order Info</Text>
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
          mode="outlined"
          style={styles.checkoutButton}
          color={COLORS.accent}
          icon="sticker-check-outline"
        >
          <Text>Checkout</Text>
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
  subHeaderText: {
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
    height: 50,
    borderColor: "white",
    padding: 11.5,
    borderRadius: 30,
    width: 50,
  },
  chevronIcon: {
    marginTop: 25,
    marginLeft: "auto",
    marginRight: 15,
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
