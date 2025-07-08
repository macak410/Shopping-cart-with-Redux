'use client';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItemCardWithInput from './CartItemCardWithInput';
import Checkout from './Checkout';
import ThemeToggle from './ThemeToggle';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const cartItems = useSelector((state) => state.shoppingCart.items || []);
  const [cartOpen, setCartOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleToggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // 🔁 Trigger bounce animaciju svakih 5 sekundi
  useEffect(() => {
    setIsBouncing(true);
    const timeout = setTimeout(() => setIsBouncing(false), 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-20 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md sticky top-0 z-40 backdrop-blur-md">
      {/* Logo / Naslov */}
      <h1 className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-400">
        <ShoppingBagIcon
          className={`w-7 h-7 text-blue-700 dark:text-blue-400 transition-transform duration-300 hover:animate-wiggle ${
            isBouncing ? 'animate-bounceRotate' : ''
          }`}
        />
        Redux Shop
      </h1>

      {/* Desna strana */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* Ikona košarice */}
        <div
          onClick={handleToggleCart}
          className="relative flex items-center cursor-pointer hover:scale-105 transition-transform"
          title="Open cart"
        >
          <span className="text-2xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-blue-700 dark:bg-blue-400 text-white dark:text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-md min-w-[24px] text-center">
            {totalQuantity}
          </span>
        </div>
      </div>

      {/* Bočna košarica */}
      <article
        className={`fixed top-0 ${
          cartOpen ? 'right-0' : 'right-[-100%]'
        } w-full sm:w-[400px] h-screen max-h-screen bg-white dark:bg-gray-950 p-6 transition-all duration-500 z-50 shadow-2xl border-l border-gray-200 dark:border-gray-700`}
      >
        <section className="flex flex-col h-full">
          {/* Gumb za zatvaranje */}
          <div className="shrink-0 flex justify-end mb-4">
            <button
              onClick={handleToggleCart}
              className="text-2xl hover:rotate-90 transition-transform duration-300"
              aria-label="Close cart"
            >
              ✖
            </button>
          </div>

          {/* Artikli u košarici */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-400 mt-10">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <CartItemCardWithInput
                  key={item.name}
                  itemName={item.name}
                  itemPrice={item.price}
                  itemImg={item.img}
                  itemQuantity={item.quantity}
                />
              ))
            )}
          </div>

          {/* Checkout na dnu */}
          <div className="shrink-0 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <Checkout />
          </div>
        </section>
      </article>
    </nav>
  );
}