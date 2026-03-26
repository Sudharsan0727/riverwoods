import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';

const AmenitiesIconGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const allAmenities = [
        {
            title: "Swimming Pool",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 20a2.42 2.42 0 0 0-1.89-.9 2.42 2.42 0 0 0-1.99.92 2.42 2.42 0 0 1-1.89.9 2.42 2.42 0 0 1-1.91-.9 2.42 2.42 0 0 0-1.89-.92 2.42 2.42 0 0 0-1.89.92 2.42 2.42 0 0 1-1.89.9 2.42 2.42 0 0 1-1.91-.9 2.42 2.42 0 0 0-1.89-.92 2.42 2.42 0 0 0-1.89.92 2.42 2.42 0 0 1-1.89.9M6 14V3.5a2 2 0 1 1 4 0V8M14 14V3.5a2 2 0 1 1 4 0V8" />
                </svg>
            )
        },
        {
            title: "Kids Play Area",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v12m12-12v12M5 15h14M8 21l3-6m5 6l-3-6" />
                </svg>
            )
        },
        {
            title: "Outdoor Gym",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 7v10m12-10v10M4 9h4m12 0h-4M8 12h8" />
                </svg>
            )
        },
        {
            title: "Adventure Zone",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
            )
        },
        {
            title: "Amphitheatre",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
            )
        },
        {
            title: "Indoor Games",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <circle cx="9" cy="9" r="1.2" fill="currentColor" />
                    <circle cx="15" cy="15" r="1.2" fill="currentColor" />
                    <circle cx="9" cy="15" r="1.2" fill="currentColor" />
                    <circle cx="15" cy="9" r="1.2" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="relative py-20 bg-[#faf9f8] overflow-hidden">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 z-0"></div>

            <div className="lux-container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Compact Sidebar */}
                    <div className="w-full lg:w-1/3 animate-fade-up text-center lg:text-left">
                        <span className="font-condensed text-gold uppercase tracking-[0.3em] text-[12px] font-bold mb-4 block">
                            Curated Lifestyle
                        </span>
                        <h2 className="text-[36px] md:text-[42px] font-heading leading-tight text-luxury-black mb-6">
                            Exceptional <span className="text-[#002A22] italic">Amenities</span>
                        </h2>
                        <p className="font-body text-[16px] text-gray-400 mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0">
                            A focused collection of premium lifestyle features designed to enhance your everyday wellness.
                        </p>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="btn-gold !py-3 !px-8 !text-[14px] flex items-center gap-3 w-fit mx-auto lg:mx-0"
                        >
                            <span>Explore all amenities</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Compact Icon Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 animate-fade-up animate-delay-1">
                        {allAmenities.map((item, index) => (
                            <div 
                                key={index}
                                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center border border-[#002a22]/25 hover:border-[#002a22]/50"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#faf9f8] flex items-center justify-center text-gold group-hover:bg-[#002A22] group-hover:text-white transition-all duration-500 mb-5">
                                    {item.icon}
                                </div>
                                <h4 className="text-[14px] md:text-[15px] font-heading font-bold text-luxury-black group-hover:text-[#002A22] transition-colors duration-300 uppercase tracking-widest">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AmenitiesIconGrid;
