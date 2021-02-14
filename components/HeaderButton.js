import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import COLORS from "../consts/colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Platform.OS === "ios" ? Ionicons : FontAwesome}
      iconSize={30}
      color={Platform.OS === "android" ? "white" : COLORS.primary}
    />
  );
};

export default CustomHeaderButton;
