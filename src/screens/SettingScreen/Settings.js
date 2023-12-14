import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { ListItem } from "../../components";

const exploreLinks = [
  {
    title: "Edit Profile",
    iconLeft: "account-edit-outline",
    iconRight: "arrow-right",
  },
  {
    title: "Change Password",
    iconLeft: "form-textbox-password",
    iconRight: "arrow-right",
  },
  {
    title: "Language",
    iconLeft: "translate",
    iconRight: "arrow-right",
  },
];

const listItems = exploreLinks.map((link) => (
  <ListItem
    key={link.title}
    title={link.title}
    iconLeft={link.iconLeft}
    iconRight={link.iconRight}
  />
));

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>{listItems}</View>
      <Button icon="logout" mode="text" onPress={() => console.log("Pressed")}>
        Logout
      </Button>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
