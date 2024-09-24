"use client";
import React from 'react';
import Link from 'next/link';

const categories = [
  {
    name: "Men's Shirts",
    image: "/imgs/d1.JPG",
    amount: 46,
    id: "25",
  },
  {
    name: "Men's Trousers",
    image: "/imgs/cat/cat26.jpg",
    amount: 120,
    id: "25",
  },
  {
    name: "Women's Dresses",
    image: "/imgs/c2.JPG",
    amount: 98,
    id: "25",
  },
  {
    name: "Kid's Shirts",
    image: "/imgs/d1.JPG",
    amount: 100,
    id: "25",
  },
  {
    name: "Men's Suits",
    image: "/imgs/d7.JPG",
    amount: 46,
    id: "25",
  },
  {
    name: "Completes",
    image: "/imgs/d5.JPG",
    amount: 47,
    id: "25",
  },
  {
    name: "Hand Bags",
    image: "/imgs/cat/cat5.jpg",
    amount: 46,
    id: "25",
  },
  {
    name: "Vases and Baskets",
    image: "/imgs/cat/cat9.jpg",
    amount: 99,
    id: "25",
  },
  {
    name: "Table Mats Sets",
    image: "/imgs/cat/cat5.jpg",
    amount: 35,
    id: "25",
  },
  {
    name: "Home",
    image: "/imgs/bgslide1.jpg",
    amount: 90,
    id: "25",
  },
  {
    name: "Women's Kimono",
    image: "/imgs/cat/cat7.jpg",
    amount: 116,
    id: "25",
  },
  {
    name: "Women Suits",
    image: "/imgs/c5.JPG",
    amount: 200,
    id: "25",
  },
];

const Category: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-3">
      {categories.map((cat, key) => (
        <div key={key} className="flex flex-col bg-white p-3 shadow rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
          <div className="w-full h-40 mb-2">
            <img src={cat.image} alt={cat.name} className='w-full h-full object-cover rounded-lg' />
          </div>
          <Link href="" className='flex flex-col'>
            <div className="name text-black text-sm md:text-base font-semibold truncate">{cat.name}</div>
            <div className="count text-blue-500 text-xs">{cat.amount} +</div>
            <button className='mt-2 bg-red-500 text-white px-3 py-1 text-xs rounded-md flex items-center justify-center transition-colors hover:bg-red-600'>
              View more <i className="bi bi-arrow-right ml-1"></i>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
