import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { HeaderButton } from "../components";
import COLORS from "../consts/colors";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Shop", { category: "Electronics" })}>
        <View style={styles.categoryCard}>
          <AntDesign style={styles.categoryIcon} name="hdd" size={45} color="white" />
          <Text style={styles.categoryText}>Electronics</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Shop", { category: "Computing" })}>
        <View style={styles.categoryCard}>
          <MaterialIcons style={styles.categoryIcon} name="computer" size={45} color="white" />
          <Text style={styles.categoryText}>Computing</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Shop", { category: "Accessories" })}>
        <View style={styles.categoryCard}>
          <FontAwesome5 style={styles.categoryIcon} name="headphones" size={45} color="white" />
          <Text style={styles.categoryText}>Accessories</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

CategoriesScreen.navigationOptions = navData => {
  const cartTotalLength = navData.navigation.getParam("length") || 0;

  return {
    headerTitle: () => (
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: COLORS.primary,
          fontSize: 18,
        }}
      >
        Categories
      </Text>
    ),
    headerTitleStyle: { color: COLORS.primary, fontWeight: "bold" },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={"md-cart"}
            onPress={() => {
              navData.navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
        <Badge
          visible={cartTotalLength > 0}
          size={19}
          style={{
            backgroundColor: "red",
            top: 6,
            right: 3,
            position: "absolute",
          }}
        >
          {cartTotalLength > 0 ? <Text style={{ fontWeight: "bold", fontSize: 15 }}>{cartTotalLength}</Text> : null}
        </Badge>
      </>
    ),
  };
};

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

export default CategoriesScreen;
