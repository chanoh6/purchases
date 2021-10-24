import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Meet from "../Meet";
import Settings from "../Settings";
import Home from "../Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          let name = "";
          if (route.name === "Home") name = "home";
          else if (route.name === "Meet") name = "video";
          else name = "cog";
          return TabIcon({ ...props, name });
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
