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
        if (cartItems.length === 0) {
            alert('🛒 Your cart is empty!');
            return;
        }

        alert(`🎉 Thank you for your purchase! Total amount: €${total.toFixed(2)}`);

        cartItems.forEach((item) => {
            for (let i = 0; i < item.quantity; i++) {
                dispatch(removeItem({ item: { name: item.name } }));
            }
        });
    };

    return (
        <div className="mt-8 pt-6 w-full max-w-md mx-auto flex flex-col items-center space-y-6 border-t border-gray-300 dark:border-gray-600">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
                Total: <span className="text-green-600">€{total.toFixed(2)}</span>
            </div>

            <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className={`w-full max-w-xs px-6 py-3 rounded-md text-lg font-medium transition-all duration-300
                    ${
                        cartItems.length === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                            : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
            >
               ✅ Confirm Purchase
            </button>
        </div>
    );
}