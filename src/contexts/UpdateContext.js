import {createContext} from 'react';

export const UpdateContext = createContext({
  update: false,
  setUpdate: () => { }
})
