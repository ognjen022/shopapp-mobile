import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import COLORS from "../../consts/colors";
import styles from "./styles";

const PaymentMethod = ({ selectedMethod, iconName, setSelectedMethod, text, num }) => {
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
          <Foundation name={iconName} size={50} color={COLORS.primary} style={styles.paymentIcon} />
        ) : (
          <FontAwesome name={iconName} size={50} color={COLORS.primary} style={styles.paymentIcon} />
        )}
      </>
      <Text style={styles.paymentItemText}>{text}</Text>
      <AntDesign name="checkcircle" size={24} color={selectedMethod === num ? COLORS.accent : "white"} style={styles.checkIcon} />
    </TouchableOpacity>
  );
};

export default PaymentMethod;
