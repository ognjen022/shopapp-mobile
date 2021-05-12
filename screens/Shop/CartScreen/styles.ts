import { StyleSheet } from "react-native";

import COLORS from "../../../consts/colors";

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
  subGrayText: { fontWeight: "300", color: "gray" },
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
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  checkoutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  checkoutRowTitle: { marginLeft: 20, fontWeight: "300", color: "gray" },
});

export default styles;
