import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import StackNavigation from "./src/components/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} translucent={true} />

      <StackNavigation />
    </NavigationContainer>
  );
}
