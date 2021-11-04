import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home.js";
import Wishes from "../screens/Wishes.js";

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
      />
      <HomeStack.Screen 
        name="Wishes" 
        component={Wishes} 
      />
    </HomeStack.Navigator>
  )
}
