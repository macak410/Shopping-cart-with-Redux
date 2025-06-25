import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { item } = action.payload;
            state.items.push(item);
        },
        removeItem: (state, action) => {
            const { item } = action.payload;
            state.items = state.items.filter(
                (cartItem) => cartItem.name !== item.name
            );
        },
    },
});
export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
