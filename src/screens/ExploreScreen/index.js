import Explore from "./Explore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const ExploreStack = createNativeStackNavigator();

// const ExploreStackNavigator = () => {
//   return (
//     <ExploreStack.Navigator>
//       <ExploreStack.Screen
//         name="Explore"
//         options={{
//           title: "Explore",
//           headerTitleAlign: "center",
//         }}
//         component={Explore}
//       />
//     </ExploreStack.Navigator>
//   );
// };

// export default ExploreStackNavigator;

const ExploreScreen = () => {
  return <Explore />;
};

export default ExploreScreen;
