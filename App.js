import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StackNavigation from './src/components/StackNavigation';
import TabNavigation from './src/components/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <TabNavigation />
    </NavigationContainer>
  );
}
