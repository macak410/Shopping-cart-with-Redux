import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './slices/shoppingCartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
    },
});

export default store;
