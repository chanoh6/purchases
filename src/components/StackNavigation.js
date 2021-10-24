import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Pay from '../Pay';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Pay" component={Pay} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StackNavigation;