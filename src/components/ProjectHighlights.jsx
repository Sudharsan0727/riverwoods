import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const ProjectHighlights = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const amenities = [
        {
            title: "On Main Road Project",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 21L5 3h14l-3 18H8z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 7v2m0 4v2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2 21h20"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 17c2-1 4-1.5 8-1.5s6 .5 8 1.5"/>
                </svg>
            )
        },
        {
            title: "Ultra-Luxury Living",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9.75L12 3l9 6.75V21H3V9.75z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 21V12h6v9"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3l1.5 1.5M12 3l-1.5 1.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 13h2m8 0h2M6 16h2m8 0h2"/>
                </svg>
            )
        },
        {
            title: "Panoramic Skyline View",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2 20h20"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 20V10l4-4 4 4V8l4-4 4 4v12"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20v-5h4v5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2 12a10 10 0 0 1 20 0" opacity="0.4"/>
                    <circle cx="12" cy="6" r="1.2" strokeWidth="1" fill="currentColor"/>
                </svg>
            )
        },
        {
            title: "100% Vastu Compliant",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="1"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v18M3 12h18"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3l2.5 2.5M12 3l-2.5 2.5M12 21l2.5-2.5M12 21l-2.5-2.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 9l6 6m0-6l-6 6" opacity="0.5"/>
                    <circle cx="12" cy="12" r="2" strokeWidth="1"/>
                </svg>
            )
        },
    ];

    return (
        <section id="highlights" className="section-padding bg-[#f8f5f0] relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#9b7a44_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="lux-container relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12 md:mb-24 animate-fade-up">
                    <div className="max-w-xl text-center md:text-left">

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-luxury-black leading-[1.1]">
                            Project <span className="text-gold italic">Highlights</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Schedule a Site Visit</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 animate-fade-up animate-delay-2">
                    {amenities.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-[4px] min-h-[200px] p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#9b7a44] hover:-translate-y-2 cursor-pointer shadow-sm animate-fade-up animate-delay-1"
                        >
                            <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
                                {/* Icon matching Amenities style */}
                                <div className="text-gold group-hover:text-white transition-colors duration-500 mb-6">
                                    {item.icon}
                                </div>

                                {/* Heading matching Amenities style */}
                                <h4 className="text-[17px] lg:text-[19px] font-heading font-normal text-luxury-black group-hover:text-white transition-colors duration-500 tracking-wide px-2 leading-tight">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Button - Visible only on mobile, below cards */}
                <div className="mt-12 flex justify-center md:hidden animate-fade-up">
                    <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap w-full sm:w-auto">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Schedule a Site Visit</span>
                    </button>
                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default ProjectHighlights;
