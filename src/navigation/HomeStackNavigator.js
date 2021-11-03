import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home.js";
import NiceView from "../screens/NiceView.js";

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
      />
      <HomeStack.Screen 
        name="MyNiceView" 
        component={NiceView} 
      />
    </HomeStack.Navigator>
  )
}
