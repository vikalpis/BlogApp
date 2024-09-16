import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-600 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200 transform transition-transform duration-500 hover:scale-105 animate-slideInUp">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-24">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Sign in to your account</h2>
                <p className="text-center text-base text-gray-600 mb-6">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="text-teal-500 hover:underline font-medium"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-500 text-center mb-6">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="space-y-4">
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
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <Button
                        type="submit"
                        className="w-full py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
