import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import Signup from "./src/screens/Login";
import Register from "./src/screens/Register";
import AuthNavigator from "./src/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaProvider style={styles.container}> */}
      <StatusBar style="auto" />
      <AuthNavigator />
      {/* </SafeAreaProvider> */}
    </NavigationContainer>
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
