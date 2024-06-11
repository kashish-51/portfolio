// src/components/Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white flex " >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-3xl font-bold">
          ARNAV<span className="text-fuchsia-600"> Singh</span>
        </div>
        <ul className="hidden md:flex mx-10 space-x-10">
          <li>
            <a href="#home" className="block text-sm px-2 py-4 align-middle hover:bg-pink-600">Home</a>
          </li>
          <li>
            <a href="#about" className="block text-sm px-2 py-4 hover:bg-pink-600">About me</a>
          </li>
          <li>
            <a href="#services" className="block text-sm px-2 py-4 hover:bg-pink-600">Services</a>
          </li>
          <li>
            <a href="#work" className="block text-sm px-2 py-4 hover:bg-pink-600">My work</a>
          </li>
          <li>
            <a href="#testimonials" className="block text-sm px-2 py-4 hover:bg-pink-600">Testimonials</a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 px-4 rounded-full hidden md:block">
          Connect with me
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button mr-10 " onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center justify-center h-screen`}>
        <ul className="flex flex-col items-center mx-32 space-y-4">
          <li>
            <a href="#home" className="block text-sm px-2 py-4 align-middle hover:bg-pink-600">Home</a>
          </li>
          <li>
            <a href="#about" className="block text-sm px-2 py-4 hover:bg-pink-600">About me</a>
          </li>
          <li>
            <a href="#services" className="block text-sm px-2 py-4 hover:bg-pink-600">Services</a>
          </li>
          <li>
            <a href="#work" className="block text-sm px-2 py-4 hover:bg-pink-600">My work</a>
          </li>
          <li>
            <a href="#testimonials" className="block text-sm px-2 py-4 hover:bg-pink-600">Testimonials</a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 px-4 rounded-full mt-4">
          Connect with me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
