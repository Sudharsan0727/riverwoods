import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';
import about1 from '../assets/img/about1.jpg';
import about2 from '../assets/img/about2.jpg';

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <section id="about" className="section-padding bg-white overflow-hidden">
            <div className="lux-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Content Column */}
                    <div className="animate-fade-up">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-2 block">
                            ABOUT RADIANCE ETERNITY
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading mb-4 leading-[1.1] text-luxury-black">
                            Elevated Living, <br /> <span className="text-gold italic">Endless Comfort</span>
                        </h2>
                        
                        <div className="mb-6">
                            <p className="text-lg !text-black opacity-100 font-medium leading-relaxed">
                                Discover a world where luxury takes centre stage - where architectural brilliance meets refined functionality. A home that reflects pride, prestige and aspiration. More than just a residence, it's your sanctuary for today and generations to come.
                            </p>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-2 mb-6">
                            <div className="flex items-start gap-4">
                                <span className="text-gold mt-1 shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                </span>
                                <p className="text-[17px] text-black font-medium"><span className="font-bold text-luxury-black">Type:</span> 2, 3 &amp; 4 BHK Apartments</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-gold mt-1 shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                </span>
                                <p className="text-[17px] text-black font-medium"><span className="font-bold text-luxury-black">Blocks:</span> A &amp; B – 2 Basement + Stilt + 22 Floors / 10 Floors</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-gold mt-1 shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                </span>
                                <p className="text-[17px] text-black font-medium"><span className="font-bold text-luxury-black">Development Size:</span> 2.21 Acres &nbsp;|&nbsp; <span className="font-bold text-luxury-black">Units:</span> 215 Apartments</p>
                            </div>
                        </div>

                        {/* Action Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 w-full whitespace-nowrap group">
                                <svg className="w-4 h-4 shrink-0 relative z-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M3 20h18" />
                                </svg>
                                <span className="relative z-10">Download Brochure</span>
                            </button>
                            
                            <a href="tel:+917418066657" className="bg-[#6d6d6d] text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-all duration-300 flex items-center justify-center gap-2 w-full whitespace-nowrap">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Right Images Column */}
                    <div className="hidden lg:flex gap-4 md:gap-8 animate-fade-up h-[300px] md:h-[400px] lg:h-[500px] items-center">
                        {/* First Image - Floating Up/Down */}
                        <div className="flex-1 h-[90%] md:h-[80%] overflow-hidden rounded-2xl shadow-lg mt-12 bg-luxury-gray animate-float">
                            <img 
                                src={about1} 
                                alt="Luxury Interior" 
                                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                        
                        {/* Second Image - Floating Up/Down Staggered */}
                        <div className="flex-1 h-[90%] md:h-[80%] overflow-hidden rounded-2xl shadow-lg mb-12 bg-luxury-gray animate-float-delayed">
                            <img 
                                src={about2} 
                                alt="Building Exterior" 
                                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AboutUs;
