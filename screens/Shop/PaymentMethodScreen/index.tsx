import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import { PaymentMethod } from "../../../components";
import COLORS from "../../../consts/colors";
import styles from "./styles";

const PaymentMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const email = "wilson.casper@bernice.info";

  return (
    <ScrollView>
      <Text style={styles.title}>Choose a payment option</Text>
      <View style={styles.cardsTitleContainer}>
        <Text style={styles.subTitle}>Credit Cards</Text>
        <Button style={styles.addCardButton}>Add a card</Button>
      </View>
      <PaymentMethod num={1} iconName="cc-visa" selectedMethod={selectedMethod} text="**** **** **** 5967" setSelectedMethod={setSelectedMethod} />
      <PaymentMethod num={2} iconName="cc-mastercard" text="**** **** **** 5967" selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />

      <Text style={styles.subTitle}>PayPal</Text>
      <PaymentMethod num={3} iconName="cc-paypal" text={email} selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />

      <View style={styles.cardsTitleContainer}>
        <Text style={styles.subTitle}>Cash</Text>
      </View>
      <PaymentMethod num={4} iconName="dollar-bill" text="Pay with cash on delivery" selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
      <Button style={styles.saveButton} mode="contained">
        <Text style={{ fontSize: 16 }}>Save</Text>
      </Button>
    </ScrollView>
  );
};

export const screenOptions = () => {
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

export default PaymentMethodScreen;
