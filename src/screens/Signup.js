import { View, Text, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

import Button from "../components/Button";


const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      {/* <TextInput style={styles.input} placeholder="johndoe@email.com" /> */}
      <TextInput
      label="Email"
      type="outlined"
      style={{
        width:"100%"
      }}
      value={"text"}
      // onChangeText={text => setText(text)}
    /> 
      {/* <TextInput style={styles.input} placeholder="****" /> */}
      <Text>Forgot password?</Text>
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
    margin: 12,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    marginBottom: 16,
    fontWeight:"bold",
    
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    width: 380,
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
