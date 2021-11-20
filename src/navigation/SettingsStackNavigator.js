import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login.js';
import Settings from "../screens/Settings.js";
import SignUp from '../screens/SignUp.js';

const SettingsStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTintColor: 'white', 
        headerStyle: { 
          backgroundColor: '#3BBA6C',
        },
        cardStyle: {backgroundColor: '#ffffff'}
      }}
    >
      <SettingsStack.Screen 
        name="Settings"
        component={Settings}
      />
      <SettingsStack.Screen
        name="Login"
        component={Login}
      />
      <SettingsStack.Screen
        name="Sign Up"
        component={SignUp}
      />
    </SettingsStack.Navigator>
  )
}
