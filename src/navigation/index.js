import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import { Login, Register, ForgotPassword } from "../screens";
import { BottomNavigationBar } from "../components";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return <BottomNavigationBar />;
};

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
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return <AuthNavigator />;
};

export default Navigator;
