import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './slices/shoppingCartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        // Dodaj druge sliceove ovdje ako ih budeš imao
    },
    devTools: process.env.NODE_ENV !== 'production', // omogućuje Redux DevTools samo u developmentu
});

export default store;