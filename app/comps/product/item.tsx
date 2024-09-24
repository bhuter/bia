"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Item = () => {
    // Define a state for the quantity
    const [num, setNum] = useState(1); // Default value is 1

    // Function to increment the quantity
    const increment = () => {
        setNum(prevNum => prevNum + 1);
    };

    // Function to decrement the quantity
    const decrement = () => {
        if (num > 1) { // Prevent going below 1
            setNum(prevNum => prevNum - 1);
        }
    };

    return (
        <>
            <div className="px-4 py-4 mt-3 flex flex-col md:flex-row bg-white">
                <div className="product w-full md:w-2/3">
                    <div className="title">
                        <div className="name text-xl font-bold">Gentlemen Wear</div>
                        <div className="category py-2 px-3 mt-2 font-bold bg-red-400 rounded-full w-min text-white text-nowrap">Women&apos;s dress</div>
                        <div className="details text-base my-1 pr-1">USB wired mouse for office, computer gaming, notebook business use, and more.</div>
                    </div>
                    <div className="album flex flex-col md:flex-row">
                        <div className="other p-2 mt-3 flex flex-row justify-between md:flex-col">
                            {["/imgs/c4.JPG", "/imgs/c5.JPG", "/imgs/c10.JPG"].map((src, index) => (
                                <div key={index} className="pic w-[70px] h-[70px] mb-5 rounded-md border-4 border-slate-600">
                                    <img src={src} alt="" className="w-full h-full object-cover rounded-md"/>
                                </div>
                            ))}
                        </div>
                        <div className="main-pic p-4 h-[75vh] mx-4 my-6 w-full shadow-sm rounded-md bg-slate-100">
                            <img src="/imgs/c8.JPG" alt="" className="w-full h-full object-contain"/>
                        </div>
                    </div>
                </div>
                <div className="details shadow-md rounded-md p-4 mt-3 w-full md:w-1/3">
                    <div className="info">
                        <div className="more flex">
                            <div className="reviews">
                                <i className="bi bi-star-fill text-orange-300 mr-1"></i>
                                <i className="bi bi-star-fill text-orange-300 mr-1"></i>
                                <i className="bi bi-star-fill text-orange-300 mr-1"></i>
                                <i className="bi bi-star-fill text-orange-300 mr-1"></i>
                                <i className="bi bi-star-fill text-orange-100"></i>
                                <span className="font-bold mx-5">4.5 reviews :</span>
                            </div>
                            <div className="sold-items text-lg text-red-400 font-bold">170 Sold</div>
                        </div>
                        <div className="discount my-3 text-xl text-white bg-red-200 font-bold rounded-full px-4 py-2 w-min text-nowrap">
                            <span className="text-red-500">17% OFF</span> Discount
                        </div>
                        <div className="price text-2xl font-bold m-4">
                            <div className="text-lg text-slate-600">
                                <del>{40000 + (40000 * 0.17)} RWF</del>
                            </div>
                            PRICE: 40,000 RWF
                        </div>
                        <div className="colors border-t">
                            <div>Colors: </div>
                            <div className="my-2 flex flex-wrap">
                                {["skyblue", "blue", "dense green"].map((color, index) => (
                                    <span key={index} className="p-2 shadow m-2 text-sm text-slate-500 uppercase cursor-pointer hover:border hover:border-orange-300">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="shipping">
                            <h4 className="font-bold text-sm">Delivery note: </h4>
                            <p className="py-2 text-slate-600">
                                Note that this item might be delivered in range from
                                <br /><span className="text-green-400 font-semibold"> Today - Sep, 17 2024</span>
                            </p>
                        </div>
                        <div className="shop-q border-t pt-2">
                            <h4 className="font-bold text-sm mb-3"><i>How many to deliver to you? </i></h4>
                            <div className="flex w-min text-gray-600">
                                <button
                                    className="w-[50px] py-1 px-3 font-bold text-[17px] text-center border border-slate-200"
                                    onClick={decrement}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={num}
                                    id="quantity"
                                    className="w-[90px] py-2 outline-none border border-slate-200 px-3 text-center"
                                    onChange={(e) => setNum(Number(e.target.value))}
                                />
                                <button
                                    className="w-[50px] py-1 px-3 font-bold text-[17px] text-center border border-slate-200"
                                    onClick={increment}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cart flex w-full justify-between flex-wrap">
                        <button className="px-4 py-4 bg-orange-400 text-white my-6 w-[45%] rounded-3xl">
                            <i className="bi bi-bag mr-2"></i> Order now
                        </button>
                        <button className="px-4 py-4 bg-slate-100 text-gray-500 my-6 w-[45%] rounded-3xl">
                            <i className="bi bi-cart mr-2"></i>Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
