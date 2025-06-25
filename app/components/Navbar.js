'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';
import Checkout from './Checkout';

export default function Navbar() {
    const cartItems = useSelector((state) => state.shoppingCart.items || []);
    const [cartOpen, setCartOpen] = useState(false);

    const handleToggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="flex justify-between items-center py-4 px-10 md:px-40">
            <h1 className="text-2xl">Shopping Cart with Redux</h1>

            <div
                onClick={handleToggleCart}
                className="flex items-center cursor-pointer hover:scale-110 transition gap-2"
            >
                <span className="text-2xl">🛒</span>
                <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded-full min-w-[24px] text-center">
                    {totalQuantity}
                </span>
            </div>

            <article
                className={`fixed top-0 ${
                    cartOpen ? 'right-0' : 'right-[-150%]'
                } w-96 bg-black h-full p-6 transition-all duration-500 z-50`}
            >
                <section className="flex flex-col h-full space-y-4">
                    <div
                        onClick={handleToggleCart}
                        className="self-end cursor-pointer text-2xl hover:scale-110 transition"
                        aria-label="Zatvori košaricu"
                    >
                        ✖
                    </div>

                    <div className="flex flex-col space-y-4 overflow-y-auto flex-1">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-400 mt-10">Košarica je prazna</p>
                        ) : (
                            cartItems.map((item) => (
                                <CartItemCard
                                    key={item.name}
                                    itemName={item.name}
                                    itemPrice={item.price}
                                    itemImg={item.img}
                                    itemQuantity={item.quantity}
                                />
                            ))
                        )}
                    </div>

                    <Checkout />
                </section>
            </article>
        </nav>
    );
}