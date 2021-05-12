import { StyleSheet } from "react-native";

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

export default styles;
