import React, { useState } from "react";
import { View, ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { setUser } from "../../../store/actions/userActions";
import COLORS from "../../../consts/colors";
import styles from "./styles";

const UserInfoScreen = ({ navigation }) => {
  const userInfo = useSelector((state: any) => state.user);

  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const emailValidator = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
  const nameValidator = /^[A-Za-z\s]*$/;

  const onSubmit = () => {
    setFormSubmitted(true);

    if (!firstName || !lastName || !email || !phone) {
      setError("You must fill in all fields to continue");
    }

    if (!firstName.match(nameValidator)) {
      setFirstNameError("Invalid name, only letters allowed");
    } else {
      setFirstNameError("");
    }

    if (!lastName.match(nameValidator)) {
      setLastNameError("Invalid name, only letters allowed");
    } else {
      setLastNameError("");
    }

    if (!email.match(emailValidator)) {
      setEmailError("Invalid e-mail address");
    } else {
      setEmailError("");
    }

    if (firstName && lastName && email && phone) setError("");

    if (!firstName.match(nameValidator) || !lastName.match(nameValidator) || !email.match(emailValidator) || !firstName || !lastName || !email || !phone) return;

    setFirstNameError("");
    setLastNameError("");
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
    <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="height">
      <ScrollView>
        <Text style={styles.title}>Please fill in the fields below.</Text>
        <View style={styles.nameIconContainer}>
          <FontAwesome5 style={styles.nameIcon} name="user-alt" size={30} color={COLORS.primary} />
        </View>

        <View style={styles.nameContainer}>
          <View>
            <TextInput
              mode="outlined"
              style={styles.namesInput}
              label="First Name"
              error={formSubmitted && (!firstName || firstNameError)}
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
            {firstNameError ? <Text style={styles.firstNameError}>{firstNameError}</Text> : null}
          </View>

          <View>
            <TextInput
              mode="outlined"
              style={styles.namesInput}
              error={formSubmitted && (!lastName || lastNameError)}
              label="Last Name"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
            {lastNameError ? <Text style={styles.lastNameError}>{lastNameError}</Text> : null}
          </View>
        </View>

        <View style={styles.inputIconContainer}>
          <Entypo style={styles.nameIcon} name="email" size={30} color={COLORS.primary} />
        </View>
        <View>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="E-mail"
            value={email}
            error={formSubmitted && (!email || emailError)}
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
          {emailError ? <Text style={styles.emailAddressError}>{emailError}</Text> : null}
        </View>

        <View style={styles.inputIconContainer}>
          <Entypo style={styles.nameIcon} name="phone" size={30} color={COLORS.primary} />
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Phone"
            keyboardType="number-pad"
            error={formSubmitted && !phone}
            value={phone}
            onChangeText={text => setPhone(text.replace(/[^+0-9]/g, ""))}
          />
        </View>

        {error ? <Text style={styles.errorMessageText}>{error}</Text> : null}

        <Button mode="contained" style={styles.submitButton} onPress={() => onSubmit()}>
          <Text style={{ color: "#fff" }}>Save</Text>
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
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

export default UserInfoScreen;
