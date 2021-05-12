import React from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome5 } from "@expo/vector-icons";

import { HeaderButton } from "../../../components";
import { PRODUCTS } from "../../../data/products";
import COLORS from "../../../consts/colors";
import styles from "./styles";

const MyProductsScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList data={PRODUCTS} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Product item={item} navigation={navigation} />} />
    </View>
  );
};

export const screenOptions = navData => {
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
        Your Products
      </Text>
    ),
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

export default MyProductsScreen;
