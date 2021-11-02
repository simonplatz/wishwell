import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Hoe" 
        component={HomeScreen} 
      />
      <HomeStack.Screen 
        name="MyNiceView" 
        component={NiceView} 
      />
    </HomeStack.Navigator>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to next view" onPress={ () => {
        navigation.navigate('MyNiceView', { viewName: "titlesd"})
      }}></Button>
    </View>
  );
}

const NiceView = ({route}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nice View, which we call</Text>
      <Text>{route.params.viewName}</Text> 
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }} >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App
