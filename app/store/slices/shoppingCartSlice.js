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
            const existingItem = state.items.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const { item } = action.payload;
            const existingItem = state.items.find(i => i.name === item.name);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(i => i.name !== item.name);
                }
            }
        },
    },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;