import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome5 } from "@expo/vector-icons";

import { HeaderButton } from "../components";
import { PRODUCTS } from "../data/products";
import COLORS from "../consts/colors";

const MyProductsScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Product item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

MyProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => <Text>Your Products</Text>,
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
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Product"
          iconName="md-add-circle-outline"
          onPress={() => {
            navData.navigation.navigate("EditProduct", { mode: "add" });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const Product = ({ item, navigation }) => {
  return (
    <Card style={styles.cardContainer} elevation={3}>
      <Card.Title titleStyle={styles.cardTitle} title={item.title} />
      <Button
        style={styles.editButton}
        onPress={() => {
          navigation.navigate("EditProduct", {
            mode: "edit",
            id: item.id,
          });
        }}
      >
        <FontAwesome5 name="edit" size={22} color={COLORS.primary} />
      </Button>
      <View style={styles.contentContainer}>
        <Card.Cover style={styles.cardCover} source={{ uri: item.images[0] }} />
      </View>
    </Card>
  );
};

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

export default MyProductsScreen;
