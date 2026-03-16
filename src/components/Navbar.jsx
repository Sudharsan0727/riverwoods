import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eternityLogo from '../assets/img/Radiane1.png';
import whiteLogo from '../assets/img/eternity-logo-white.svg';
import EnquiryModal from './EnquiryModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-3 shadow-sm' : 'bg-white md:bg-transparent py-3 md:py-4 shadow-sm md:shadow-none'}`}>
      <div className="lux-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`transition-all duration-500 ${isScrolled ? 'w-32 md:w-44' : 'w-40 md:w-56'}`}>
          <img
            src={eternityLogo}
            alt="Radiant Logo"
            className="w-full transition-all duration-500 object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href="tel:+917418066657" className={`btn-gold !flex items-center gap-1.5 md:gap-2 !py-2 px-3 md:!px-5`}>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[12px] md:text-[15px] font-bold tracking-[0.05em] md:tracking-[0.1em] whitespace-nowrap">+91 74180 66657</span>
          </a>
          
          {isScrolled && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block btn-gold !py-2 !px-6 !text-[15px] font-bold tracking-[0.1em] whitespace-nowrap"
            >
              Enquiry Now
            </button>
          )}
        </div>
      </div>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
