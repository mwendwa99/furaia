import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Home from "./src/screens/Home";
import Signup from "./src/screens/Signup";
import Register from "./src/screens/Register";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <View > */}
      {/* <Home /> */}
      {/* <Signup /> */}
      <Register />
      <StatusBar style="auto" />
      {/* </View> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002A0C",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
});
