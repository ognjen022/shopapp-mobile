import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProductScreen = ({ navigation }) => {
  const mode = navigation.getParam("mode");
  return (
    <View>
      {mode === "add" ? (
        <Text>AddProductScreen</Text>
      ) : (
        <Text>EditProductScreen</Text>
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

const styles = StyleSheet.create({});

export default EditProductScreen;
