import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

const ExploreStack = createNativeStackNavigator();

const LoginStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <ExploreStack.Screen
        name="ForgotPassword"
        options={{
          headerTitleAlign: "center",
          title: "ForgotPassword",
        }}
        component={ForgotPassword}
      />
    </ExploreStack.Navigator>
  );
};

export default LoginStackNavigator;
