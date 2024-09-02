"use client";
import Ads from "../comps/nav/ads";
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from "next/image";
import React, { useEffect, useState } from 'react';


const NavBar = () =>{
 const [isHidden, setIsHidden] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
   // window.removeEventListener('scroll', handleScroll);
  };
}, []);

    return(
        <header className="shadow-sm z-50 fixed top-0 bg-white w-[95%]">
            {/** ads panel */}
            <Ads>
            <p className='text-slate-700 p-1 px-4'>We are hosting new Tailors Dream College soon, book a sit! </p> 
            <button className='bg-green-400 text-white px-2 py-[3px] m-1 rounded cursor-pointer'>Register now</button>
            </Ads>
            <nav className="flex justify-between items-center px-7">
                {/** these are tabs links */}
                <div className="flex items-center justify-between w-3/6 py-1">
                    <div>
                        <Image
                         src="/imgs/logo.ico"
                         alt="Logo"
                         width={70}
                         height={70}
                        />
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 rounded-[6px] w-4/6 mt-2">
                      <input 
                      type="search" 
                      name="q" 
                      id="q" 
                      placeholder="Search fashion, store, category, ..."
                      className="p-[15px] w-full bg-transparent text-sm outline-none"/>
                      <i id="searchBtn" className="bi bi-search px-[16px] cursor-pointer text-[15px] text-black"></i>
                    </div>
                </div>
                <div className="flex items-center justify-between w-[30%] text-[14px]">
                    <div className="font-medium text-gray-800 ">
                        <i className="bi bi-telephone"></i>
                        <span className="ml-2 mr-5">+250788282252</span>
                    </div>
                    <div>
                        <select name="" id="lang" className="p-[5px] border rounded-[5px] w-[90px] outline-none text-gray-700">
                            <option value="">English</option>
                            <option value="">Kinyarwanda</option>
                            <option value="">French</option>
                        </select>
                    </div>
                    <div>
                      <Link href="/auth/login">
                        <i className="bi bi-person text-3xl text-gray-800 cursor-pointer"></i>
                      </Link>
                    </div>
                    <div>
                      <i className="bi bi-cart text-2xl text-gray-800 cursor-pointer"></i>
                      <span className="absolute mt-[-5px] ml-[-10px] bg-orange-500 text-white px-[5px] rounded-full text-[12px]">0</span>
                    </div>
                </div>
            </nav>
            <menu className={`flex justify-between shadow-sm pb-2 pl-[25px]  transition-transform duration-500  ${isHidden ? 'fixed -translate-y-full opacity-0' : 'opacity-100 -translate-y-0'}`}>
                <div>
                    <span className="text-[#000a] hidden">
                    <i className="bi bi-police"></i>
                    <span>HELP CENTER</span>
                    </span>
                </div>
                <div className="flex justify-end">
                <Link href="" className="text-[#000b] text-[17px] mr-[16px] hover:text-yellow-700">
                  <i className="bi bi-bag mr-2"></i>
                  <span>Products</span>
                </Link>
                <Link href="" className="text-[#000b] text-[17px] mr-[16px] hover:text-yellow-700">
                  <i className="bi bi-mortarboard mr-2"></i>
                  <span>Tailors Dream College</span>
                </Link>
                <Link href="" className="text-[#000b] text-[17px] mr-[16px] hover:text-yellow-700">
                  <i className="bi bi-shop mr-2"></i>
                  <span>Stores</span>
                </Link>
                <Link href="" className="text-[#000b] text-[17px] mr-[16px] hover:text-yellow-700">
                  <i className="bi bi-telephone mr-2"></i>
                  <span>Contact us</span>
                </Link>
                </div>
            </menu>
        </header>
    );
}
export default NavBar;