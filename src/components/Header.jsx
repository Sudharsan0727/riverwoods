import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/riverwoods_logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] py-4 bg-white shadow-sm">
      <div className="lux-container flex justify-center">
        <Link to="/" className="w-32 md:w-48 transition-transform hover:scale-105 duration-300">
          <img 
            src={logo} 
            alt="Radiance Riverwoods Logo" 
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
