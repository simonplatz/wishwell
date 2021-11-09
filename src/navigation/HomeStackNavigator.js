import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home.js";
import WishList from "../screens/WishList.js";
import Login from '../screens/Login.js';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
      />
      <HomeStack.Screen
      name="Login"
      component={Login}
      />
      <HomeStack.Screen 
        name="Wishes" 
        component={WishList} 
      />
    </HomeStack.Navigator>
  )
}
