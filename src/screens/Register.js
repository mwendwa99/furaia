import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { Checkbox } from "react-native-paper";

import Button from "../components/Button";

const Register = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  const handleButtonPress = () => {
    // Handle button press logic here
    console.log("Button Pressed!");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FURAIA</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>create account</Text>
        <TextInput
          label="First Name"
          mode="outlined"
          outlineColor="#002a0c"
          style={styles.input}
          theme={inputTheme}
        />
        <TextInput
          label="Last Name"
          mode="outlined"
          outlineColor="#002a0c"
          style={styles.input}
          theme={inputTheme}
        />
        <TextInput
          label="Email Address"
          mode="outlined"
          outlineColor="#002a0c"
          style={styles.input}
          theme={inputTheme}
        />
        {/* Gender drop down */}
        <Picker
          label="Gender"
          mode="dropdown"
          //   selectedValue={gender}
          //   onValueChange={onGenderChange}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <TextInput
          label="Pin"
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
          placeholder="****"
          outlineColor="#002a0c"
          theme={inputTheme}
        />
        {/* phone number text input */}
        <TextInput
          label="Phone Number"
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
          placeholder="08012345678"
          outlineColor="#002a0c"
          theme={inputTheme}
        />
        <View style={styles.checkbox}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.body}>Agree to the terms and conditions</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Click Me" onPress={handleButtonPress} theme="dark" />
      </View>
    </SafeAreaView>
  );
};

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
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    padding: 20,
  },
  bodyContainer: {
    flex: 1, // Take up available space
    justifyContent: "center", // Center content vertically
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
    marginBottom: 16,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
  },
});

export default Register;
