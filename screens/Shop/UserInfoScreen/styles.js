import { StyleSheet, Dimensions } from "react-native";

import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
    color: COLORS.primary,
  },
  namesInput: {
    width: Dimensions.get("window").width * 0.43,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    width: Dimensions.get("window").width * 0.93,
    marginLeft: "auto",
    marginRight: "auto",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  nameIcon: {
    textAlign: "center",
  },
  nameIconContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 30,
    padding: 10,
  },
  inputIconContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 15,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 30,
    padding: 10,
  },
  submitButton: {
    marginVertical: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
  errorMessageText: {
    color: "red",
    fontSize: 20,
    marginTop: 15,
    textAlign: "center",
  },
  emailAddressError: {
    fontSize: 17,
    marginLeft: Dimensions.get("window").width / 28,
    color: "red",
    marginTop: 5,
  },
  firstNameError: {
    fontSize: 17,
    color: "red",
    width: Dimensions.get("window").width / 2.5,
    marginTop: 5,
  },
  lastNameError: {
    fontSize: 17,
    width: Dimensions.get("window").width / 2.5,
    color: "red",
    marginTop: 5,
  },
});

export default styles;
