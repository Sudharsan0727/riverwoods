import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';
import floorPlan1 from '../assets/img/Floor_plan/2BHK +2T.png';
import floorPlan2 from '../assets/img/Floor_plan/3BHK + 3T.png';
import floorPlan3 from '../assets/img/Floor_plan/4BHK + 4T.png';

const roomsData = [
    {
        id: 1,
        title: "2 BHK + 2T",
        img: floorPlan1,
        price: "₹ 85 L",
        beds: "2 Bed",
        area: "1062 Sq.ft.",
        extraInfo: "2 Bathroom",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "3BHK + 2T",
        img: floorPlan2, // Using existing 3BHK image
        price: "₹ 1.25 Cr",
        beds: "3 Bed",
        area: "1388 Sq.ft.",
        extraInfo: "2 Bathroom",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "3BHK + 3T",
        img: floorPlan2,
        price: "₹ 1.35 Cr",
        beds: "3 Bed",
        area: "1525 Sq.ft.",
        extraInfo: "3 Bathroom",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    }
];

const RoomCard = ({ title, img, beds, area, extraInfo, extraIcon, price, onOpenPopup, onViewImage }) => (
    <div className="group relative h-[320px] lg:h-[450px] overflow-hidden rounded-[4px] cursor-pointer block-select-none">
        {/* Background Image */}
        <img 
            src={img} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 blur-[6px] group-hover:scale-110" 
        />
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/40 to-black/20 opacity-90 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

        {/* Centered Buttons (Always Visible) */}
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-4 z-10 pointer-events-none p-4">
            <button 
                onClick={onOpenPopup} 
                className="bg-gold text-white px-7 py-3 rounded-full uppercase tracking-[0.2em] text-[10px] font-bold pointer-events-auto hover:bg-white hover:text-luxury-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center group/btn"
            >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Plan
            </button>
            {/* View Image Button hidden as per request
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onViewImage(img);
                }} 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-3 rounded-full uppercase tracking-[0.2em] text-[10px] font-bold pointer-events-auto hover:bg-white hover:text-luxury-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-2 w-full sm:w-auto justify-center group/btn2"
            >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn2:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Image
            </button>
            */}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 lg:p-12 lg:pb-16 flex justify-between items-end">
            
            {/* Left Info Block (Slides up on hover) */}
            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                
                <h3 className="text-3xl lg:text-[2rem] font-heading text-white mb-4 transition-colors duration-300 group-hover:text-gold">
                    {title}
                </h3>

                {/* Bottom Info Bar */}
                <div className="flex flex-wrap items-center gap-6 text-white/90 text-[13px] font-sans">
                    {/* Area info */}
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span>{area}</span>
                    </div>
                </div>
            </div>

            {/* Right Arrow Button (Fades & slides in on hover) */}
            <div 
                onClick={onOpenPopup}
                className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out delay-100 shrink-0 hidden sm:block cursor-pointer"
            >
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white hover:bg-white hover:text-luxury-black transition-colors shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

const Rooms = () => {
    const sliderRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const scrollPrev = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth / (window.innerWidth >= 1024 ? 2 : 1);
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth / (window.innerWidth >= 1024 ? 2 : 1);
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="floor-plan" className="section-padding bg-[#f8f5f0] relative">
            
            <div className="lux-container">
                {/* Top Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-16 lg:gap-24">
                    
                    {/* Left Titles */}
                    <div className="max-w-xl animate-fade-up">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            PROJECT DETAILS
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-luxury-black mb-0">
                            Floor <span className="text-gold italic">Plan</span>
                        </h2>
                    </div>

                    {/* Right Content & Controls */}
                    <div className="flex gap-8 lg:gap-16 items-center flex-1 justify-start lg:justify-end animate-fade-up animate-delay-1">
                        <p className="text-luxury-text text-lg leading-relaxed max-w-lg hidden lg:block">
                            Explore thoughtfully designed floor plans that blend space, comfort, and functionality — crafted to suit modern lifestyles across spacious 2, 3, and 4 BHK homes.
                        </p>
                        
                        {/* Circle Navigation Arrows */}
                        <div className="flex gap-4 shrink-0">
                            <button 
                                onClick={scrollPrev}
                                className="w-12 h-12 rounded-full border border-luxury-black flex items-center justify-center text-luxury-black hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={scrollNext}
                                className="w-12 h-12 rounded-full border border-luxury-black flex items-center justify-center text-luxury-black hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Layout */}
                <div 
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll animate-fade-up animate-delay-2"
                >
                    {roomsData.map((room) => (
                        <div key={room.id} className="snap-start shrink-0 w-full lg:w-[calc(50%-12px)]">
                            <RoomCard 
                                {...room} 
                                onOpenPopup={() => setIsModalOpen(true)} 
                                onViewImage={(img) => setSelectedImage(img)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Image Popup Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-modal-overlay"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl relative animate-modal-content overflow-hidden p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button - Floats over the top right corner */}
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-luxury-black transition-colors p-2 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="flex items-center justify-center max-h-[85vh] overflow-hidden">
                            <img 
                                src={selectedImage} 
                                alt="Floor Plan" 
                                className="max-w-full h-auto object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
};


export default Rooms;
