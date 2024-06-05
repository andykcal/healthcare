
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

const configurestore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default configurestore;