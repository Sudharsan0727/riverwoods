import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const ProjectHighlights = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const amenities = [
        {
            title: "3 & 4 BHKs have zero wall sharing",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="18" rx="1"/>
                    <rect x="14" y="3" width="7" height="18" rx="1"/>
                </svg>
            )
        },
        {
            title: "Each 4 BHK is designed with a private lift & lobby",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                    <path d="M12 7v10" />
                    <path d="M9 10l3-3 3 3" />
                    <path d="M15 14l-3 3-3-3" />
                </svg>
            )
        },
        {
            title: "All bedrooms have cross ventilation",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                </svg>
            )
        },
        {
            title: "All units have direct ventilation",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="M5 5l1.5 1.5"/>
                    <path d="M17.5 17.5L19 19"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="M5 19l1.5-1.5"/>
                    <path d="M17.5 6.5L19 5"/>
                </svg>
            )
        },
    ];

    return (
        <section id="highlights" className="section-padding bg-[#fff1f2] relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#9E212A_1px,transparent_1px)] [background-size:40px_40px]"></div>
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
                            className="group bg-white rounded-[4px] min-h-[200px] p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#9E212A] hover:-translate-y-2 cursor-pointer shadow-sm animate-fade-up animate-delay-1"
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
