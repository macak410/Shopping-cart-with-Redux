import Image from 'next/image';
import React from 'react';
import { removeItem } from '../store/slices/shoppingCartSlice';
import { useDispatch } from 'react-redux';

export default function CartItemCard({ itemName, itemPrice, itemImg }) {
    const dispatch = useDispatch();
    const handleRemoveToCart = () => {
        dispatch(removeItem({ item: { name: itemName } }));
    };
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <picture className="bg-gray-400">
                <Image src={itemImg} alt={itemName} width={100} height={100} />
            </picture>
            <div className="flex-1 flex flex-row  items-center space-x-4 justify-between">
                <div className="ml-8">{itemName}</div>
                <hr className="h-20 w-[0.2px] bg-[#242424] mx-3 border-none"></hr>
                <div>{itemPrice}€</div>
                <button
                    onClick={handleRemoveToCart}
                    className="border-[1px] border-red-600 p-2 rounded-sm  transition-all duration-500  hover:scale-110  "
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
    );
}
