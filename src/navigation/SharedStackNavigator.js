import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SharedWithMe from "../screens/SharedWithMe";

const SharedStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <SharedStack.Navigator
        screenOptions={{
        headerTintColor: 'white', 
        headerStyle: { 
          backgroundColor: '#3BBA6C',
        }
      }}
      >
      <SharedStack.Screen 
        name="Shared with me"
        component={SharedWithMe}
      />
    </SharedStack.Navigator>
  )
}
