import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home.js";
import WishList from "../screens/WishList.js";
import Share from '../screens/Share.js';

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
        component={WishList} 
      />
      <HomeStack.Screen
        name="Share"
        component={Share}
      />
    </HomeStack.Navigator>
  )
}
