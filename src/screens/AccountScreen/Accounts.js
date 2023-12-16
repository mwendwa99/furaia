import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { ListItem } from "../../components";

const accountLinks = [
  {
    title: "Reservation",
    iconLeft: "vector-square",
    iconRight: "arrow-right",
    url: "Reservation",
  },
  {
    title: "Swap Points",
    iconLeft: "recycle",
    iconRight: "arrow-right",
    url: "SwapPoints",
  },
  {
    title: "Story Yangu",
    iconLeft: "book-open-page-variant",
    iconRight: "arrow-right",
    url: "StoryYangu",
  },
  {
    title: "Edit Profile",
    iconLeft: "account-edit-outline",
    iconRight: "arrow-right",
    url: "EditProfile",
  },
];

const Accounts = ({ navigation }) => {
  const listItems = accountLinks.map((link) => (
    <ListItem
      key={link.title}
      title={link.title}
      iconLeft={link.iconLeft}
      iconRight={link.iconRight}
      navigate={() => navigation.navigate(link.url)}
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
