import { StyleSheet, Dimensions } from "react-native";

import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 0,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.primary,
    marginBottom: 15,
    width: "85%",
    alignSelf: "center",
  },
  label: {
    margin: 5,
    fontSize: 18,
    marginLeft: 20,
    color: COLORS.primary,
    alignSelf: "center",
  },
  submitButton: {
    marginVertical: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
  imageButton: {
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default styles;
