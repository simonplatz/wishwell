import {createContext} from 'react';

export const UpdateContext = createContext({
  update: {
    updateWishlist: false,
    updateWish: false
  },
  setUpdate: () => { }
})
