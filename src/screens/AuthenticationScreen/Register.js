import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomIconButton, Dropdown } from "../../components/";
// import CustomIconButton from "../../components/CustomIconButton";

const Register = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const onGenderChange = (itemValue, itemIndex) => {
    setGender(itemValue);
  };

  const handleButtonPress = () => {
    // navigation.navigate("Login");
    console.log(
      checked,
      gender,
      firstName,
      lastName,
      emailAddress,
      pin,
      phoneNumber
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={{ color: "#fff", fontWeight: 700, fontSize: 24 }}>
          FURAIA
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>create account</Text>
        <View style={styles.rowContainer}>
          <TextInput
            label="First Name"
            mode="outlined"
            outlineColor="#002a0c"
            style={styles.input}
            theme={inputTheme}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            outlineColor="#002a0c"
            style={styles.input}
            theme={inputTheme}
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            label="Email Address"
            mode="outlined"
            outlineColor="#002a0c"
            style={{ ...styles.input, width: "68%" }}
            theme={inputTheme}
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          />
          <View style={{ alignSelf: "center", width: "30%" }}>
            <Dropdown setGender={setGender} gender={gender} />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            label="Pin"
            keyboardType="numeric"
            mode="outlined"
            style={{ ...styles.input, width: "30%" }}
            placeholder="****"
            outlineColor="#002a0c"
            theme={inputTheme}
            onChangeText={(pin) => setPin(pin)}
            secureTextEntry
          />
          <TextInput
            label="Phone Number"
            keyboardType="numeric"
            mode="outlined"
            style={{ ...styles.input, width: "68%" }}
            placeholder="08012345678"
            outlineColor="#002a0c"
            theme={inputTheme}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.checkboxContainer}>
          {Platform.OS === "android" ? (
            <View>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                color="#002a0c"
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Agree to the terms and conditions</Text>
            </View>
          ) : (
            <View>
              <Checkbox.Item
                status={checked ? "checked" : "unchecked"}
                color="#002a0c"
                label="Agree to the terms and conditions"
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomIconButton
          label="Click Me"
          onPress={handleButtonPress}
          theme="dark"
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const inputTheme = {
  colors: {
    primary: "#002a0c",
    text: "#002a0c",
    placeholder: "#002a0c",
    background: "#fafafa",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  topContainer: {
    height: "30%",
    backgroundColor: "#002A0C",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    justifyContent: "center", // Center content vertically
    paddingHorizontal: 20,
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    width: "100%",
    alignSelf: "flex-end", // Align at the bottom
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
    color: "#002a0c",
    textTransform: "uppercase",
  },
  body: {
    alignSelf: "flex-end",
    color: "#002a0c",
  },
  input: {
    // marginBottom: 10,
    margin: 0,
    padding: 0,
    width: "48%",
  },
  picker: {
    width: "50%",
    height: 56,
    marginBottom: 16,
    backgroundColor: "#fafafa",
    color: "#002a0c",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    height: 60,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
});
