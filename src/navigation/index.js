import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Login, Register, ForgotPassword } from "../screens";
import { Dashboard, ScanScreen, Settings, AccountScreen } from "../screens";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
            />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <BottomTab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          title: "Scan",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />

      <BottomTab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </BottomTab.Navigator>
  );
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
