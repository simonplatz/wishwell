import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from "./HomeStackNavigator.js";
import SettingsStackNavigator from "./SettingsStackNavigator.js";

import SharedStackNavigator from "./SharedStackNavigator.js"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faListAlt, faCog, faUserFriends } from '@fortawesome/free-solid-svg-icons'


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#0E1D31",
      tabBarInactiveTintColor: "#a4a4a4",
      tabBarLabelStyle: {
        display: 'none'
      },
      tabBarStyle : {
        display: 'flex',
      },
    }} >
      <Tab.Screen 
        name="Wishlist Screen" 
        component={HomeStackNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon 
              icon={faListAlt}  
              size={size} 
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Shared With Me Screen" 
        component={SharedStackNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon 
              icon={faUserFriends}  
              size={size} 
              color={color}
            />
          )
        }}
      />
      <Tab.Screen 
        name="SettingScreen" 
        component={SettingsStackNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon 
              icon={faCog} 
              size={size} 
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
