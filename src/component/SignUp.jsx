import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function SignUp() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(login(currentUser));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200 transform transition-transform duration-500 hover:scale-105 animate-slideInUp">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-24">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Sign Up</h2>
                <p className="text-center text-base text-gray-600 mb-6">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="text-blue-500 hover:underline font-medium"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 text-center mb-6">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="space-y-4">
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: "Full Name is required",
                        })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Invalid email address",
                            }
                        })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
