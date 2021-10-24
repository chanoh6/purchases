import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import Meet from '../Meet';
import Settings from '../Settings';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Main">
            <Tab.Screen name="Main" component={StackNavigation} />
            <Tab.Screen name="Meet" component={Meet} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;