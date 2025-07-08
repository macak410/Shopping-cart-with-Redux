'use client';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, setQuantity, removeAllOfItem } from '../store/slices/shoppingCartSlice';
import { TrashIcon } from '@heroicons/react/24/solid';

export default function CartItemCardWithStepper({ itemName, itemPrice, itemImg, itemQuantity }) {
    const dispatch = useDispatch();

    const handleRemoveAll = () => {
        dispatch(removeAllOfItem({ item: { name: itemName } }));
    };

    const handleQuantityChange = (value) => {
        if (value >= 0) {
            dispatch(setQuantity({ item: { name: itemName }, quantity: value }));
        }
    };

    return (
        <div className="flex justify-between items-center w-full space-x-4 pr-2 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="w-20 h-20 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                    src={itemImg}
                    alt={itemName}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
            </div>

            <div className="flex flex-col flex-1">
                <span className="font-semibold text-gray-800 dark:text-white">{itemName}</span>

                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-300">Qty:</span>

                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
                        <button
                            onClick={() => handleQuantityChange(itemQuantity - 1)}
                            className="px-2 py-1 text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            −
                        </button>
                        <input
                            type="number"
                            min="0"
                            value={itemQuantity}
                            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                            className="w-12 text-center text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-white outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                        <button
                            onClick={() => handleQuantityChange(itemQuantity + 1)}
                            className="px-2 py-1 text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            +
                        </button>
                    </div>
                </div>

                <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Total: €{(itemPrice * itemQuantity).toFixed(2)}
                </span>
            </div>

            <button
                onClick={handleRemoveAll}
                className="px-2 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-500 hover:text-white dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-600 transition-all duration-200 flex items-center justify-center"
                title="Remove item"
                >
                <TrashIcon className="w-5 h-5" />
            </button>
        </div>
    );
}