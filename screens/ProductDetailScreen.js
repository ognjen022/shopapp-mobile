import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { SliderBox } from "react-native-image-slider-box";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { HeaderButton } from "../components";
import { addToCart } from "../store/actions/cartActions";
import COLORS from "../consts/colors";

const ProductDetailScreen = ({ navigation }) => {
  const product = navigation.getParam("product");

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.productContainer}>
        <SliderBox
          sliderBoxHeight={250}
          images={product.images}
          dotColor={COLORS.primary}
        />
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
        >
          <FontAwesome name="shopping-cart" size={24} color={COLORS.primary} />
          <Text
            style={{
              color: COLORS.primary,
              marginLeft: 10,
              textAlign: "left",
              marginTop: 5,
            }}
          >
            Shopping
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.productTitle}>
            {product.title} - {product.subtitle}
          </Text>
          <EvilIcons
            name="share-google"
            size={32}
            color={COLORS.primary}
            style={{ marginTop: 8, marginRight: 30 }}
          />
        </View>

        <Text style={styles.productDescription}>{product.description}</Text>

        <Text style={styles.productPrice}>
          $
          {product.discount > 0
            ? (product.price * (1 - product.discount * 0.01)).toFixed(2)
            : (product.price * 0.98).toFixed(2)}
        </Text>
        {product.discount ? (
          <Text
            style={{
              color: "gray",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            Discount {product.discount}%, Original Price - $
            {product.price.toFixed(2)}
          </Text>
        ) : null}

        <Button
          icon="cart-arrow-right"
          mode="outlined"
          onPress={() => dispatch(addToCart(product))}
          color={COLORS.accent}
          style={styles.addToCartButton}
        >
          Add to cart
        </Button>
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  const product = navData.navigation.getParam("product");
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
        {product.title}
      </Text>
    ),
    headerTitleStyle: { color: COLORS.primary, fontWeight: "bold" },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName="md-heart"
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
  },
  productImage: {
    width: 250,
    height: 250,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  productTitle: {
    fontSize: 29,
    fontWeight: "bold",
    justifyContent: "space-between",
    textAlign: "center",
    marginLeft: 30,
    width: 350,
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 10,
  },
  productDescription: {
    padding: 15,
    margin: 20,
    width: Dimensions.get("window").width * 0.9,
    textAlign: "left",
    fontSize: 16,
    color: "gray",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCartButton: {
    borderColor: COLORS.accent,
    marginVertical: 20,
    width: 200,
    borderWidth: 1,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default ProductDetailScreen;
