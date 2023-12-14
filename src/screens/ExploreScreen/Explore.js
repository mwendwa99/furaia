import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";

import { ListItem } from "../../components";

const exploreLinks = [
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
];

const listItems = exploreLinks.map((link) => (
  <ListItem
    key={link.title}
    title={link.title}
    iconLeft={link.iconLeft}
    iconRight={link.iconRight}
  />
));

const Explore = () => {
  return <SafeAreaView style={styles.container}>{listItems}</SafeAreaView>;
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
