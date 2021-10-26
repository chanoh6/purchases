import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import MainStackNavigation from "./src/components/MainStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} translucent={true} />

      <MainStackNavigation />
    </NavigationContainer>
  );
}
