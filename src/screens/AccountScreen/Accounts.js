import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  StyleSheet } from "react-native";

import { ListItem } from "../../components";

const accountLinks = [
  {
    title: "Reservation",
    iconLeft: "vector-square",
    iconRight: "arrow-right",
  },
  {
    title: "Swap Points",
    iconLeft: "recycle",
    iconRight: "arrow-right",
  },
  {
    title: "Story Yangu",
    iconLeft: "book-open-page-variant",
    iconRight: "arrow-right",
  },
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


const Accounts = ({navigation}) => {
  const listItems = accountLinks.map((link) => (
    <ListItem
      key={link.title}
      title={link.title}
      iconLeft={link.iconLeft}
      iconRight={link.iconRight}
      navigate={()=>navigation.navigate(link.title)}
    />
  ));
  return <SafeAreaView style={styles.container}>{listItems}</SafeAreaView>;
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
