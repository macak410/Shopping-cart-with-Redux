'use client';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/slices/shoppingCartSlice';

export default function ItemCard({ itemName, itemPrice, itemImg, itemTag }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.shoppingCart.items);
    const itemInCart = cartItems.find((item) => item.name === itemName);
    const itemQuantity = itemInCart ? itemInCart.quantity : 0;

    const handleAddToCart = () => {
        dispatch(addItem({ item: { name: itemName, price: itemPrice, img: itemImg } }));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeItem({ item: { name: itemName } }));
    };

    return (
        <section className="flex flex-col items-center border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-slate-100 dark:bg-slate-800 w-full h-full overflow-hidden group">
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

            <div className="p-6 flex flex-col items-center w-full space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 tracking-wide text-center">
                    {itemName}
                </h3>

                <div className="text-xl font-extrabold text-blue-700 dark:text-blue-400">
                    {typeof itemPrice === 'number' ? `€${itemPrice.toFixed(2)}` : 'Cijena nije dostupna'}
                </div>

                <div className="flex items-center justify-center w-full space-x-3">
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 px-4 py-2 border border-blue-700 dark:border-blue-400 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black"
                    >
                        {itemQuantity > 0 ? `Added: ${itemQuantity}` : 'Add to cart'}
                    </button>

                    {itemQuantity > 0 && (
                        <button
                            onClick={handleRemoveFromCart}
                            className="p-2 text-red-600 hover:text-red-800 transition-transform transform hover:scale-110 text-xl"
                            title="Remove from cart"
                        >
                            🗑
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}