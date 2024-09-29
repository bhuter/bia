"use client";
import Ads from "../comps/nav/ads";
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import CartDropdown from "../comps/nav/cart";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [userInitials, setUserInitials] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Cart items state (moved to NavBar for easy access)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'T-shirt', price: 25000, quantity: 1, image: '/imgs/c3.jpg' },
    { id: 2, name: 'Handmade Basket', price: 15000, quantity: 1, image: '/imgs/d1.jpg' },
    { id: 3, name: 'Hebrwe', price: 8000, quantity: 1, image: '/imgs/d4.jpg' },
    { id: 4, name: 'Basket', price: 9000, quantity: 1, image: '/imgs/c6.jpg' },
    { id: 5, name: 'Sweed bag', price: 12350, quantity: 1, image: '/imgs/d8.jpg' },
  ]);

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

  // Calculate total cart item count
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

        {/* Contact, language, and cart */}
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
              <div className="relative flex items-center bg-slate-100 rounded-xl py-[3px] px-2 cursor-pointer hover:bg-slate-200 transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
                <div className="bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg" style={{ width: '30px', height: '30px' }}>
                  {userInitials}
                </div>
                <i className={`bi bi-chevron-down font-bold ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
              
                {isOpen && (
                  <div className="absolute right-0 top-12 mt-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                    <ul className="flex flex-col py-2 px-3 space-y-2">
                      <li className="flex items-center p-1 rounded-lg hover:bg-gray-100 transition-all">
                        <i className="bi bi-person mr-2 text-lg text-green-500"></i>
                        <Link href="/dashboard" className="text-gray-700 hover:text-green-500 transition-colors">Dashboard</Link>
                      </li>
                      <li className="flex items-center p-1 rounded-lg hover:bg-gray-100 transition-all">
                        <i className="bi bi-gear-fill mr-2 text-lg text-blue-500"></i>
                        <Link href="/settings" className="text-gray-700 hover:text-blue-500 transition-colors">Settings</Link>
                      </li>
                      <li className="flex items-center p-1 rounded-lg hover:bg-gray-100 transition-all">
                        <i className="bi bi-envelope mr-2 text-lg text-red-500"></i>
                        <Link href="/messages" className="text-gray-700 hover:text-red-500 transition-colors">Messages</Link>
                      </li>
                      <li className="flex items-center p-1 rounded-lg hover:bg-gray-100 transition-all">
                        <i className="bi bi-box-arrow-right mr-2 text-lg text-orange-500"></i>
                        <Link href="/logout" className="text-gray-700 hover:text-orange-500 transition-colors">Logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth/login">
                <i className="bi bi-person text-3xl text-slate-600 cursor-pointer"></i>
              </Link>
            )}
          </div>
          
          {/* Cart with item count */}
          <div className="relative">
  <div onClick={() => setIsCartOpen(!isCartOpen)} className="cursor-pointer relative">
    <i className="bi bi-cart text-2xl text-gray-800"></i>
    {totalCartItems > 0 && (
      <span className="absolute mt-[-3px] mr-[-3px] top-0 right-0 bg-red-500 text-white px-[5px] rounded-full text-[12px]">
        {totalCartItems}
      </span>
    )}
  </div>

  {/* Cart Dropdown */}
  {isCartOpen && (
    <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
      <CartDropdown cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )}
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
