import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default Button;
