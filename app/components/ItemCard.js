'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { addItem, removeItem } from '../store/slices/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemCard({ itemName, itemPrice, itemImg }) {
    const cartItems = useSelector((state) => state.shoppingCart.items || []);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            addItem({
                item: { name: itemName, price: itemPrice, img: itemImg },
            })
        );
    };

    const handleRemoveToCart = () => {
        dispatch(removeItem({ item: { name: itemName } }));
    };
    return (
        <section className="flex flex-col items-center border-2 border-[#242424] rounded-lg shadow-lg shadow-[#080808] h-full w-full">
            <picture className="rounded-t-lg bg-gray-400 w-full h-full p-0 flex items-center justify-center flex-1">
                <Image src={itemImg} alt={itemImg} width={250} height={250} />
            </picture>
            <div className="p-6 flex flex-col justify-end items-center w-full ">
                <div className="text-xl  w-full ">
                    <p>{itemName}</p>
                </div>
                <hr className="w-full h-[0.2px] bg-[#242424] my-3 border-none"></hr>
                <div className="flex justify-start w-full text-2xl ">
                    <p>{itemPrice}€</p>
                </div>
                <div className="flex items-center justify-center w-full flex-row space-x-4">
                    <button
                        onClick={handleAddToCart}
                        disabled={cartItems.some(
                            (item) => item.name === itemName
                        )}
                        className={`mt-6 w-full ${
                            cartItems.some((item) => item.name === itemName)
                                ? 'opacity-15'
                                : 'hover:bg-white hover:text-black'
                        } border-[1px] p-2 rounded-sm  transition-all duration-500 flex-1`}
                    >
                        {!cartItems.some((item) => item.name === itemName)
                            ? 'Add to cart'
                            : 'Added'}
                    </button>
                    <button
                        onClick={handleRemoveToCart}
                        className={`border-[1px] border-red-600 p-2 rounded-sm  transition-all duration-500 mt-6 hover:scale-110  ${
                            cartItems.some((item) => item.name === itemName)
                                ? 'block'
                                : 'hidden'
                        }`}
                    >
                        <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#dc2626"
                            width={24}
                            height={24}
                        >
                            <path
                                d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                                fillRule="nonzero"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
