import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";

import { addToCart } from "../store/actions/cartActions";
import COLORS from "../consts/colors";

const LeftContent = (props) => (
  <Avatar.Icon {...props} icon="electron-framework" />
);

const Product = ({ product, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Card style={styles.cardContainer} elevation={3}>
      <Card.Title
        title={product.title}
        subtitle={product.subtitle}
        left={LeftContent}
      />
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
});

export default Product;
