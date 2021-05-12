import { StyleSheet } from "react-native";

import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  containerStyle: { backgroundColor: "white", padding: 20 },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
    color: COLORS.primary,
  },
  subTitle: { marginLeft: 25, fontSize: 20, fontWeight: "bold" },
  cardsTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addCardButton: {
    marginRight: 25,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 30,
  },
  saveButton: {
    marginHorizontal: 80,
    borderRadius: 30,
    marginVertical: 30,
    padding: 10,
  },
});

export default styles;
