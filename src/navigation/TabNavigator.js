import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from "./HomeStackNavigator.js";
import SettingsStackNavigator from "./SettingsStackNavigator.js";
import NavigtionLogin from "./NavigationLogin";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }} >
      <Tab.Screen name="Wishlists" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
      <Tab.Screen name="Login" component={NavigtionLogin}/>
    </Tab.Navigator>
  )
}

export default TabNavigator
