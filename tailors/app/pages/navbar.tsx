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
        <header className="z-50 fixed top-0 bg-slate-900 w-[95%]">
          
            <nav className="flex justify-between items-center px-7">
                {/** these are tabs links */}
                <div className="flex items-center justify-between w-3/6 py-1">
                    <div>
                        <Image
                         src="/logo/favicon.ico"
                         alt="Logo"
                         width={90}
                         height={90}
                        />
                    </div>
                    <div className="flex items-center bg-gray-500 px-2 rounded-[6px] w-4/6 mt-2">
                      <input 
                      type="search" 
                      name="q" 
                      id="q" 
                      placeholder="Search design, cources, category, ..."
                      className="p-[15px] w-full bg-transparent text-sm outline-none"/>
                      <i id="searchBtn" className="bi bi-search px-[16px] cursor-pointer text-[15px] text-slate-400"></i>
                    </div>
                </div>
                <div className="flex items-center justify-between w-[40%] text-[14px]">
                    <div className="text-[16px] font-[100] font-serif text-white">
                        <i className="bi bi-telephone"></i>
                        <span className="ml-2 mr-5">+250788282252</span>
                    </div>
                    <div>
                        <select name="" id="lang" className="p-[8px] border-none rounded-[3px] w-[130px] outline-none text-gray-400 bg-gray-500">
                            <option value="">English</option>
                            <option value="">Kinyarwanda</option>
                            <option value="">French</option>
                        </select>
                    </div>
                    <div>
                      <Link href="/auth/login">
                        <i className="bi bi-person text-3xl text-white cursor-pointer"></i>
                      </Link>
                    </div>
                    <div>
                      <i className="bi bi-cart text-2xl text-white cursor-pointer"></i>
                      <span className="absolute mt-[-5px] ml-[-10px] bg-orange-500 text-white px-[5px] rounded-full text-[12px]">0</span>
                    </div>
                </div>
            </nav>
            <menu className={`flex justify-between shadow-sm pb-2 pl-[25px]  transition-transform duration-500  ${isHidden ? 'fixed -translate-y-full opacity-0' : 'opacity-100 -translate-y-0'}`}>
                <div>
                  <h4 className="text-white text-[17px] mr-[16px] hover:text-yellow-700">Tailor's Dream College</h4>
                </div>
                <div className="flex justify-end">
                <Link href="" className="text-white text-[17px] mr-[26px] hover:text-yellow-700">
                  <i className="bi bi-bag mr-2"></i>
                  <span>Shop</span>
                </Link>
                <Link href="" className="text-white text-[17px] mr-[26px] hover:text-yellow-700">
                  <i className="bi bi-mortarboard mr-2"></i>
                  <span>Design</span>
                </Link>
                <Link href="" className="text-white text-[17px] mr-[26px] hover:text-yellow-700">
                  <i className="bi bi-shop mr-2"></i>
                  <span>Classes</span>
                </Link>
                <Link href="" className="text-white text-[17px] mr-[26px] hover:text-yellow-700">
                  <i className="bi bi-people mr-2"></i>
                  <span>Team</span>
                </Link>
                <Link href="" className="text-white text-[17px] mr-[26px] hover:text-yellow-700">
                  <i className="bi bi-person mr-2"></i>
                  <span>Testimony</span>
                </Link>
                </div>
            </menu>
        </header>
    );
}
export default NavBar;