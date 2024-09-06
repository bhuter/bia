"use client";
import React, { useState } from 'react';
import Link from 'next/link';
const categories = [
  {
    "name": "Men's Shirts",
    "image":"/imgs/d1.JPG",
    "amount": 46,
    "id":"25",
  },
  {
    "name": "Men's trousers",
    "image":"/imgs/cat/cat26.jpg",
    "amount": 120,
    "id":"25",
  },
  {
    "name": "Women's Dresses",
    "image":"/imgs/c2.JPG",
    "amount": 98,
    "id":"25",
  },
  {
    "name": "Kid's Shirts",
    "image":"/imgs/d1.JPG",
    "amount": 100,
    "id":"25",
  },
  {
    "name": "Men's Suits",
    "image":"/imgs/d7.JPG",
    "amount": 46,
    "id":"25",
  },
  {
    "name": "Completes",
    "image":"/imgs/d5.JPG",
    "amount": 47,
    "id":"25",
  },
  {
    "name": "Hand Bags",
    "image":"/imgs/cat/cat5.jpg",
    "amount": 46,
    "id":"25",
  },
  {
    "name": "Vases and Baskets",
    "image":"/imgs/cat/cat9.jpg",
    "amount": 99,
    "id":"25",
  },
  {
    "name": "Table Mats Sets",
    "image":"/imgs/cat/cat5.jpg",
    "amount": 35,
    "id":"25",
  },
  {
    "name": "Home",
    "image":"/imgs/bgslide1.jpg",
    "amount": 90,
    "id":"25",
  },
  {
    "name": "Women's Kimono",
    "image":"/imgs/cat/cat7.jpg",
    "amount": 116,
    "id":"25",
  },
  {
    "name": "Women Suits",
    "image":"/imgs/c5.JPG",
    "amount": 200,
    "id":"25",
  },

];

const Category: React.FC = () => {
    return (
        <>
        <div className="flex flex-wrap p-3">
       {categories.map((cat, key) =>(
         <div className="flex flex-nowrap bg-white p-4 border border-slate-300 w-[300px] h-auto mr-3 mb-3 hover:shadow-md hover:border-none hover:rounded">
         <div className="w-[130px] h-[100px] rounded-md">
         <img src={cat.image} alt={cat.name} className='w-full h-full object-cover rounded-sm' />
         </div>
         <Link href="" className='px-4'>
           <div className="name text-black te[17px] text-nowrap font-semibold">{cat.name}</div>
           <div className="count text-blue-500 text-sm p-2">{cat.amount} + </div>
           <button className='flex flex-nowrap bg-red-400 text-white px-[7px] py-[4px] text-sm rounded-md' >View more <i className="bi bi-arrow-right "></i></button>
         </Link>
        </div>
       ))}
       </div>
        </>

    );
};
export default Category;