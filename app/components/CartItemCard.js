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
        <div className="flex justify-between items-center w-full space-x-4 pr-2">
            <Image src={itemImg} alt={itemName} width={80} height={80} className="bg-gray-300" />
            <div className="flex flex-col flex-1">
                <span className="font-semibold">{itemName}</span>
                <span className="text-sm text-gray-400">Quantity: {itemQuantity}</span>
                <span className="text-sm text-gray-400">
                    Total: {itemPrice * itemQuantity}€
                </span>
            </div>
            <button
                onClick={handleRemoveFromCart}
                className="border border-red-600 p-2 rounded hover:scale-110 transition mr-2"
            >
                🗑
            </button>
        </div>
    );
}