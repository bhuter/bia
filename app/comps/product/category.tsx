"use client";
import React, { useState } from 'react';
import Link from 'next/link';


const Category: React.FC = () => {
    return (
        <>
        <div className="flex flex-wrap p-3">
            <div className="flex flex-nowrap p-4 border border-slate-300 w-[300px] h-auto mr-3 mb-3">
             <div className="w-[130px] rounded-md">
             <img src="/imgs/bgslide1.jpg" alt="" className='w-full h-full object-cover rounded-sm' />
             </div>
             <Link href="" className='px-4'>
               <div className="name text-black te[17px] text-nowrap-lg">Men's shirt</div>
               <div className="count text-gray-500 text-sm p-2">456 + </div>
               <button className='flex flex-nowrap bg-orange-100 px-[7px] py-[4px] text-sm rounded-md' >View more <i className="bi bi-arrow-right "></i></button>
             </Link>
            </div>

            <div className="flex flex-nowrap p-4 border border-slate-300 w-[300px] h-auto mr-3 mb-3">
             <div className="w-[130px] rounded-md">
             <img src="/imgs/bgslide1.jpg" alt="" className='w-full h-full object-cover rounded-sm' />
             </div>
             <Link href="" className='px-4'>
               <div className="name text-black text-[17px] text-nowrap">Men's trousers</div>
               <div className="count text-gray-500 text-sm p-2">456 + </div>
               <button className='flex flex-nowrap bg-orange-100 px-[7px] py-[4px] text-sm rounded-md' >View more <i className="bi bi-arrow-right "></i></button>
             </Link>
            </div>
            <div className="flex flex-nowrap p-4 border border-slate-300 w-[300px] h-auto mr-3 mb-3">
             <div className="w-[130px] rounded-md">
             <img src="/imgs/bgslide1.jpg" alt="" className='w-full h-full object-cover rounded-sm' />
             </div>
             <Link href="" className='px-4'>
               <div className="name text-black text[17px] text-nowrapg">Women's shirt</div>
               <div className="count text-gray-500 text-sm p-2">456 + </div>
               <button className='flex flex-nowrap bg-orange-100 px-[7px] py-[4px] text-sm rounded-md' >View more <i className="bi bi-arrow-right "></i></button>
             </Link>
            </div>
            <div className="flex flex-nowrap p-4 border border-slate-300 w-[300px] h-auto mr-3 mb-3">
             <div className="w-[130px] rounded-md">
             <img src="/imgs/bgslide1.jpg" alt="" className='w-full h-full object-cover rounded-sm' />
             </div>
             <Link href="" className='px-4'>
               <div className="name text-black te[17px] text-nowrap-lg">Men's shirt</div>
               <div className="count text-gray-500 text-sm p-2">456 + </div>
               <button className='flex flex-nowrap bg-orange-100 px-[7px] py-[4px] text-sm rounded-md' >View more <i className="bi bi-arrow-right "></i></button>
             </Link>
            </div>
            <div className="flex flex-nowrap p-4 border border-slate-300 w-[300px] h-auto mr-3 mb-3">
             <div className="w-[130px] rounded-md">
             <img src="/imgs/bgslide1.jpg" alt="" className='w-full h-full object-cover rounded-sm' />
             </div>
             <Link href="" className='px-4'>
               <div className="name text-black te[17px] text-nowrap-lg">Men's shirt</div>
               <div className="count text-gray-500 text-sm p-2">456 + </div>
               <button className='flex flex-nowrap bg-orange-100 px-[7px] py-[4px] text-sm rounded-md' >View more <i className="bi bi-arrow-right "></i></button>
             </Link>
            </div>
        </div>
        </>

    );
};
export default Category;