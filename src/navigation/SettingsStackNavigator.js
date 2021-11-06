import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


//import Settings from "../screens/Settings.js";
import AddWish from '../screens/AddWish.js';

const SettingsStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        //name="Settings"
        //component={Settings}
        name="Add a wish" 
        component={AddWish} 
      />
    </SettingsStack.Navigator>
  )
}
