import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";

const Signup = () => {
  const handleButtonPress = () => {
    // Handle button press logic here
    console.log("Button Pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FURAIA</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="johndoe@gmail.com"
          outlineColor="#fff"
          style={styles.input}
          theme={{
            colors: {
              primary: "#fff", // Label color
              text: "#fff", // Text input color
              placeholder: "#fff", // Placeholder color
              background: "#002A0C", // Background color
            },
          }}
        />

        <TextInput
          label="Pin"
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
          placeholder="****"
          outlineColor="#fff"
          theme={{
            colors: {
              primary: "#fff", // Label color
              text: "#fff", // Text input color
              placeholder: "#fff", // Placeholder color
              background: "#002A0C", // Background color
            },
          }}
        />
        <Text style={styles.body}>Forgot password?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Click Me" onPress={handleButtonPress} theme="light" />
        <Text style={styles.body}>
          Don't have an account? Create an Account
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#002A0C",
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
    color: "#fff",
    textTransform: "uppercase",
  },
  body: {
    alignSelf: "flex-end",
    color: "#fff",
  },
  input: {
    marginBottom: 16,
  },
});

export default Signup;
