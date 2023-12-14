import * as React from "react";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";

const ListItem = (props) => {
  return (
    <List.Section>
      <TouchableOpacity onPress={() => {}}>
        <List.Item
          title={props.title}
          left={(iconProps) => (
            <List.Icon {...iconProps} icon={props.iconLeft} />
          )}
          right={(iconProps) => (
            <List.Icon {...iconProps} icon={props.iconRight} />
          )}
          style={lisItemStyle}
        />
      </TouchableOpacity>
    </List.Section>
  );
};

export default ListItem;

const lisItemStyle = {
  backgroundColor: "#fff",
  marginVertical: 5,
};
