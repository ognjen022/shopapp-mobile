import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { setUser } from "../store/actions/userActions";
import COLORS from "../consts/colors";

const UserInfoScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const emailValidator = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

  const onSubmit = () => {
    setFormSubmitted(true);

    if (!firstName || !lastName || !email || !phone) {
      setError("All fields are mandatory.");
      return;
    }

    if (!email.match(emailValidator)) {
      setEmailError("Invalid e-mail address");
      setError("");
      return;
    }

    setEmailError("");
    setError("");

    const user = {
      firstName,
      lastName,
      email,
      phone,
    };

    dispatch(setUser(user));

    navigation.goBack();
  };
  return (
    <ScrollView>
      <Text style={styles.title}>Please fill in the fields below.</Text>
      <View style={styles.nameIconContainer}>
        <FontAwesome5
          style={styles.nameIcon}
          name="user-alt"
          size={30}
          color={COLORS.primary}
        />
      </View>

      <View style={styles.nameContainer}>
        <TextInput
          mode="outlined"
          style={styles.namesInput}
          label="First Name"
          error={formSubmitted && !firstName}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          mode="outlined"
          style={styles.namesInput}
          error={formSubmitted && !lastName}
          label="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <View style={styles.inputIconContainer}>
        <Entypo
          style={styles.nameIcon}
          name="email"
          size={30}
          color={COLORS.primary}
        />
      </View>
      <View>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="E-mail"
          value={email}
          error={formSubmitted && (!email || emailError)}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.emailAddressError}>{emailError}</Text>
      </View>

      <View style={styles.inputIconContainer}>
        <Entypo
          style={styles.nameIcon}
          name="phone"
          size={30}
          color={COLORS.primary}
        />
      </View>
      <View style={styles.nameContainer}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Phone"
          error={formSubmitted && !phone}
          value={phone}
          onChangeText={(text) => setPhone(text.replace(/[^+0-9]/g, ""))}
        />
      </View>

      {error ? <Text style={styles.errorMessageText}>{error}</Text> : null}

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

UserInfoScreen.navigationOptions = {
  headerTitle: () => (
    <Text
      style={{
        textAlign: "center",
        fontWeight: "bold",
        color: COLORS.primary,
        fontSize: 18,
      }}
    >
      Customer Info
    </Text>
  ),
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
    color: COLORS.primary,
  },
  namesInput: {
    width: Dimensions.get("window").width * 0.43,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    width: Dimensions.get("window").width * 0.93,
    marginLeft: "auto",
    marginRight: "auto",
  },
  nameContainer: {
    flexDirection: "row",
  },
  nameIcon: {
    textAlign: "center",
  },
  nameIconContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 30,
    padding: 10,
  },
  inputIconContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 15,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 30,
    padding: 10,
  },
  submitButton: {
    marginVertical: 40,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 30,
  },
  errorMessageText: {
    color: "red",
    fontSize: 20,
    marginTop: 15,
    textAlign: "center",
  },
  emailAddressError: {
    fontSize: 17,
    marginLeft: Dimensions.get("window").width / 28,
    color: "red",
    marginTop: 5,
  },
});

export default UserInfoScreen;
