import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const AmenitiesIconGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    // 6 Premium amenities mirroring the structure
    const allAmenities = [
        {
            title: "Multi-purpose gathering zone",
            description: "A versatile space for community events and social interactions.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Kids play area",
            description: "A safe and fun environment for children to explore and play.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Co-working space",
            description: "A productive and inspiring environment to work from home effectively.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Swimming pool",
            description: "Relax, refresh, and unwind in our luxurious pool.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.13a1 1 0 01-.98 0l-7.97-4.13a1 1 0 01-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.13a1 1 0 01.98 0l7.97 4.13c.32.17.53.5.53.88v9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.52 14.3a1 1 0 01.48-.1h16a1 1 0 01.48.1M3.52 12.3a1 1 0 01.48-.1h16a1 1 0 01.48.1M3.52 10.3a1 1 0 01.48-.1h16a1 1 0 01.48.1" />
                </svg>
            )
        },
        {
            title: "Gymnasium",
            description: "Stay fit with our state-of-the-art fitness equipment.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m0 0c-1.105 0-2-.895-2-2v-4a2 2 0 114 0v4c0 1.105-.895 2-2 2zM9 8h6m-6 4h6m-6 4h6M6 4h12M6 20h12" />
                </svg>
            )
        },
        {
            title: "Multi-purpose play court",
            description: "Designed for various sports activities and active living.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 12m0 0l3-12m-3 12h12m0 0l3-12m-3 12l-3-12" />
                    <circle cx="12" cy="12" r="3" strokeWidth="1" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="section-padding bg-white relative">
            <div className="lux-container max-w-[1300px] relative z-10">
                
                {/* Asymmetric Split Layout */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24">
                    
                    {/* Left Column: Info & Button */}
                    <div className="w-full lg:w-[35%] animate-fade-up">

                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-luxury-black mb-6">
                            AMENITIES
                        </h2>
                        
                        <p className="text-xl text-luxury-text leading-relaxed mb-6 lg:mb-10 max-w-sm">
                            Discover a world of thoughtfully curated amenities designed to bring comfort, convenience, and luxury to your modern lifestyle.
                        </p>
                        
                        <button onClick={() => setIsModalOpen(true)} className="btn-gold hidden lg:flex items-center justify-center gap-3 whitespace-nowrap">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>View Amenities</span>
                        </button>
                    </div>

                    {/* Right Column: Grid of Exactly 6 Cards */}
                    <div className="w-full lg:w-[65%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animate-delay-1">
                            {allAmenities.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-[#f8f5f0] rounded-[4px] min-h-[220px] p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#9b7a44] hover:-translate-y-2 cursor-pointer shadow-sm relative overflow-hidden"
                                >
                                    <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-6">
                                        {/* Icon */}
                                        <div className="text-gold group-hover:text-white transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        {/* Standard Capitalized Title */}
                                        <h4 className="text-[17px] font-heading font-normal text-[#222222] group-hover:text-white transition-colors duration-500 tracking-wide px-4 mb-6">
                                            {item.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="absolute bottom-5 left-0 right-0 px-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <p className="!text-white text-[13px] font-sans leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile View Button - Visible only on mobile, below the 6 boxes */}
                        <div className="mt-10 lg:hidden flex justify-center animate-fade-up">
                            <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap w-full">
                                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>View Amenities</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AmenitiesIconGrid;
