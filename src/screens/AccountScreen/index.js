import Accounts from "./Accounts";
import Reservation from "./Reservation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ExploreStack = createNativeStackNavigator();

const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Accounts"
        options={{
          headerTitleAlign: "center",
        }}
        component={Accounts}
      />
      <ExploreStack.Screen
        name="Reservation"
        options={{
          headerTitleAlign: "center",
        }}
        component={Reservation}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackNavigator;
