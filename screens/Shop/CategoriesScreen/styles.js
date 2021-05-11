import { StyleSheet, Dimensions } from "react-native";

import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryCard: {
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    margin: Dimensions.get("window").width * 0.05,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    width: Dimensions.get("window").width * 0.4,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
  },
  categoryIcon: {
    textAlign: "center",
  },
  categoryText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});

export default styles;
