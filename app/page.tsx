"use client";
import React from 'react';
import SlideShow from "./comps/home/slides";
import ProductCard from "./comps/product/card";


const products = [
  {
   "name": "African Dress",
   "image": "/imgs/c3.JPG",
   "price": "10000",
   "details": "Handmade dress by transforming tailor skills",
  },
  {
    "name": "African Fashion Dress",
    "image": "/imgs/bgslide1.jpg",
    "price": "23800",
    "details": "Handmade dress by transforming tailor skills",
  },
  {
    "name": "Stylish Dress",
    "image": "/imgs/c10.JPG",
    "price": "40000",
    "details": "Handmade dress by transforming tailor skills",
   },
   {
     "name": "Gentlemen Wear",
     "image": "/imgs/d4.JPG",
     "price": "8000",
     "details": "Handmade dress by transforming tailor skills",
   },
   {
    "name": "Wonder Wear",
    "image": "/imgs/c9.JPG",
    "price": "17000",
    "details": "Handmade dress by transforming tailor skills",
  },
  {
    "name": "Gentlemen Wear",
    "image": "/imgs/d8.JPG",
    "price": "8000",
    "details": "Handmade dress by transforming tailor skills",
  },
  {
   "name": "Modern drip",
   "image": "/imgs/c7.JPG",
   "price": "17000",
   "details": "Handmade dress by transforming tailor skills",
 },
 {
  "name": "My Mom is super",
  "image": "/imgs/c2.JPG",
  "price": "8000",
  "details": "Handmade dress by transforming tailor skills",
},
{
 "name": "Girls Fashion",
 "image": "/imgs/c8.JPG",
 "price": "17000",
 "details": "Handmade dress by transforming tailor skills",
},
{
  "name": "Gentlemen Wear",
  "image": "/imgs/d7.JPG",
  "price": "17000",
  "details": "Handmade dress by transforming tailor skills",
 },

 {
  "name": "Gentlemen Wear",
  "image": "/imgs/d1.JPG",
  "price": "8000",
  "details": "Handmade dress by transforming tailor skills",
},
{
 "name": "Woman cloth",
 "image": "/imgs/c4.JPG",
 "price": "17000",
 "details": "Handmade dress by transforming tailor skills",
},
{
"name": "Gentlemen Wear",
"image": "/imgs/d5.JPG",
"price": "8000",
"details": "Handmade dress by transforming tailor skills",
},
{
"name": "Rwanda Fashion Deal",
"image": "/imgs/c5.JPG",
"price": "17000",
"details": "Handmade dress by transforming tailor skills",
},
{
"name": "Gentlemen Wear",
"image": "/imgs/d6.JPG",
"price": "17000",
"details": "Handmade dress by transforming tailor skills",
},
    
]
export default function Home() {
  return (
    <>
     <head>
        <title>BIA - The African Touch | Home</title>
      </head>
    <div className="flex justify-center items-center">
      <SlideShow />
    </div>
    <div className="pt-10">
      <h1 className="text-4xl font-semibold ">Top picks</h1>
      <div className="p-4">
        <button className="px-6 py-2 rounded-2xl border m-2 hover:border-2 border-black hover:bg-slate-200">Most Popular</button>
        <button className="px-6 py-2 rounded-2xl border m-2 hover:border-2 border-black hover:bg-slate-200">Hot Selling</button>
        <button className="px-6 py-2 rounded-2xl border m-2 hover:border-2 border-black hover:bg-slate-200">New Picks</button>
        <button className="px-6 py-2 rounded-2xl border m-2 hover:border-2 border-black hover:bg-slate-200">Best Reveiwed</button>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 p-4">
      {products.map((item, index) => (
        <ProductCard 
        key = {index}
        name={item.name} 
        details={item.details}
        price={item.price}
        image={item.image}
        />
      ))}
    </div>
    <div className='px-6 py-1 justify-end flex'>
      <button className='mr-2 px-3 font-sm text-sm border'>1</button>
      <button className='mr-2 px-3 font-sm text-sm border'>2</button>
      <button className='mr-2 px-3 font-sm text-sm border'>NEXT</button>
    </div>
  </>
  );
}
