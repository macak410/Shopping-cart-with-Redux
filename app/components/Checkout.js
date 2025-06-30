'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/slices/shoppingCartSlice';

export default function Checkout() {
    const cartItems = useSelector((state) => state.shoppingCart.items || []);
    const dispatch = useDispatch();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        if (cartItems.length === 0) return alert('Košarica je prazna!');
        alert(`Thank you for your purchase! Total amount: ${total}€`);

        cartItems.forEach((item) => {
            for (let i = 0; i < item.quantity; i++) {
                dispatch(removeItem({ item: { name: item.name } }));
            }
        });
    };

    return (
        <div className="mt-6 pt-4 w-full flex flex-col items-center space-y-4 border-t border-gray-600">
            <div className="text-lg font-semibold">Total: {total}€</div>
            <button
                onClick={handleCheckout}
                className={`px-6 py-2 text-white rounded-sm border border-white transition-all duration-300 ${
                    cartItems.length === 0
                        ? 'opacity-30 cursor-not-allowed'
                        : 'hover:bg-white hover:text-black'
                }`}
                disabled={cartItems.length === 0}
            >
                Confirm purchase
            </button>
        </div>
    );
}