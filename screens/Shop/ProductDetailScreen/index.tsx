import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Badge } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { SliderBox } from "react-native-image-slider-box";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { HeaderButton } from "../../../components";
import { addToCart } from "../../../store/actions/cartActions";
import COLORS from "../../../consts/colors";
import styles from "./styles";

const ProductDetailScreen = ({ navigation, route }) => {
  const product = route.params?.product;
  const cartItems = useSelector((state: any) => state.cart);
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();

  const handleUpdateTotalLength = () => {
    let length = 0;
    cartItems.forEach(item => {
      length = length + 1;
      if (item.amount > 1) {
        length = length - 1;
        length = length + item.amount;
      }
    });
    setLength(length);
  };

  useEffect(() => {
    handleUpdateTotalLength();
  }, [cartItems, handleUpdateTotalLength]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Cart"
              iconName={"md-cart"}
              onPress={() => {
                navigation.navigate("Cart");
              }}
            />
          </HeaderButtons>
          <Badge
            visible={length > 0}
            size={19}
            style={{
              backgroundColor: "red",
              top: 6,
              right: 3,
              position: "absolute",
            }}
          >
            {length > 0 ? <Text style={{ fontWeight: "bold", fontSize: 15 }}>{length}</Text> : null}
          </Badge>
        </>
      ),
    });
  }, [length]);

  return (
    <ScrollView>
      <View style={styles.productContainer}>
        <SliderBox sliderBoxHeight={250} images={product.images} dotColor={COLORS.primary} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.shoppingIconContainer}>
            <FontAwesome name="shopping-cart" size={24} color={COLORS.primary} />
            <Text style={styles.shoppingIcon}>Shopping</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="md-heart" size={32} color={COLORS.primary} style={styles.heartIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.productTitle}>
          {product.title} - {product.subtitle}
        </Text>

        <Text style={styles.productDescription}>{product.description}</Text>

        <Text style={styles.productPrice}>${product.discount > 0 ? (product.price * (1 - product.discount * 0.01)).toFixed(2) : (product.price * 0.98).toFixed(2)}</Text>
        {product.discount ? (
          <Text style={styles.discountText}>
            Discount {product.discount}%, Original Price - ${product.price.toFixed(2)}
          </Text>
        ) : null}

        <Button icon="cart-arrow-right" mode="outlined" onPress={() => dispatch(addToCart(product))} color={COLORS.accent} style={styles.addToCartButton}>
          Add to cart
        </Button>
      </View>
    </ScrollView>
  );
};

export const screenOptions = navData => {
  const product = navData.route.params?.product;

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
  };
};

export default ProductDetailScreen;
