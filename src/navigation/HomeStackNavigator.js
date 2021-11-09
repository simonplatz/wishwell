import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home.js";
import WishList from "../screens/WishList.js";
import Wish from "../screens/Wish.js"
import Share from '../screens/Share.js';
import AddWish from '../screens/AddWish.js'

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
      <HomeStack.Screen
        name="Share"
        component={Share}
      />
      <HomeStack.Screen
        name="AddWish"
        component={AddWish}
      />
    </HomeStack.Navigator>
  )
}
