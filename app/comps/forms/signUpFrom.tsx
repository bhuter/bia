"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    // Validate the form on every change
    useEffect(() => {
        const isValid =
            formData.name.length >= 3 &&
            /^[0-9]{10}$/.test(formData.phone) &&
            /\S+@\S+\.\S+/.test(formData.email) &&
            formData.password.length >= 6 &&
            formData.password === formData.confirm;
        
        setIsFormValid(isValid);
    }, [formData]);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validation for each input field
        switch (name) {
            case "name":
                setErrors({
                    ...errors,
                    name: value.length < 3 ? "Name must be at least 3 characters long." : "",
                });
                break;
            case "phone":
                setErrors({
                    ...errors,
                    phone: !/^[0-9]{10}$/.test(value) ? "Phone number must be 10 digits." : "",
                });
                break;
            case "email":
                setErrors({
                    ...errors,
                    email: !/\S+@\S+\.\S+/.test(value) ? "Enter a valid email address." : "",
                });
                break;
            case "password":
                setErrors({
                    ...errors,
                    password: value.length < 6 ? "Password must be at least 6 characters long." : "",
                });
                break;
            case "confirm":
                setErrors({
                    ...errors,
                    confirm: value !== formData.password ? "Passwords do not match." : "",
                });
                break;
            default:
                break;
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", formData);
            setIsSuccess(true);
            setResponseMessage(res.data.message || "Registered successfully!");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setIsSuccess(false);
                setResponseMessage(error.response?.data.message || "Registration failed due to server error");
            } else if (error instanceof Error) {
                setIsSuccess(false);
                setResponseMessage(error.message || "An unknown error occurred");
            } else {
                setIsSuccess(false);
                setResponseMessage("An unexpected error occurred");
            }
        }
    };

    return (
        <div className="flex justify-center p-2 mt-10">
            <div className="border border-blue-300 p-6 rounded-lg w-[35%]">
                <h1 className="text-center text-2xl text-gray-700">REGISTER NOW</h1>
                {responseMessage && (
                    <div
                        id="response"
                        className={`fixed px-6 py-3 shadow-lg ${isSuccess ? "bg-green-100" : "bg-red-100"} flex justify-between items-center right-9 top-[27%] z-[99] rounded-2xl border ${isSuccess ? "border-green-300" : "border-red-300"} text-slate-600`}
                    >
                        <p>{responseMessage}</p>
                        <span className="bi bi-x ml-3 cursor-pointer text-[18px]" onClick={() => setResponseMessage("")}></span>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-person text-lg text-gray-800"></i>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.name && <p className="text-red-500">{errors.name}</p>}

                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-telephone text-lg text-gray-800"></i>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}

                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-envelope text-lg text-gray-800"></i>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-key text-lg text-gray-800"></i>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}

                    <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                        <i className="bi bi-key text-lg text-gray-800"></i>
                        <input
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirm password"
                            className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.confirm && <p className="text-red-500">{errors.confirm}</p>}

                    <div className="mt-3">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full border my-5 ${isFormValid ? "bg-green-400" : "bg-gray-300"} py-[10px] rounded-md text-white`}
                        >
                            <i className="bi bi-box-arrow-in-right text-white"></i> REGISTER
                        </button>
                    </div>
                </form>
                <div className="text-right">
                    <span>Already a member? </span>
                    <Link href="/auth/login" className="text-blue-500">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
