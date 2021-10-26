import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pay from "../Pay";
import TabNavigation from "./TabNavigation";
import User from "../User";
import Subscribe from "../Subscribe";
import Notification from "../Notification";
import Qna from "../Qna";
import Faq from "../Faq";
import Notice from "../Notice";
import Version from "../Version";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
    >
      <Stack.Screen
        name="Main"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pay"
        component={Pay}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
      <Stack.Screen
        name="Subscribe"
        component={Subscribe}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
      <Stack.Screen
        name="Qna"
        component={Qna}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
      <Stack.Screen
        name="Faq"
        component={Faq}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
      <Stack.Screen
        name="Version"
        component={Version}
        options={{
          cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });

            return { cardStyle: { opacity, transform: [{ translateX }] } };
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
