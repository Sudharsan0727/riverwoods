import React from 'react';
import nextoLogo from '../assets/img/Powered_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#e8e8e8] text-[#333333] py-4 border-t border-gray-300">
      <div className="lux-container flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <p className="text-[13px] text-[#444]">Powered by</p>
          <a href="http://nextodigital.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <span className="text-[13px] text-[#444] font-medium">Nexto Digital</span>
            <img src={nextoLogo} alt="Nexto Digital Logo" className="h-4 w-auto object-contain" />
          </a>
        </div>
        <p className="text-[13px] text-[#444]">
          Copyrights © 2026 Radiance Realty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
