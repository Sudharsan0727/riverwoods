import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';
import about1 from '../assets/img/platinum/1 (8).jpg';
import about2 from '../assets/img/platinum/1 (4).jpg';
import reraLogo from '../assets/img/platinum_Rera.png';

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sectionRef = useRef(null);

    return (
        <section id="about" ref={sectionRef} className="relative py-20 lg:py-28 bg-[#faf9f8] overflow-hidden border-y border-gray-100">
            {/* Custom Keyframes for Smooth Floating Animation */}
            <style>
                {`
                    @keyframes floatSoft {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                        100% { transform: translateY(0px); }
                    }
                    @keyframes floatReverse {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(12px); }
                        100% { transform: translateY(0px); }
                    }
                    .animate-float-slow { animation: floatSoft 6s ease-in-out infinite; }
                    .animate-float-reverse { animation: floatReverse 7s ease-in-out infinite; }
                `}
            </style>

            {/* Animated Ambient Background Globs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#9E212A]/10 blur-[120px] rounded-full animate-pulse transition-all duration-[4000ms]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[55%] bg-[#D4AF37]/15 blur-[140px] rounded-full animate-pulse transition-all duration-[6000ms]" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="lux-container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    
                    {/* Left Content: Text & Animated Elements */}
                    <div className="w-full lg:w-1/2 relative z-20">
                        <div className="animate-fade-up">
                            <span className="font-condensed text-gold uppercase tracking-[0.25em] text-[13px] mb-4 block">
                                ABOUT RADIANCE PLATINUM
                            </span>
                            
                            <h2 className="text-[34px] md:text-[44px] font-heading mb-6 leading-[1.15] text-luxury-black">
                                Prime Living, <br />
                                <span className="text-[#9E212A] italic bg-clip-text relative inline-block">
                                    Pure Sophistication
                                    {/* Animated underline */}
                                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-[#9E212A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                                </span>
                            </h2>
                            
                            <p className="font-body text-[16px] text-gray-600 leading-[1.8] mb-10">
                                Experience elevated living in the heart of the city—where luxury blends seamlessly with comfort. Thoughtfully designed to reflect elegance at every turn, Platinum offers residences that stand out with timeless architecture and refined interiors. From premium fittings to meticulous craftsmanship, every detail is curated to deliver a lifestyle that is both distinguished and effortlessly modern. More than just a home, it’s a space that defines prestige and urban living at its finest.
                            </p>
                        </div>

                        {/* Interactive Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 animate-fade-up animate-delay-2">
                            {[
                                { label: "Type", value: "3 & 4 BHK Apartments" },
                                { label: "Blocks", value: "B + Stilt + 13 Floors" },
                                { label: "Development", value: "1.23 Acres | 62 Apartments" },
                                { label: "Location", value: "Koramangala, Bengaluru" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/60 backdrop-blur-md border border-white p-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(158,33,42,0.1)] hover:-translate-y-2 transition-all duration-500 group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-[#9E212A] group-hover:text-white transition-colors duration-500 transform group-hover:rotate-12">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col justify-center h-full">
                                            <p className="text-[14px] text-luxury-black leading-tight">
                                                <strong className="font-bold font-heading text-[15px]">{item.label}:</strong> <span className="text-gray-700">{item.value}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="w-full pt-4 animate-fade-up animate-delay-3">
                            <div className="mb-6 flex">
                                <img 
                                    src={reraLogo} 
                                    alt="RERA Registered" 
                                    className="h-16 sm:h-20 object-contain opacity-95 hover:opacity-100 transition-opacity" 
                                />
                            </div>
                            <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
                                <button 
                                    onClick={() => setIsModalOpen(true)} 
                                    className="bg-[#9E212A] text-white flex-1 flex items-center justify-center gap-2 py-3 md:py-3.5 text-[10px] sm:text-[11px] md:text-[13px] font-heading tracking-wider hover:bg-[#7e1921] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-sm"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span className="truncate">DOWNLOAD BROCHURE</span>
                                </button>
                                <button 
                                    onClick={() => setIsModalOpen(true)} 
                                    className="bg-[#6B6B6B] text-white flex-1 flex items-center justify-center gap-2 py-3 md:py-3.5 text-[10px] sm:text-[11px] md:text-[13px] font-heading tracking-wider hover:bg-[#525252] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-sm"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="truncate">DOWNLOAD PAYMENT SCHEDULE</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Floating Animated Image Composition */}
                    <div className="w-full lg:w-1/2 relative z-10 hidden md:block">
                        <div className="relative w-full h-[600px] flex items-center justify-center">
                            
                            {/* Animated Gold Ring Background */}
                            <div className="absolute w-[450px] h-[450px] border-[1px] border-gold/40 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
                            <div className="absolute w-[350px] h-[350px] border-[1px] border-dashed border-[#9E212A]/30 rounded-full animate-[spin_15s_linear_infinite_reverse] z-0"></div>

                            {/* Floating Main Image */}
                            <div className="absolute z-10 right-0 top-[10%] w-[75%] rounded-2xl overflow-hidden shadow-2xl animate-float-slow border-4 border-white/50 backdrop-blur-sm">
                                <img 
                                    src={about1} 
                                    alt="Radiance Platinum Architecture" 
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Floating Secondary Image */}
                            <div className="absolute z-20 left-0 bottom-[15%] w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float-reverse border-4 border-white">
                                <img 
                                    src={about2} 
                                    alt="Luxury Interior" 
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AboutUs;
