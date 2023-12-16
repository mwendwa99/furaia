import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Accounts from "./Accounts";
import Reservation from "./Reservation";
import SwapPoints from "./SwapPoints";
import StoryYangu from "./StoryYangu";
import EditProfile from "./EditProfile";

const ExploreStack = createNativeStackNavigator();

const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Accounts"
        options={{
          headerTitleAlign: "center",
          title: "Accounts",
        }}
        component={Accounts}
      />
      <ExploreStack.Screen
        name="Reservation"
        options={{
          headerTitleAlign: "center",
          title: "Reservation",
        }}
        component={Reservation}
      />
      <ExploreStack.Screen
        name="SwapPoints"
        options={{
          headerTitleAlign: "center",
          title: "Swap Points",
        }}
        component={SwapPoints}
      />
      <ExploreStack.Screen
        name="StoryYangu"
        options={{
          headerTitleAlign: "center",
          title: "Story Yangu",
        }}
        component={StoryYangu}
      />
      <ExploreStack.Screen
        name="EditProfile"
        options={{
          headerTitleAlign: "center",
          title: "Edit Profile",
        }}
        component={EditProfile}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackNavigator;
