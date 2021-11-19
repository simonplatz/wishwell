import {createContext} from 'react';

export const LoginContext = createContext({
  userState:  {
    loggedIn: false,
    userId: '',
    dateOfBirth: '',
    name: '',
    email: ''
  },
  setUserState: () => { }
})

