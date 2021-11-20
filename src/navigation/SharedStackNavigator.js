import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WishList from "../screens/WishList.js";
import Wish from "../screens/Wish.js"
import SharedWithMe from "../screens/SharedWithMe.js";

const SharedStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <SharedStack.Navigator
        screenOptions={{
        headerTintColor: 'white', 
        headerStyle: { 
          backgroundColor: '#3BBA6C',
        },
        cardStyle: {backgroundColor: '#fdfdfd'}
      }}
      >
      <SharedStack.Screen 
        name="Shared with me"
        component={SharedWithMe}
      />
      <SharedStack.Screen 
        name="Wishlist" 
        component={WishList} 
      />
      <SharedStack.Screen 
        name="Wish" 
        component={Wish} 
      />
    </SharedStack.Navigator>
  )
}
