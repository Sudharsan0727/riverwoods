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
            title: "Swimming Pool",
            description: "Relax, refresh, and unwind in our luxurious pool.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.5 10c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5z" />
                    <path d="M16.5 10c-1.5-.5-3-1.5-4.5-3.5L8 3c-1-1-1.5.5-1 1l3 4.5c.5.8 1.5 1.5 2.5 1.8l-7.5 5.2h11.5L20 11.5l-3.5-1.5z" />
                    <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                        <path d="M2 15c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0" />
                        <path d="M2 18c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0" />
                        <path d="M2 21c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0" />
                    </g>
                </svg>
            )
        },
        {
            title: "Meditation Pavilion",
            description: "A tranquil space dedicated to wellness and inner peace.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="2.5" r="1.2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-1.5 0-2.8 1.2-2.8 2.8 0 1 0.5 1.8 1.3 2.3 0.5 0.3 1 0.5 1.5 0.5s1-0.2 1.5-0.5c0.8-0.5 1.3-1.3 1.3-2.3 0-1.6-1.3-2.8-2.8-2.8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 10.5c-2 1-3.5 2.5-4 5M14 10.5c2 1 3.5 2.5 4 5M9.5 11c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5" opacity="0.8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 13.5L3 18.5l3.5 2.5M17 13.5L21 18.5l-3.5 2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 21h20c-1-3-4-4.5-5-4.5H7c-1 0-4 1.5-5 4.5z" />
                </svg>
            )
        },
        {
            title: "Multipurpose Hall",
            description: "Perfect for events, gatherings, and celebrations.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                    <line x1="8" x2="8" y1="10" y2="20"/>
                    <line x1="16" x2="16" y1="10" y2="20"/>
                </svg>
            )
        },
        {
            title: "Gym",
            description: "Stay fit with our state-of-the-art fitness equipment.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 7v10M18 7v10M4 9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V9zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V9zM8 12h8" />
                </svg>
            )
        },
        {
            title: "Kids Play Area",
            description: "A safe and fun environment for children to explore and play.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 22h4l-1-4h-2l-1 4z" />
                    <circle cx="12" cy="17" r="1.5" />
                    <rect x="2" y="15" width="20" height="1.2" transform="rotate(-12 12 16)" rx="0.5" />
                    <g transform="translate(6, 14) rotate(-12)">
                        <circle cx="-1" cy="-6" r="1.8" />
                        <path d="M-2 -4c-0.5 1-1 3.5-1 4.5s0.5 2.5 1.5 2.5 2-1 2-2c0-1-0.5-4-1-5z" />
                        <path d="M0 -1h2.5v2" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                    </g>
                    <g transform="translate(18, 11.5) rotate(-12)">
                        <circle cx="1" cy="-6" r="1.8" />
                        <path d="M0 -4c-0.5 1-1 3.5-1 4.5s0.5 2.5 1.5 2.5 2-1 2-2c0-1-0.5-4-1-5z" />
                        <path d="M0 -1h-2.5v2" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                    </g>
                </svg>
            )
        },
        {
            title: "Business Lounge",
            description: "A productive and inspiring environment to work seamlessly.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="relative py-20 bg-white border-y border-gray-100 overflow-hidden">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#faf9f8] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
                    <span className="font-condensed text-gold uppercase tracking-[0.25em] text-[12px] mb-3 block">
                        WORLD-CLASS FACILITIES
                    </span>
                    <h2 className="text-[34px] md:text-[44px] font-heading leading-tight text-luxury-black mb-5">
                        Exceptional <span className="text-[#9E212A] italic">Amenities</span>
                    </h2>
                    <p className="font-body text-gray-500 text-[15px] max-w-2xl mx-auto">
                        Experience a lifestyle designed for your utmost comfort, wellness, and leisure with our thoughtfully curated premium spaces.
                    </p>
                </div>

                {/* Small Icon Box Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 animate-fade-up animate-delay-1">
                    {allAmenities.map((item, index) => (
                        <div 
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl hover:border-gold hover:shadow-[0_15px_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-500 hover:-translate-y-2 cursor-pointer aspect-square relative overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Hover accent top line */}
                            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-[#9E212A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            
                            <div className="text-gray-400 group-hover:text-[#9E212A] transition-colors duration-500 mb-4 transform group-hover:scale-110">
                                {React.cloneElement(item.icon, { className: "w-10 h-10 md:w-12 md:h-12 m-0 stroke-[1.2]" })}
                            </div>
                            
                            <h4 className="text-[13px] md:text-[14px] font-heading text-center text-luxury-black group-hover:text-[#9E212A] transition-colors duration-500 leading-tight px-2">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* View All Features Button */}
                <div className="mt-16 flex justify-center animate-fade-up animate-delay-2">
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="bg-[#9E212A] text-white flex items-center justify-center gap-2 py-3.5 px-10 text-[12px] md:text-[13px] font-heading tracking-widest hover:bg-[#7e1921] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                    >
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="truncate">VIEW ALL FEATURES</span>
                    </button>
                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AmenitiesIconGrid;
