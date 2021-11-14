import {createContext} from 'react';

export const LoginContext =  createContext({
  loggedIn: false,
  toggleLogin: () => { }
})

