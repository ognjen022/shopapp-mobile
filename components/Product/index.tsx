import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card, Paragraph, Badge } from "react-native-paper";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";

import { addToCart } from "../../store/actions/cartActions";
import COLORS from "../../consts/colors";
import styles from "./styles";

const LeftContent = props => <Avatar.Icon {...props} icon="electron-framework" />;

const RightContent = (product: any) => (
  <Card.Content>
    {product.discount > 0 ? <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text> : null}
    <Badge visible={product.discount > 0} size={35} style={styles.badge}>
      <Text style={styles.discountAmount}>-{product.discount}%</Text>
    </Badge>
    <Paragraph style={styles.priceParagraph}>${product.discount > 0 ? (product.price * (1 - product.discount * 0.01)).toFixed(2) : product.price}</Paragraph>
  </Card.Content>
);

const Product = ({ product, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Card style={styles.cardContainer} elevation={3}>
      <View>
        <Card.Title title={product.title} subtitle={product.subtitle} left={LeftContent} right={() => RightContent(product)} />
      </View>

      <Card.Cover source={{ uri: product.images[0] }} />
      <Card.Actions align="right" style={styles.cardActions}>
        <Button onPress={() => navigation.navigate("ProductDetail", { product })}>Details</Button>
        <Button onPress={() => dispatch(addToCart(product))}>
          <FontAwesome5 name="cart-plus" size={22} color={COLORS.primary} />
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default Product;
