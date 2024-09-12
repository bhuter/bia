"use client";
import React, { useEffect, useState, ReactNode } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface AdsProps {
  children: ReactNode; // Define the type of children prop
}

const Ads: React.FC<AdsProps> = (props) => {
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
   window.removeEventListener('scroll', handleScroll);
  };
}, []);

    return (
        <div className={`p-[1px]  bg-yellow-100 w-full flex justify-center items-center transition-transform duration-500  ${isHidden ? '-translate-y-full fixed w-[95%] m-auto' : 'translate-y-0'}`}>
            <i className="bi bi-megaphone text-yellow-700 text-2xl"></i>
            <div className='flex items-center text-[14px]'>
                {props.children}
            </div>   
        </div>
    );
}
export default Ads;