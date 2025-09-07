import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.jsx';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
