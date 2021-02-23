import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Paragraph, Badge } from "react-native-paper";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";

import { addToCart } from "../store/actions/cartActions";
import COLORS from "../consts/colors";

const LeftContent = (props) => (
  <Avatar.Icon {...props} icon="electron-framework" />
);

const RightContent = (product) => (
  <Card.Content>
    <Text
      style={{
        top: 8,
        right: 20,
        color: "gray",
        textDecorationLine: "line-through",
      }}
    >
      ${product.price}
    </Text>
    <Badge
      visible={product.discount > 0}
      size={35}
      style={{ top: -20, right: -25, backgroundColor: "red" }}
    >
      <Text style={styles.discountAmount}>-{product.discount}%</Text>
    </Badge>
    <Paragraph style={styles.priceParagraph}>
      $
      {product.discount > 0
        ? (product.price * (1 - product.discount * 0.01)).toFixed(2)
        : product.price}
    </Paragraph>
  </Card.Content>
);

const Product = ({ product, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Card style={styles.cardContainer} elevation={3}>
      <View style={{}}>
        <Card.Title
          title={product.title}
          subtitle={product.subtitle}
          left={LeftContent}
          right={() => RightContent(product)}
        />
      </View>

      <Card.Cover source={{ uri: product.images[0] }} />
      <Card.Actions align="right" style={styles.cardActions}>
        <Button
          onPress={() => navigation.navigate("ProductDetail", { product })}
        >
          Details
        </Button>
        <Button onPress={() => dispatch(addToCart(product))}>
          <FontAwesome5 name="cart-plus" size={22} color={COLORS.primary} />
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "85%",
    borderRadius: 10,
    margin: 20,
    alignSelf: "center",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceParagraph: {
    fontSize: 18,
    color: "gray",
    right: -10,
    fontWeight: "bold",
  },
  discountAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Product;
