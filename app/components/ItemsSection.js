'use client';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import ItemCard from './ItemCard';

import tshirtW from '@/app/assets/imgs/tshirtW.webp';
import hoodieB from '@/app/assets/imgs/hoodieB.webp';
import shortB from '@/app/assets/imgs/shortB.webp';
import capP from '@/app/assets/imgs/capP.webp';
import capG from '@/app/assets/imgs/capG.webp';
import bagB from '@/app/assets/imgs/bagB.webp';
import bagR from '@/app/assets/imgs/bagR.webp';
import shoesP from '@/app/assets/imgs/shoesP.webp';
import shoesB from '@/app/assets/imgs/shoesB.webp';
import flipFlopP from '@/app/assets/imgs/flipFlopP.webp';
import flipFlopO from '@/app/assets/imgs/flipFlopO.webp';
import braceletW from '@/app/assets/imgs/braceletW.webp';

const allItems = [
  { name: 'White T-Shirt', price: 10, img: tshirtW, category: 'Clothing', tag: 'New' },
  { name: 'Black Hoodie', price: 20, img: hoodieB, category: 'Clothing', tag: 'Sale' },
  { name: 'Black Shorts', price: 30, img: shortB, category: 'Clothing' },
  { name: 'Purple Cap', price: 5, img: capP, category: 'Headwear' },
  { name: 'Green Cap', price: 88, img: capG, category: 'Headwear', tag: 'Limited' },
  { name: 'Black Bag', price: 7, img: bagB, category: 'Bags' },
  { name: 'Red Bag', price: 12, img: bagR, category: 'Bags', tag: 'Sale' },
  { name: 'Pink Shoes', price: 53, img: shoesP, category: 'Footwear', tag: 'New' },
  { name: 'Blue Shoes', price: 11, img: shoesB, category: 'Footwear' },
  { name: 'Pink Flip-Flops', price: 4, img: flipFlopP, category: 'Footwear' },
  { name: 'Orange Flip-Flops', price: 8, img: flipFlopO, category: 'Footwear', tag: 'Limited' },
  { name: 'White Bracelet', price: 93, img: braceletW, category: 'Accessories', tag: 'New' },
];

const categories = ['All', 'Clothing', 'Headwear', 'Bags', 'Footwear', 'Accessories'];
const sortOptions = ['Name (A-Z)', 'Name (Z-A)', 'Price (Low-High)', 'Price (High-Low)'];

export default function ItemsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  const filteredItems = allItems
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'Name (A-Z)': return a.name.localeCompare(b.name);
        case 'Name (Z-A)': return b.name.localeCompare(a.name);
        case 'Price (Low-High)': return a.price - b.price;
        case 'Price (High-Low)': return b.price - a.price;
        default: return 0;
      }
    });

  return (
    <section className="w-full px-4 mt-6">
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        {/* Category buttons */}
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors duration-200 ${
                selectedCategory === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border-gray-500 text-gray-900 dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <Listbox value={sortBy} onChange={setSortBy}>
          <div className="relative w-48">
            <Listbox.Button className="w-full cursor-pointer rounded border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left text-sm font-medium text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              {sortBy}
              <ChevronUpDownIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-black/10 focus:outline-none">
              {sortOptions.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active, selected }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? 'bg-blue-100 dark:bg-blue-600 text-blue-900 dark:text-white' : ''
                    } ${selected ? 'font-semibold' : 'font-normal'}`
                  }
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Items Grid */}
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <ItemCard
            key={`${item.name}-${index}`}
            itemName={item.name}
            itemPrice={item.price}
            itemImg={item.img}
            itemTag={item.tag}
          />
        ))}
      </article>
    </section>
  );
}