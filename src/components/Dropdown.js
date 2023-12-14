import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet } from "react-native";

const gender = ["Male", "Female", "Other"];

const Dropdown = ({ setGender }) => {
  return (
    <SelectDropdown
      data={gender}
      onSelect={(selectedItem, index) => {
        setGender(selectedItem);
      }}
      buttonStyle={styles.dropdown1BtnStyle}
      defaultButtonText="Gender"
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
