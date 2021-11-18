import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import TabNavigator from "./src/navigation/TabNavigator.js"

import { LoginContext } from './src/contexts/LoginContext.js'

function App() {
  const inititalState = {
    loggedIn: false,
    userId: '',
    dateOfBith: '',
    name: ''
  }

  const [userState, setUserState] = useState(inititalState)

  const initialValue = {
    userState: userState, 
    setUserState: (userState) =>  {
      setUserState(userState)
    }  
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
