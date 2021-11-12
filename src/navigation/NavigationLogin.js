import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login.js";
import WishList from "../screens/WishList.js";

const NavigationStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <NavigationStack.Navigator>
      <NavigationStack.Screen 
        name="Login" 
        component={Login} 
      />
    </NavigationStack.Navigator>
  )
}