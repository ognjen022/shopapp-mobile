import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { CartItem } from "../../../components";
import Product from "../../../models/Product";
import COLORS from "../../../consts/colors";
import styles from "./styles";

const CartScreen = ({ navigation }) => {
  const cartProducts = useSelector((state: any) => state.cart);
  const addressInfo = useSelector((state: any) => state.address);
  const userInfo = useSelector((state: any) => state.user);
  const SHIPPING_COST = 10;

  if (cartProducts.length === 0)
    return (
      <View style={styles.fallBackTextContainer}>
        <Text style={styles.fallBackText}>Your cart is empty.</Text>
      </View>
    );

  const getTotalPrice = (items: Product[]) => {
    let total = 0;
    items.forEach(item => {
      if (item.discount === 0) return (total = total + item.price * item.amount);
      else {
        return (total = total + item.price * (1 - item.discount * 0.01) * item.amount);
      }
    });
    return total.toFixed(2);
  };

  const getTotalLength = () => {
    let length = 0;
    cartProducts.forEach((item: Product) => {
      length = length + 1;
      if (item.amount > 1) {
        length = length - 1;
        length = length + item.amount;
      }
    });
    return length;
  };

  return (
    <ScrollView>
      <Text style={styles.cartTitle}>
        {getTotalLength()} {getTotalLength() === 1 ? "item" : "items"} in the cart.
      </Text>
      <FlatList horizontal keyExtractor={item => item.id.toString()} data={cartProducts} renderItem={({ item }) => <CartItem item={item} />} />

      <Text style={styles.subHeaderText}>Customer Info</Text>
      <TouchableOpacity onPress={() => navigation.navigate("UserInfo")} style={{ flexDirection: "row" }}>
        <View style={styles.deliveryLocationIcon}>
          <Entypo name="user" size={24} color={COLORS.primary} />
        </View>
        <View style={{ marginTop: 25, marginLeft: 10, width: 160 }}>
          {userInfo.firstName && userInfo.lastName && userInfo.phone && userInfo.email ? (
            <>
              <Text style={{ fontWeight: "bold" }}>
                {userInfo?.firstName} {userInfo?.lastName}{" "}
              </Text>

              <Text style={styles.subGrayText}>{userInfo?.phone}</Text>
              <Text style={styles.subGrayText}>{userInfo?.email.length > 12 ? userInfo.email.substring(0, 14) + "..." : userInfo.email}</Text>
            </>
          ) : (
            <Text style={{ fontWeight: "bold" }}>Please fill in your info correctly.</Text>
          )}
        </View>
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>Delivery Location</Text>
      <TouchableOpacity onPress={() => navigation.navigate("UserAddress")} style={{ flexDirection: "row" }}>
        <View style={styles.deliveryLocationIcon}>
          <Entypo name="location" size={24} color={COLORS.primary} />
        </View>
        <View style={{ marginTop: 25, marginLeft: 10, width: 200 }}>
          {addressInfo.addressNumber && addressInfo.street && addressInfo.apartmentNumber && addressInfo.zip && addressInfo.city && addressInfo.country ? (
            <>
              <Text style={{ fontWeight: "bold" }}>
                {addressInfo?.addressNumber}/{addressInfo?.apartmentNumber} {addressInfo?.street}
              </Text>
              <Text style={styles.subGrayText}>
                {addressInfo?.zip} {addressInfo?.city}, {addressInfo?.country}
              </Text>
            </>
          ) : (
            <Text style={{ fontWeight: "bold" }}>Please fill in all the address details correctly.</Text>
          )}
        </View>
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>Payment Method</Text>
      <TouchableOpacity onPress={() => navigation.navigate("PaymentMethod")} style={{ flexDirection: "row" }}>
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
          <Text style={styles.subGrayText}>****-0921</Text>
        </View>
        <View style={styles.chevronIcon}>
          <Entypo name="chevron-right" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>Order Info</Text>
      <View style={styles.checkoutRow}>
        <Text style={styles.checkoutRowTitle}>Subtotal</Text>
        <Text style={{ marginRight: 20 }}>${getTotalPrice(cartProducts)}</Text>
      </View>
      <View style={styles.checkoutRow}>
        <Text style={styles.checkoutRowTitle}>Shipping Cost</Text>
        <Text style={{ marginRight: 20 }}>+$10.00</Text>
      </View>
      <View style={styles.checkoutRow}>
        <Text style={styles.checkoutRowTitle}>Total</Text>
        <Text style={{ marginRight: 20, fontSize: 22, fontWeight: "bold" }}>${parseFloat(getTotalPrice(cartProducts)) + SHIPPING_COST}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Button mode="outlined" style={styles.checkoutButton} color={COLORS.accent} icon="sticker-check-outline">
          <Text>Checkout</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export const screenOptions = {
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

export default CartScreen;
