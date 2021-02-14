import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import COLORS from "../consts/colors";

const PaymentMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const email = "wilson.casper@bernice.info";

  return (
    <ScrollView>
      <Text style={styles.title}>Choose a payment option</Text>
      <View style={styles.cardsTitleContainer}>
        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: "bold" }}>
          Credit Cards
        </Text>
        <Button style={styles.addCardButton}>Add a card</Button>
      </View>
      <TouchableOpacity
        style={{
          ...styles.paymentItem,
          borderWidth: selectedMethod === 1 ? 2 : 0,
          borderColor: COLORS.primary,
        }}
        onPress={() => setSelectedMethod(1)}
      >
        <FontAwesome
          name="cc-visa"
          size={50}
          color={COLORS.primary}
          style={styles.paymentIcon}
        />
        <Text style={styles.paymentItemText}>**** **** **** 5967</Text>
        <AntDesign
          name="checkcircle"
          size={24}
          color={selectedMethod === 1 ? COLORS.accent : "white"}
          style={styles.checkIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.paymentItem,
          borderWidth: selectedMethod === 3 ? 2 : 0,
          borderColor: COLORS.primary,
        }}
        onPress={() => setSelectedMethod(3)}
      >
        <FontAwesome
          name="cc-mastercard"
          size={50}
          color={COLORS.primary}
          style={styles.paymentIcon}
        />
        <Text style={styles.paymentItemText}>**** **** **** 5967</Text>
        <AntDesign
          name="checkcircle"
          size={24}
          color={selectedMethod === 3 ? COLORS.accent : "white"}
          style={styles.checkIcon}
        />
      </TouchableOpacity>
      <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: "bold" }}>
        PayPal
      </Text>
      <TouchableOpacity
        style={{
          ...styles.paymentItem,
          borderWidth: selectedMethod === 2 ? 2 : 0,
          borderColor: COLORS.primary,
        }}
        onPress={() => setSelectedMethod(2)}
      >
        <FontAwesome
          name="cc-paypal"
          size={50}
          color={COLORS.primary}
          style={styles.paymentIcon}
        />
        <Text style={styles.paymentItemText}>
          {email.length > 10 ? email.substring(0, 17) + "..." : email}
        </Text>
        <AntDesign
          name="checkcircle"
          size={24}
          color={selectedMethod === 2 ? COLORS.accent : "white"}
          style={styles.checkIcon}
        />
      </TouchableOpacity>
      <View style={styles.cardsTitleContainer}>
        <Text style={{ marginLeft: 25, fontSize: 20, fontWeight: "bold" }}>
          Cash
        </Text>
      </View>
      <TouchableOpacity
        style={{
          ...styles.paymentItem,
          borderWidth: selectedMethod === 4 ? 2 : 0,
          borderColor: COLORS.primary,
        }}
        onPress={() => setSelectedMethod(4)}
      >
        <Foundation
          style={styles.paymentIcon}
          name="dollar-bill"
          size={50}
          color={COLORS.primary}
        />
        <Text style={styles.paymentItemText}>Pay with cash on delivery</Text>
        <AntDesign
          name="checkcircle"
          size={24}
          color={selectedMethod === 4 ? COLORS.accent : "white"}
          style={styles.checkIcon}
        />
      </TouchableOpacity>
      <Button style={styles.saveButton} mode="contained">
        <Text style={{ fontSize: 16 }}>Save</Text>
      </Button>
    </ScrollView>
  );
};

PaymentMethodScreen.navigationOptions = () => {
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
        Payment Method
      </Text>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
    color: COLORS.primary,
  },
  cardsTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addCardButton: {
    marginRight: 25,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 30,
  },
  img: {
    width: 100,
    height: 80,
    marginLeft: 20,
  },
  paymentItem: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  paymentItemText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  paymentIcon: {
    marginLeft: 20,
  },
  checkIcon: {
    marginRight: 10,
  },
  saveButton: {
    marginHorizontal: 80,
    borderRadius: 30,
    marginVertical: 30,
    padding: 10,
  },
});

export default PaymentMethodScreen;
