import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../consts/colors";

const CustomHeaderButton = props => {
  return <HeaderButton {...props} IconComponent={Ionicons} iconSize={30} color={COLORS.primary} />;
};

export default CustomHeaderButton;
