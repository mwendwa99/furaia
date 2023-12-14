import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(0);

  const handleResetPassword = () => {
    // TODO: Implement password reset logic
    console.log("Reset password for email:", email);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Otp"
        value={otp}
        onChangeText={setOtp}
        mode="outlined"
        type="number"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleResetPassword}
        style={styles.button}
      >
        Reset Password
      </Button>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
