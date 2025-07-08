'use client';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, removeAllOfItem } from '../store/slices/shoppingCartSlice';
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

export default function ItemCard({ itemName, itemPrice, itemImg, itemTag }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.items);
  const itemInCart = cartItems.find((item) => item.name === itemName);
  const itemQuantity = itemInCart ? itemInCart.quantity : 0;

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAdd = () => {
    setIsAnimating(true);
    setTimeout(() => {
        dispatch(addItem({ item: { name: itemName, price: itemPrice, img: itemImg } }));
        setIsAnimating(false);
    }, 150);
  };

  const handleRemove = () => {
    dispatch(removeItem({ item: { name: itemName } }));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllOfItem({ item: { name: itemName } }));
  };

  return (
    <section className="flex flex-col items-center border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-slate-100 dark:bg-slate-800 w-full h-full overflow-hidden group">
      {/* Slika i oznaka */}
      <div className="w-full h-40 relative bg-slate-200 dark:bg-slate-700 rounded-t-xl overflow-hidden p-2">
        {itemTag && (
          <span
            className={`absolute top-3 right-3 z-10 px-3 py-1.5 text-sm font-bold tracking-wide uppercase rounded-full shadow-md backdrop-blur-md ring-2 ring-white/30 animate-pop
              ${
                itemTag === 'New'
                  ? 'bg-green-600 text-white'
                  : itemTag === 'Sale'
                  ? 'bg-red-600 text-white'
                  : itemTag === 'Limited'
                  ? 'bg-yellow-500 text-black'
                  : ''
              }
            `}
          >
            {itemTag}
          </span>
        )}
        <Image
          src={itemImg}
          alt={itemName}
          layout="fill"
          objectFit="contain"
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Sadržaj kartice */}
      <div className="p-6 flex flex-col items-center w-full space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 tracking-wide text-center">
          {itemName}
        </h3>

        <div className="text-xl font-extrabold text-blue-700 dark:text-blue-400">
          {typeof itemPrice === 'number' ? `€${itemPrice.toFixed(2)}` : 'Cijena nije dostupna'}
        </div>

        {/* Gumbi za dodavanje/uklanjanje */}
        <div className="flex items-center justify-center w-full space-x-2 min-h-[48px]">
            {itemQuantity === 0 ? (
                <button
                    onClick={handleAdd}
                    className={`w-full px-4 py-2 border border-blue-700 dark:border-blue-400 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black
                        ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}
                    >
                    Add to cart
                </button>
            ) : (
                <>
                <button
                    onClick={handleRemove}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    −
                </button>
                <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                    Added: {itemQuantity}
                </span>
                <button
                    onClick={handleAdd}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    +
                </button>
                <button
                    onClick={handleRemoveAll}
                    className="px-3 py-2 rounded-md bg-red-100 text-red-700 hover:bg-red-500 hover:text-white dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-600 transition-all duration-200 flex items-center justify-center"
                    title="Remove all"
                    >
                    <TrashIcon className="w-5 h-5" />
                </button>
                </>
            )}
            </div>
    </div>
    </section>
  );
}