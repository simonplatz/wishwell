import {createContext} from 'react';

export const LoginContext = createContext({
  userState:  {
    loggedIn: false,
    userId: '',
    dateOfBith: '',
    name: ''
  },
  setUserState: () => { }
})

