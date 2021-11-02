import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from "./HomeStackNavigator.js";
import SettingsStackNavigator from "./SettingsStackNavigator.js";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }} >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator
