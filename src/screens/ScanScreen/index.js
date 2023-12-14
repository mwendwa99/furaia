import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Scan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Scan</Text>
    </SafeAreaView>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
