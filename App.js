import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/Home';
import Pay from './src/Pay';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <Stack.Navigator initialRouteName="Home" screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Pay" component={Pay} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
