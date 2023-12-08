import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/native";

import LoginScreen from "../screens/Login";
import Login from "../screens/Login";
import RegisterScreen from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
