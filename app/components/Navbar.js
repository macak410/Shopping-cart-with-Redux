'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';

export default function Navbar() {
    const cartItems = useSelector((state) => state.shoppingCart.items || []);
    const [cartOpen, setCartOpen] = useState(false);

    const handleOpenCart = () => {
        setCartOpen(!cartOpen);
    };
    return (
        <nav className="flex flex-row justify-between items-center py-4 px-10 md:px-40">
            <h1 className="text-2xl">Shopping Cart made with Redux</h1>
            <div
                onClick={handleOpenCart}
                className="cursor-pointer hover:scale-110 transition-all duration-300 relative"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                >
                    <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-16.559 2v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2h-24z" />
                </svg>
                <div className="absolute top-[1.65rem] left-[0.60rem] text-black font-bold text-center w-10">
                    {cartItems.length}
                </div>
            </div>
            <article
                className={` top-0 ${
                    cartOpen ? 'right-0' : 'right-[-150%]'
                } w-96 bg-black h-full p-6 fixed transition-all duration-500 z-50`}
            >
                <section className="relative flex items-center flex-col justify-start h-full">
                    <picture
                        onClick={handleOpenCart}
                        className="flex w-full items-center justify-center cursor-pointer hover:scale-110 transition-all duration-500 "
                    >
                        <svg
                            clipRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            width={55}
                            height={55}
                        >
                            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                        </svg>
                    </picture>
                    <div className="flex flex-col justify-start items-center w-full h-fulf space-y-5 mt-10">
                        {cartItems.map((item) => (
                            <CartItemCard
                                key={item.name}
                                itemName={item.name}
                                itemPrice={item.price}
                                itemImg={item.img}
                            />
                        ))}
                    </div>
                </section>
            </article>
        </nav>
    );
}
