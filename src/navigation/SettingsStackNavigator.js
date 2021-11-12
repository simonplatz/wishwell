import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from "../screens/Settings.js";

const SettingsStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <SettingsStack.Navigator
        screenOptions={{
        headerTintColor: 'white', 
        headerStyle: { 
          backgroundColor: '#3BBA6C',
        }
      }}
      >
      <SettingsStack.Screen 
        name="Settings"
        component={Settings}
      />
    </SettingsStack.Navigator>
  )
}
