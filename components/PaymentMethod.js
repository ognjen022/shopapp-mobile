import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import COLORS from "../consts/colors";

const PaymentMethod = ({
  selectedMethod,
  iconName,
  setSelectedMethod,
  text,
  num,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.paymentItem,
        borderWidth: selectedMethod === num ? 2 : 0,
        borderColor: COLORS.primary,
      }}
      onPress={() => setSelectedMethod(num)}
    >
      <>
        {iconName === "dollar-bill" ? (
          <Foundation
            name={iconName}
            size={50}
            color={COLORS.primary}
            style={styles.paymentIcon}
          />
        ) : (
          <FontAwesome
            name={iconName}
            size={50}
            color={COLORS.primary}
            style={styles.paymentIcon}
          />
        )}
      </>
      <Text style={styles.paymentItemText}>{text}</Text>
      <AntDesign
        name="checkcircle"
        size={24}
        color={selectedMethod === num ? COLORS.accent : "white"}
        style={styles.checkIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default PaymentMethod;
