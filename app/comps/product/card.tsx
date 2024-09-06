"use client";

import Link from "next/link";
import Image from "next/image";
import React from 'react';

// Define the props interface
interface ProductCardProps {
  name: string;
  image: string;
  price: string | number;
  details: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, details }) => {
    return (
      <div className="w-[240px] rounded overflow-hidden shadow-lg bg-white min-h-[50vh]">
        <img className="w-full h-[200px] object-cover" src={image} alt={name} />
        <div className="px-3 py-4 flex flex-col justify-between min-h-40">
          <div className="font-semibold text-xl mb-2">{name}</div>
          <p className="text-gray-700 m-0 text-base">{details}</p>
          <div className="flex justify-between items-center h-[7vh]">
            <span className="text-gray-800 font-bold mt-4">{new Intl.NumberFormat("en-US").format(Number(price))} RWF</span>
            <button className="float-right rounded-full mt-3 p-2 w-10 h-10 border hover:text-orange-500 hover:bg-lime-300"><i className="bi bi-cart-fill"></i></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  