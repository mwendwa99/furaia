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

  const handleRequestOtp = () => {
    alert("OTP sent to your phone number");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FURAIA</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          label="Phone Number"
          mode="outlined"
          placeholder="+254796898480"
          outlineColor="#fff"
          textColor="#fff"
          placeholderTextColor="#808080"
          style={styles.input}
          theme={inputTheme}
        />

        <TextInput
          label="OTP"
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
          placeholder="****"
          outlineColor="#fff"
          textColor="#fff"
          placeholderTextColor="#808080"
          theme={inputTheme}
        />
        <View style={styles.otpContainer}>
          <Text style={styles.body} onPress={handleRequestOtp}>
            Request OTP
          </Text>
          <Text
            style={styles.body}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot password?
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomIconButton onPress={handleLogin} theme="light" />
        <Text style={styles.body} onPress={handleCreateAccount}>
          Create an Account
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    width: "100%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "flex-start",
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
