import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import TabNavigator from "./src/navigation/TabNavigator.js"

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={'#35a761'} //primary color darkend by 10%
        hidden={false}
      />
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App
