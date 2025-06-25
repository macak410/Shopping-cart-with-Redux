'use client';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/slices/shoppingCartSlice';

export default function ItemCard({ itemName, itemPrice, itemImg }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.shoppingCart.items || []);

    const handleAddToCart = () => {
        dispatch(addItem({ item: { name: itemName, price: itemPrice, img: itemImg } }));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeItem({ item: { name: itemName } }));
    };

    const itemInCart = cartItems.find((item) => item.name === itemName);
    const itemQuantity = itemInCart ? itemInCart.quantity : 0;

    return (
        <section className="flex flex-col items-center border-2 border-[#242424] rounded-lg shadow-lg shadow-[#080808] h-full w-full">
            <picture className="rounded-t-lg bg-gray-400 w-full h-full p-0 flex items-center justify-center flex-1">
                <Image src={itemImg} alt={itemName} width={250} height={250} />
            </picture>
            <div className="p-6 flex flex-col justify-end items-center w-full">
                <div className="text-xl w-full">
                    <p>{itemName}</p>
                </div>
                <hr className="w-full h-[0.2px] bg-[#242424] my-3 border-none" />
                <div className="flex justify-start w-full text-2xl">
                    <p>{itemPrice}€</p>
                </div>
                <div className="flex items-center justify-center w-full flex-row space-x-4">
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 w-full hover:bg-white hover:text-black border-[1px] p-2 rounded-sm transition-all duration-500 flex-1"
                    >
                        {itemQuantity > 0 ? `Added: ${itemQuantity}` : 'Add to cart'}
                    </button>
                    {itemQuantity > 0 && (
                        <button
                            onClick={handleRemoveFromCart}
                            className="border-[1px] border-red-600 p-2 rounded-sm transition-all duration-500 mt-6 hover:scale-110"
                        >
                            🗑
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}