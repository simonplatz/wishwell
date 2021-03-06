import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import TabNavigator from "./src/navigation/TabNavigator.js"

import { getObjectData} from './src/tools/Storage.js'

import { LoginContext } from './src/contexts/LoginContext.js'
import { UpdateContext } from './src/contexts/UpdateContext.js'


function App() {
  const initialState = {
    loggedIn: false,
    userId: '',
    dateOfBirth: '',
    name: '',
    email: ''
  }

  const [userState, setUserState] = useState(initialState)

  useEffect(() => {
    getObjectData("userState")
      .then(data => {
        if (data !== null) {
          setUserState(data)
        }
      })
  }, [])


  const initialValue = {
    userState: userState, 
    setUserState: (userState) =>  {
      setUserState(userState)
    }  
  }

  const [update, setUpdate] = useState(false)

  const updateInitialValue = {
    update: update,
    setUpdate: (update) => {
      setUpdate(update)
    }
  }

  return (
    <LoginContext.Provider value={initialValue}>
      <UpdateContext.Provider value={updateInitialValue}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          backgroundColor={'#35a761'} //primary color darkend by 10%
          hidden={false}
        />
        <TabNavigator/>
      </NavigationContainer>
        </UpdateContext.Provider>
    </LoginContext.Provider>
  );
}

export default App
