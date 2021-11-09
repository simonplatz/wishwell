import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home.js";
import WishList from "../screens/WishList.js";
import Wish from "../screens/Wish.js"

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
        name="Wish" 
        component={Wish} 
      />
    </HomeStack.Navigator>
  )
}
