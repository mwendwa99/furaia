import { View, Text, StyleSheet, Button } from "react-native";

const Reservation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Reservation Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};
export default Reservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
