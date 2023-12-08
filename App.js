import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/Home";
import Signup from "./src/screens/Signup";
import {Bill} from "./src/screens/Bill";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Signup /> */}
      <Bill />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

