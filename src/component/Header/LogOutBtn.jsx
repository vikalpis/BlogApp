import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogOutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className="px-6 py-2 text-white bg-gray-700 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-blue-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={logoutHandler}
        >
            Log Out
        </button>
    );
}

export default LogOutBtn;
