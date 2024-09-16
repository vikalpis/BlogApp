import React, { useState } from 'react';
import { Container, Logo, LogOutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); 

  // Navigation items with active states
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <Container>
        <nav className="container mx-auto flex items-center justify-between p-5">
          {/* Logo */}
          <div className="text-2xl font-bold transition duration-500 ease-in-out transform hover:scale-110">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? <FiX /> : <FiMenu />} 
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          
          <ul className="hidden md:flex ml-auto space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="group">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-5 py-2 text-lg rounded-full transition duration-300 ease-in-out transform bg-gray-700 hover:bg-blue-950 hover:scale-110 hover:text-white group-hover:shadow-md"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <ul className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-5 space-y-4 shadow-lg">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="group">
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false); 
                      }}
                      className="block w-full text-left px-5 py-2 text-lg rounded-full transition duration-300 ease-in-out transform bg-gray-700 hover:bg-blue-500 hover:scale-105 hover:text-white group-hover:shadow-md"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogOutBtn />
                </li>
              )}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
