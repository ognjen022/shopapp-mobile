import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SliderBox } from "react-native-image-slider-box";
import { Button } from "react-native-paper";
import { PRODUCTS } from "../data/products";
import COLORS from "../consts/colors";

const EditProductScreen = ({ navigation }) => {
  const mode = navigation.getParam("mode");
  const id = navigation.getParam("id");
  const product = PRODUCTS.find((product) => product.id === id);
  const initialState =
    product && Object.keys(product).length > 0
      ? { ...product }
      : {
          title: "",
          subtitle: "",
          category: "",
          price: "",
          discount: "",
          description: "",
          images: [],
        };

  const [productValues, setProductValues] = useState(initialState);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProductValues({
        ...productValues,
        images: [...productValues.images, result.uri],
      });
    }
  };

  const onSubmit = () => {
    console.log(productValues);
  };

  return (
    <ScrollView>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={productValues.title}
        onChangeText={(text) =>
          setProductValues({
            ...productValues,
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
            ...productValues,
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
            ...productValues,
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
            ...productValues,
            price: !isNaN(text) ? parseInt(text) : "",
          })
        }
      />

      <Text style={styles.label}>Discount (in %)</Text>
      <TextInput
        style={styles.input}
        value={productValues.discount.toString()}
        onChangeText={(text) =>
          setProductValues({
            ...productValues,
            discount: !isNaN(text) ? parseInt(text) : "",
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
            ...productValues,
            description: text,
          })
        }
      />
      <Text style={styles.label}>Images</Text>
      {productValues.images.length > 0 ? (
        <SliderBox
          sliderBoxHeight={250}
          images={productValues?.images}
          dotColor={COLORS.primary}
        />
      ) : null}

      <Button style={styles.imageButton} onPress={pickImage}>
        <Text style={{ color: "#fff" }}>Choose an image</Text>
      </Button>

      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => onSubmit()}
      >
        <Text style={{ color: "#fff" }}>Save</Text>
      </Button>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const mode = navData.navigation.getParam("mode");
  return {
    headerTitle: () =>
      mode === "add" ? (
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.primary,
            fontSize: 18,
          }}
        >
          Add New Product
        </Text>
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.primary,
            fontSize: 18,
          }}
        >
          Edit Product
        </Text>
      ),
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
    marginVertical: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
  imageButton: {
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default EditProductScreen;
