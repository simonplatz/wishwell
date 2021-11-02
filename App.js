import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from "./src/navigation/TabNavigator.js"

function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App
