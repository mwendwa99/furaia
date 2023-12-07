import { View, Text, StyleSheet, TextInput } from "react-native";

import Button from "../components/Button";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button text="Sign Up" onPress={() => alert("Button pressed")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default Signup;
