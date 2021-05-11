import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  originalPrice: {
    top: 8,
    right: 20,
    color: "gray",
    textDecorationLine: "line-through",
  },
  badge: { top: -20, right: -25, backgroundColor: "red" },
  cardContainer: {
    width: "85%",
    borderRadius: 10,
    margin: 20,
    alignSelf: "center",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceParagraph: {
    fontSize: 18,
    color: "gray",
    right: -10,
    fontWeight: "bold",
  },
  discountAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
