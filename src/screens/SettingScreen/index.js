import Settings from "./Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SettingStack = createNativeStackNavigator();

// const SettingStackNavigator = () => {
//   return (
//     <SettingStack.Navigator>
//       <SettingStack.Screen
//         name="Settings"
//         options={{
//           title: "Settings",
//           headerTitleAlign: "center",
//         }}
//         component={Settings}
//       />
//     </SettingStack.Navigator>
//   );
// };

// export default SettingStackNavigator;

const SettingScreen = () => {
  return <Settings />;
};

export default SettingScreen;
