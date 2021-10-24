import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pay from "../Pay";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pay"
        component={Pay}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
