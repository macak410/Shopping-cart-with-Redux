import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/slices/shoppingCartSlice';

export default function CartItemCard({ itemName, itemPrice, itemImg, itemQuantity }) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeItem({ item: { name: itemName } }));
    };

    return (
        <div className="flex items-center w-full bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:text-white">
            {/* Slika proizvoda */}
            <div className="w-20 h-20 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                    src={itemImg}
                    alt={itemName}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
            </div>

            {/* Detalji o proizvodu */}
            <div className="flex flex-col flex-1 ml-4">
                <span className="font-semibold text-lg text-gray-800 dark:text-white">{itemName}</span>
                <span className="text-sm text-gray-500 dark:text-gray-300">Quantity: {itemQuantity}</span>
                <span className="text-sm text-gray-600 font-medium dark:text-gray-200">
                    Total: {(itemPrice * itemQuantity).toFixed(2)}€
                </span>
            </div>

            {/* Gumb za uklanjanje */}
            <button
                onClick={handleRemoveFromCart}
                className="ml-4 text-red-600 hover:text-red-800 transition-transform transform hover:scale-110 text-xl"
                title="Remove item"
            >
                🗑
            </button>
        </div>
    );
}