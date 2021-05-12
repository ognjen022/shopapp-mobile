import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chipContainer: {
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-around",
  },
  titleSubtitle: {
    fontWeight: "bold",
    marginLeft: 25,
    fontSize: 16,
  },
  price: {
    marginLeft: 30,
    color: "gray",
    fontSize: 16,
  },
  amountModifier: {
    flexDirection: "row",
    marginLeft: 17,
    marginTop: 40,
    padding: 13,
  },
  cartItemImage: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 20,
  },
  itemAmount: {
    marginHorizontal: 30,
    marginTop: 5,
    fontSize: 18,
    fontWeight: "200",
  },
  itemPriceText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
    marginTop: 30,
  },
});

export default styles;
