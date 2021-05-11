import { StyleSheet } from "react-native";
import COLORS from "../../../consts/colors";

const styles = StyleSheet.create({
  cardContainer: {
    width: "85%",
    borderRadius: 10,
    margin: 20,
    marginBottom: 0,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 15,
    color: COLORS.primary,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cardCover: {
    aspectRatio: 1.5,
    height: 50,
    marginBottom: 15,
    marginLeft: 15,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    position: "absolute",
    right: 0,
    top: 0,
    marginRight: -10,
  },
});

export default styles;
