"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleLogin = () => {
    // Simulate a successful login
    setIsSuccessVisible(true);

    // Hide the message after a few seconds
    setTimeout(() => {
      setIsSuccessVisible(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center p-2 mt-10">
        <div className="border border-blue-300 p-6 rounded-lg w-[30%]">  
          <div>
            <h1 className="text-center text-2xl text-gray-700">WELCOME BACK, </h1>
          <div>
            <div
              id="response"
              className={`fixed px-6 py-3 shadow-lg ${isSuccessVisible ? 'flex' : 'hidden'} justify-between items-center right-9 top-[27%] z-[99] rounded-2xl bg-green-100 border border-green-300 text-slate-600`}
            >
              <p>Login successfully!</p>
              <span className="bi bi-x ml-3 cursor-pointer text-[18px]"></span>
            </div>
            <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
              <i className="bi bi-person text-lg text-gray-800"></i>
              <input type="text" name="userName" id="userName" placeholder="Email address or phone" className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none" />
            </div>
            <span></span>
            <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
              <i className="bi bi-key text-lg text-gray-800"></i>
              <input type="password" name="passWord" id="passWord" placeholder="Password" className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none" />
            </div>
            <span></span>
            <div className="mt-3">
              <button onClick={handleLogin} className="w-full border my-5 bg-green-400 py-[10px] rounded-md text-white">
                <i className="bi bi-box-arrow-in-right text-white"></i> LOGIN
              </button>
            </div>
            <div className="text-right">
              <span>New here? </span>
              <Link href="/auth/signup" className="text-blue-500">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
