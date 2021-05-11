import { StyleSheet, Dimensions } from "react-native";

import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
  },
  productImage: {
    width: 250,
    height: 250,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  productTitle: {
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  productDescription: {
    padding: 15,
    marginHorizontal: 20,
    width: Dimensions.get("window").width * 0.9,
    textAlign: "center",
    fontSize: 16,
    color: "gray",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCartButton: {
    borderColor: COLORS.accent,
    marginVertical: 20,
    width: 200,
    borderWidth: 1,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  shoppingIconContainer: {
    flexDirection: "row",
    padding: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
  shoppingIcon: {
    color: COLORS.primary,
    marginLeft: 10,
    textAlign: "left",
    marginTop: 5,
  },
  discountText: {
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  heartIcon: { marginTop: 8, marginRight: 20 },
});

export default styles;
