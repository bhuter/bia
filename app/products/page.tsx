"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../comps/product/card";
import Preloader from "../comps/forms/Preloader";
import Head from "next/head";

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
      "image": "/imgs/c2.JPG",
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
const Home = () =>{
    const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Simulate component readiness logic
    const initializeComponent = async () => {
      // This could be some initialization logic or other side effects
      // Simulate content being ready
      setContentReady(true); // This will be triggered when your content is fully ready
    };

    initializeComponent();
  }, []);

  useEffect(() => {
    if (contentReady) {
      setLoading(false); // Hide preloader when the component is ready
    }
  }, [contentReady]);

  if (loading) {
    return <Preloader />; // Display the preloader until content is ready
  }
  
    return(    
    <>
        <Head>
            <title>Products | Shirts, Trousers, Completes, ...</title>
        </Head>
        <div className="w-full h-full flex">
            {/* filter panel*/}
            <div className="filter bg-white shadow w-max p-4 m-[1px] gap-4 py-4 h-max mt-5">
                <h4 className="font-semibold py-2 border-b"><i className="bi bi-filter"></i>Filter by</h4>
                <form action="" method="post">
                <div> 
                    <h4 className="my-2 font-medium text-sm">PRODUCT CATEGORY</h4>
                    <div className="px-3">
                        <ul>
                            <li className="text-slate-600 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="men_shoes"/><span className="mx-2">Mens Shoes</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="men_shirt"/><span className="mx-2">Mens Shirt</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="men_trouser"/><span className="mx-2">Mens Trouser</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="women_dress"/><span className="mx-2">Womens Dress</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="completes"/><span className="mx-2">completes</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="women_shoes"/><span className="mx-2">Womens Shoes</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="kid_completes"/><span className="mx-2">Kids Completes</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="kimono"/><span className="mx-2">Womens Kimono</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="vases"/><span className="mx-2">Vases</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="baskets"/><span className="mx-2">Baskets</span></li>
                            <li className="text-slate-800 text-md"><input type="checkbox" name="p_cat" id="p_cat" value="table_mats_set"/><span className="mx-2">Table Mats sets</span></li>
                        </ul>
                    </div>
                    <h4 className="my-2 font-medium text-sm uppercase">Price range</h4>
                    <select name="p_range" id="p_range" className="p-2 border text-slate-600 text-md" >
                        <option value="">Default</option>
                        <option value="0">0 to 5,000 RWF</option>
                        <option value="1">5,001 to 10,000 RWF</option>
                        <option value="2">10,001 to 20,000 RWF</option>
                        <option value="3">20,001 to 30,000 RWF</option>
                        <option value="4">30,001 to 50,000 RWF</option>
                        <option value="5">50,001 to 70,000 RWF</option>
                        <option value="6">70,001 to 100,000 RWF</option>
                        <option value="7">100,001 to 150,000 RWF</option>
                        <option value="8">150,001 to 200,000 RWF</option>
                        <option value="9">200,001 to 500,000 RWF</option>
                        <option value="10">500,001 to Above</option>
                    </select>
                    <div >
                        <h4 className="my-2 font-medium text-sm uppercase">Trends</h4>
                        <ul className="px-3" >
                            <li className="text-slate-800 text-md"><input type="radio" name="trend" id="trend" value="new_to_store"/><span className="mx-2">New to store</span></li>
                            <li className="text-slate-800 text-md"><input type="radio" name="trend" id="trend" value="most_sold"/><span className="mx-2">Most sold</span></li>
                            <li className="text-slate-800 text-md"><input type="radio" name="trend" id="trend" value="most_review"/><span className="mx-2">Most reviewed</span></li>
                            <li className="text-slate-800 text-md"><input type="radio" name="trend" id="trend" value="popular"/><span className="mx-2">Popular</span></li>
                            <li className="text-slate-800 text-md"><input type="radio" name="trend" id="trend" value="recommends"/><span className="mx-2">Recommended</span></li>
                        </ul>
                        
                    </div>
                </div>
                </form>
            </div>
            {/* product review*/}
            
            <div className="mx-3 py-5">
                <h1 className="text-3xl font-semibold text-yellow-500">Intract with our smart picks and design</h1>
                
              <div>
                <div className="flex flex-wrap gap-4 py-4 ">
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
            </div>
        
         </div>
         
     </div>
   </>
    );
}
export default Home;