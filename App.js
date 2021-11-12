import React, {createContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import TabNavigator from "./src/navigation/TabNavigator.js"

const LoginContext =  createContext(false)

function App() {
  return (
    <LoginContext.Provider login={false}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          backgroundColor={'#35a761'} //primary color darkend by 10%
          hidden={false}
        />
        <TabNavigator/>
      </NavigationContainer>
    </LoginContext.Provider>
  );
}

export default App
