import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Button } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Spinner from "react-native-loading-spinner-overlay";

import { setAddress } from "../store/actions/addressActions";
import COLORS from "../consts/colors";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const UserAddressScreen = ({ navigation }) => {
  const addressInfo = useSelector((state) => state.address);

  const [country, setCountry] = useState(addressInfo.country);
  const [city, setCity] = useState(addressInfo.city);
  const [zip, setZip] = useState(addressInfo.zip);
  const [street, setStreet] = useState(addressInfo.street);
  const [addressNumber, setAddressNumber] = useState(addressInfo.addressNumber);
  const [apartment, setApartment] = useState(addressInfo.apartmentNumber);
  const [location, setLocation] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (country && street && city) {
          const locationDecoded = await Location.geocodeAsync(
            `${street} ${city} ${country}`
          );
          setLocation(locationDecoded[0]);
          setLoading(false);
          return;
        }
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const locationDecoded = await Location.reverseGeocodeAsync(
          location.coords
        );
        setCountry(locationDecoded[0]?.country);
        setCity(locationDecoded[0]?.city);
        setZip(locationDecoded[0]?.postalCode);
        setStreet(locationDecoded[0]?.street);
        setLocation(location.coords);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const handleForm = async () => {
    setFormSubmitted(true);
    if (!country || !city || !zip || !street || !addressNumber || !apartment) {
      setErrorMessage("You must fill in all fields to continue.");
      return;
    }
    let locationCoords = await Location.geocodeAsync(`${street} ${city}`);
    setLocation(locationCoords[0]);
    dispatch(
      setAddress({
        country,
        city,
        zip,
        street,
        addressNumber,
        apartmentNumber: apartment,
      })
    );
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={40} behavior="padding">
      <ScrollView>
        {location ? (
          <MapView
            initialRegion={{
              longitudeDelta: LONGITUDE_DELTA,
              latitudeDelta: LATITUDE_DELTA,
              ...location,
            }}
            style={styles.map}
          >
            <Marker coordinate={location} />
          </MapView>
        ) : (
          <MapView style={styles.map}></MapView>
        )}
        <Spinner
          visible={loading}
          textContent={"Loading your location..."}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <TextInput
            style={{ width: 300 }}
            error={!country && formSubmitted}
            mode="outlined"
            label="Country"
            value={country}
            onChangeText={(text) => setCountry(text)}
          />
          <TextInput
            style={{ width: 300 }}
            error={!city && formSubmitted}
            mode="outlined"
            label="City"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <TextInput
            style={{ width: 300 }}
            error={!zip && formSubmitted}
            mode="outlined"
            label="Zip/Postal Code"
            value={zip}
            onChangeText={(text) => setZip(text)}
          />
          <TextInput
            style={{ width: 300 }}
            error={!street && formSubmitted}
            mode="outlined"
            label="Street"
            value={street}
            onChangeText={(text) => setStreet(text)}
          />
          <View style={{ flexDirection: "row", padding: 10 }}>
            <TextInput
              style={{ width: 145, marginRight: 5 }}
              mode="outlined"
              error={!addressNumber && formSubmitted}
              label="Address number"
              value={addressNumber}
              onChangeText={(text) => setAddressNumber(text)}
            />
            <TextInput
              style={{ width: 145, marginLeft: 5 }}
              mode="outlined"
              error={!apartment && formSubmitted}
              label="Apartment number"
              value={apartment}
              onChangeText={(text) => setApartment(text)}
            />
          </View>

          {errorMessage ? (
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          ) : null}
          <Button
            onPress={handleForm}
            mode="outlined"
            color={COLORS.primary}
            style={styles.confirmButton}
          >
            CONFIRM
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

UserAddressScreen.navigationOptions = {
  headerTitle: () => (
    <Text
      style={{
        textAlign: "center",
        fontWeight: "bold",
        color: COLORS.primary,
        fontSize: 18,
      }}
    >
      Enter Adress Details
    </Text>
  ),
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: COLORS.primary,
  },
  errorMessageText: {
    color: "red",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  confirmButton: {
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  map: {
    height: 300,
  },
});

export default UserAddressScreen;
