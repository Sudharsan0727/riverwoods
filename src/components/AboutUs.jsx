import React, { useState, useRef, useEffect } from 'react';
import EnquiryModal from './EnquiryModal';
import about1 from '../assets/img/platinum/Cam_07.jpg';
import about2 from '../assets/img/platinum/Living Cam.jpg';
import reraLogo from '../assets/img/platinum_Rera.png';

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sectionRef = useRef(null);

    // Removed redundant local observer to rely on the global one in App.jsx or fixed class matching


    return (
        <section id="about" ref={sectionRef} className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background Minimal Texture */}
            <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] text-[150px] font-heading select-none pointer-events-none z-0 tracking-tighter">
                NATURE'S CALM URBAN COMFORT
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[70%] bg-[#faf9f8] rounded-l-full z-0 pointer-events-none hidden lg:block"></div>

            <div className="lux-container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                    
                    {/* Left: Modern Image Composition */}
                    <div className="hidden lg:block lg:w-5/12 relative animate-fade-up">

                        <div className="relative aspect-[3/4] rounded-t-full rounded-b-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white z-10">
                            <img 
                                src={about1} 
                                alt="Radiance Riverwoods Exterior" 
                                className="w-full h-full object-cover filter transition-transform duration-[1500ms] hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
                        </div>
                        
                        <div className="absolute -bottom-10 -right-4 lg:-right-20 w-[60%] aspect-square rounded-full overflow-hidden shadow-2xl border-[8px] border-white z-20 animate-fade-up animate-delay-2">

                            <img 
                                src={about2} 
                                alt="Radiance Riverwoods Luxury Interior" 
                                className="w-full h-full object-cover filter transition-transform duration-[1500ms] hover:scale-110"
                            />
                        </div>

                        {/* Design Accents */}
                        <div className="absolute top-1/4 -left-8 w-24 h-24 border border-gold/40 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none z-0 hidden md:block"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#B57C3C_2px,transparent_2px)] [background-size:16px_16px] opacity-20 z-0 pointer-events-none hidden md:block"></div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="w-full lg:w-7/12 lg:pl-16 xl:pl-28 mt-8 lg:mt-0 relative z-30">
                        <div className="animate-fade-up">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-[#B57C3C]"></div>
                                <span className="font-condensed text-gold uppercase tracking-[0.25em] text-[13px] font-bold block">
                                    ABOUT RIVERWOODS
                                </span>
                            </div>
                            
                            <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-heading font-bold mb-8 leading-[1.1] text-luxury-black">
                                Nature’s Calm, <br />
                                <span className="text-[#B57C3C] italic relative inline-block">
                                    Urban Comfort
                                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-gold/20 -z-10"></span>
                                </span>
                            </h2>
                            
                            <p className="font-body text-[16px] md:text-[17px] text-gray-600 leading-[1.8] mb-10 border-l-[3px] border-gold/40 pl-6 relative">
                                Discover a lifestyle where nature and city living exist in perfect harmony. Set against the scenic backdrop of the Western Ghats and the serene Noyyal River, Riverwoods offers a peaceful retreat without compromising on connectivity. Thoughtfully designed homes, surrounded by lush greenery and refreshing natural elements, create an environment that is both tranquil and vibrant. With easy access to key city hubs and everyday conveniences, it’s a home that brings you closer to nature while keeping you connected to everything that matters.
                            </p>
                        </div>

                        {/* Clean Minimal Info Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-12 animate-fade-up animate-delay-1">
                            {[
                                { title: "Configurations", value: "1, 2, 2.5 & 3 BHK" },
                                { title: "Blocks", value: "Basement + Stilt + 13 Floors" },
                                { title: "Development Size", value: "3 Acres | 377 Apartments" },
                                { title: "Location", value: "Perur Main Road, Coimbatore" }
                            ].map((item, idx) => (
                                <div key={idx} className="group cursor-default relative pl-4 border-l-2 border-transparent hover:border-[#B57C3C] transition-colors duration-300">
                                    <span className="text-[11px] md:text-[12px] text-luxury-black uppercase tracking-[0.2em] block mb-1.5 font-bold font-sans transition-colors">{item.title}</span>
                                    <span className="text-[15px] md:text-[16px] text-luxury-black font-medium block">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up animate-delay-2 mb-10">
                            <button 
                                onClick={() => setIsModalOpen(true)} 
                                className="bg-[#B57C3C] text-white flex items-center justify-center gap-2 py-4 px-8 text-[13px] font-heading tracking-widest hover:bg-[#7e1921] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                            >
                                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>DOWNLOAD BROCHURE</span>
                            </button>
                            
                            <button 
                                onClick={() => setIsModalOpen(true)} 
                                className="group flex items-center gap-3 text-luxury-black hover:text-[#B57C3C] font-bold uppercase tracking-widest text-[12px] md:text-[13px] transition-colors"
                            >
                                <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#B57C3C] group-hover:bg-[#B57C3C] group-hover:text-white transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                Payment Schedule
                            </button>
                        </div>
                        
                        {/* RERA */}
                        <div className="animate-fade-up animate-delay-3 flex items-center border-t border-gray-100 pt-8">
                            <img 
                                src={reraLogo} 
                                alt="RERA Registered" 
                                className="h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                            />
                        </div>
                    </div>

                </div>
            </div>

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AboutUs;

