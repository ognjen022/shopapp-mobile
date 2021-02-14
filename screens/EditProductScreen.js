import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { PRODUCTS } from "../data/products";
import COLORS from "../consts/colors";

const EditProductScreen = ({ navigation }) => {
  const mode = navigation.getParam("mode");
  const id = navigation.getParam("id");

  const product = PRODUCTS.find((product) => product.id === id);
  const [productValues, setProductValues] = useState({
    ...product,
  });

  return (
    <View>
      {mode === "add" ? (
        <Text>AddProductScreen</Text>
      ) : (
        <ScrollView>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={productValues.title}
            onChangeText={(text) =>
              setProductValues({
                title: text,
              })
            }
          />
          <Text style={styles.label}>Subtitle</Text>
          <TextInput
            style={styles.input}
            value={productValues.subtitle}
            onChangeText={(text) =>
              setProductValues({
                subtitle: text,
              })
            }
          />
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            value={productValues.category}
            onChangeText={(text) =>
              setProductValues({
                category: text,
              })
            }
          />
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={productValues.price.toString()}
            onChangeText={(text) =>
              setProductValues({
                price: parseInt(text),
              })
            }
          />
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            value={productValues.amount.toString()}
            onChangeText={(text) =>
              setProductValues({
                amount: parseInt(text),
              })
            }
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={styles.input}
            value={productValues.description}
            onChangeText={(text) =>
              setProductValues({
                description: text,
              })
            }
          />
          <Button
            mode="contained"
            style={styles.submitButton}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff" }}>Save</Text>
          </Button>
        </ScrollView>
      )}
    </View>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const mode = navData.navigation.getParam("mode");
  return {
    headerTitle: () =>
      mode === "add" ? <Text>Add New Product</Text> : <Text>Edit Product</Text>,
    headerBackTitle: "Back",
  };
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 0,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.primary,
    marginBottom: 15,
    width: "85%",
    alignSelf: "center",
  },
  label: {
    margin: 5,
    fontSize: 18,
    marginLeft: 20,
    color: COLORS.primary,
    alignSelf: "center",
  },
  submitButton: {
    marginTop: 10,
    marginBottom: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default EditProductScreen;
