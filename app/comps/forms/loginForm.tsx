"use client"; // Make sure this is at the top of the file

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { userName, password } = formData;

        if (!userName || !password) {
            setResponseMessage("Both fields are required.");
            setIsError(true);
            setIsSuccess(false);
            return;
        }

        setLoading(true); // Start loading
        try {
            const response = await axios.post("http://localhost:5000/login", formData);
            
            // Update localStorage with the new session
            localStorage.setItem('userSession', JSON.stringify({
                id: response.data.user.id,
                name: response.data.user.name,
                session_id: response.data.user.session_id,
            }));

            setResponseMessage(response.data.message || "Login successfully!");
            setIsSuccess(true);
            setIsError(false);
            router.push('/');
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setResponseMessage(error.response?.data.message || "Login failed due to server error.");
                setIsError(true);
                setIsSuccess(false);
            } else if (error instanceof Error) {
                setResponseMessage(error.message || "An unknown error occurred.");
                setIsError(true);
                setIsSuccess(false);
            } else {
                setResponseMessage("An unexpected error occurred.");
                setIsError(true);
                setIsSuccess(false);
            }
        } finally {
            setLoading(false); // Stop loading
        }

        // Clear message after a few seconds
        setTimeout(() => {
            setResponseMessage("");
        }, 3000);
    };

    return (
        <div className="flex justify-center p-2 mt-10">
            <div className="border border-blue-300 p-6 rounded-lg w-[30%]">  
                <h1 className="text-center text-2xl text-gray-700">WELCOME BACK</h1>
                <div id="response" className={`fixed px-6 py-3 shadow-lg ${isSuccess ? 'bg-green-100 border-green-300' : isError ? 'bg-red-100 border-red-300' : 'hidden'} flex justify-between items-center right-9 top-[27%] z-[99] rounded-2xl text-slate-600`}>
                    <p>{responseMessage}</p>
                    <span className="bi bi-x ml-3 cursor-pointer text-[18px]" onClick={() => setResponseMessage("")}></span>
                </div>
                <form onSubmit={handleLogin} autoComplete='off'>
                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-person text-lg text-gray-800"></i>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Email address or phone"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-key text-lg text-gray-800"></i>
                        <input
                            type="password"
                            name="password"
                            id="passWord"
                            placeholder="Password"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="w-full border my-5 bg-green-400 py-[10px] rounded-md text-white" disabled={loading}>
                            {loading ? 'Logging in...' : <><i className="bi bi-box-arrow-in-right text-white"></i> LOGIN</>}
                        </button>
                    </div>
                </form>
                <div className="text-right">
                    <span>New here? </span>
                    <Link href="/auth/signup" className="text-blue-500">Create account</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
