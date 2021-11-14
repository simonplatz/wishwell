import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import TabNavigator from "./src/navigation/TabNavigator.js"

import { LoginContext } from './src/contexts/LoginContext.js'

function App() {
  const logInState = {
    loggedIn: false, 
  }

  const [loggedIn, setLoggedIn] = useState(logInState)


  const toggleLogin = (logInState) =>  {
    setLoggedIn({...loggedIn, loggedIn: logInState})
  }

  const initialValue = {
    loggedIn: loggedIn, 
    toggleLogin: toggleLogin
  }  

  return (
    <LoginContext.Provider value={initialValue}>
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
