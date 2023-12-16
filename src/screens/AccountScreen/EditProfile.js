import { SafeAreaView, StyleSheet } from "react-native";
import { ListItem } from "../../components";

const editProfileLinks = [
  { title: "email", iconLeft: "email", iconRight: "arrow-right", url: "Email" },
  {
    title: "Phone Number",
    iconLeft: "phone",
    iconRight: "arrow-right",
    url: "PhoneNumber",
  },
  {
    title: "Forgot Password",
    iconLeft: "lock",
    iconRight: "arrow-right",
    url: "ForgotPassword",
  },
];

const EditProfile = ({ navigation }) => {
  const listItems = editProfileLinks.map((link) => (
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

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
