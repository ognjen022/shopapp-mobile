import { StyleSheet } from "react-native";

import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: COLORS.primary,
  },
  errorMessageText: {
    color: "red",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  confirmButton: {
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  map: {
    height: 300,
  },
  wideInput: { width: 300 },
});

export default styles;
