import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomIconButton } from "../../components";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleCreateAccount = () => {
    navigation.navigate("Register");
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
          textColor="#fff"
          placeholderTextColor="#808080"
          style={styles.input}
          theme={inputTheme}
        />

        <TextInput
          label="Pin"
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
          placeholder="****"
          outlineColor="#fff"
          textColor="#fff"
          placeholderTextColor="#808080"
          theme={inputTheme}
        />
        <Text
          style={styles.body}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomIconButton onPress={handleLogin} theme="light" />
        <Text style={styles.body} onPress={handleCreateAccount}>
          Don't have an account? Create an Account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
