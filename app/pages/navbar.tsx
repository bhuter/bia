"use client";import Ads from "../comps/nav/ads";
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from "next/image";
import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [userInitials, setUserInitials] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60 && window.innerWidth > 768) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Get user session from localStorage
    const userSession = JSON.parse(localStorage.getItem('userSession') || '{}');
    if (userSession && userSession.name) {
      const nameParts = userSession.name.split(" ");
      const initials = nameParts.map((part: string) => part.charAt(0)).join('').toUpperCase();
      setUserInitials(initials);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-50 fixed top-0 bg-white w-[95%] ${isHidden ? 'shadow' : 'shadow-sm'}`}>
      {/* Ads panel */}
      <Ads>
        <p className='text-white p-1 px-4'>We are hosting new Tailors Dream College soon, book a seat!</p> 
        <button className='bg-green-400 text-white px-2 py-[4px] m-1 rounded cursor-pointer'>Register now</button>
      </Ads>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-7">
        {/* Logo and search bar */}
        <div className="flex items-center justify-between w-3/6 py-1">
          <div>
            <Image
              src="/imgs/logo.ico"
              alt="Logo"
              width={60}
              height={60}
            />
          </div>
          <div className="flex shadow rounded-[2px] w-3/4 mt-1">
            <input 
              type="search" 
              name="q" 
              id="q" 
              placeholder="Search product, store, category, ..."
              className="p-[13px] w-full bg-transparent text-base outline-none placeholder:text-slate-300"
            />
            <div className="bg-red-500 h-full gap-4 py-[13px] px-1">
              <i id="searchBtn" className="bi bi-search px-[16px] cursor-pointer text-[15px] text-white"></i>
            </div>
          </div>
        </div>

        {/* Contact and cart */}
        <div className="flex items-center justify-between w-[33%] text-[14px]">
          <div className="text-[16px] font-[100] font-serif text-black">
            <i className="bi bi-telephone text-lg text-slate-400"></i>
            <span className="ml-2 mr-3 text-slate-600">+250788282252</span>
          </div>
          <div>
            <div className="flex items-center rounded-[2px] px-2">
              <i className="bi bi-globe text-lg text-slate-400"></i>
              <select name="" id="lang" className="p-[5px] outline-none text-slate-600">
                <option value="">English</option>
                <option value="">Kiny</option>
                <option value="">French</option>
              </select>
            </div>
          </div>
          <div>
            {userInitials ? (
              <div className="bg-green-400 text-white rounded-full flex items-center justify-center text-xl" style={{ width: '40px', height: '40px' }}>
                {userInitials}
              </div>
            ) : (
              <Link href="/auth/login">
                <i className="bi bi-person text-3xl text-slate-600 cursor-pointer"></i>
              </Link>
            )}
          </div>
          <div>
            <i className="bi bi-cart text-2xl text-gray-800 cursor-pointer"></i>
            <span className="absolute mt-[-5px] ml-[-10px] bg-red-500 text-white px-[5px] rounded-full text-[12px]">0</span>
          </div>
        </div>
      </nav>

      {/* Menu */}
      <menu className={`flex justify-between pb-2 pl-[25px] transition-transform duration-500 ${isHidden ? 'fixed -translate-y-full opacity-0' : 'opacity-100 -translate-y-0'}`}>
        <div>
          <span className="text-[#000a] hidden">
            <i className="bi bi-police"></i>
            <span>HELP CENTER</span>
          </span>
        </div>
        <div className="flex justify-end">
          <Link href="/" className="text-[#000] text-[17px] mr-[20px] hover:text-orange-600">
            <i className="bi bi-house mr-2"></i>
            <span>Home</span>
          </Link>
          <Link href="/products" className="text-[#000] text-[17px] mr-[20px] hover:text-orange-600">
            <i className="bi bi-bag mr-2"></i>
            <span>Products</span>
          </Link>
          <Link href="" className="text-[#000] text-[17px] mr-[20px] hover:text-orange-600">
            <i className="bi bi-mortarboard mr-2"></i>
            <span>Tailors Dream College</span>
          </Link>
          <Link href="/stores" className="text-[#000] text-[17px] mr-[20px] hover:text-orange-600">
            <i className="bi bi-shop mr-2"></i>
            <span>Stores</span>
          </Link>
          <Link href="" className="text-[#000] text-[17px] mr-[20px] hover:text-orange-600">
            <i className="bi bi-telephone mr-2"></i>
            <span>Contact us</span>
          </Link>
        </div>
      </menu>
    </header>
  );
}

export default NavBar;
