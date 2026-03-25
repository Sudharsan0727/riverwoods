import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const ProjectHighlights = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const amenities = [
        {
            title: "Superior fixtures & Top of the line Specification",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M5 21l.5-5.5L18 3l3 3L8.5 18.5 3 19l2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 6l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "100% Vastu Compliance",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-14.12-6.12l2.12 2.12m9.9 9.9l2.12 2.12M6.88 17.12l-2.12 2.12m14.24-14.24l-2.12 2.12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "70% Open Space Across the Project",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M12 19V5M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Covered car park for all the units",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 17h2m10 0h2m-14 0V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8M9 7l1-3h4l1 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
    ];

    return (
        <section id="highlights" className="section-padding bg-[#f8f5f0] relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#002A22_1px,transparent_1px)] [background-size:40px_40px]"></div>
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
                            className="group bg-white rounded-[4px] min-h-[200px] p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#002A22] hover:-translate-y-2 cursor-pointer shadow-sm animate-fade-up animate-delay-1"
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
