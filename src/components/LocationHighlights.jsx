import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

// Using the generated premium images
import schoolImg from '../assets/img/School.jpg';
import collegeImg from '../assets/img/college.jpg';
import hospitalImg from '../assets/img/Hospital.jpg';

const LocationHighlights = () => {
    const locations = [
        {
            id: 1,
            title: "Schools",
            img: schoolImg,
            tag: "EDUCATION",
            places: [
                { name: "Vasavi Vidyala School", dist: "350 Mtr" },
                { name: "Thavatiru Santha Lingar school", dist: "1.5 Km" },
                { name: "Motherland School", dist: "1.6 Km" },
                { name: "Star Kids Mont World", dist: "900 Mtr" },
                { name: "Shirushti Vidyalaya School", dist: "1.9 Km" }
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="#B57C3C" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Colleges",
            img: collegeImg,
            tag: "HIGHER EDUCATION",
            places: [
                { name: "Government College of Technology", dist: "7.5 Km" },
                { name: "Tamilnadu Agriculture University", dist: "6.8 Km" },
                { name: "PSG College of Technology", dist: "11.2 Km" },
                { name: "Karunya University", dist: "22 Km" }
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="#B57C3C" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Hospitals",
            img: hospitalImg,
            tag: "HEALTHCARE",
            places: [
                { name: "Telungupalayam Hospital", dist: "200 Mtr" },
                { name: "Rubha Hospital", dist: "500 Mtr" },
                { name: "Snekaram Multi Speciality Hospital", dist: "1.1 Km" },
                { name: "Rani Hospital", dist: "1.5 Km" }
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="#B57C3C" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6M12 7v6" />
                </svg>
            )
        }
    ];

    const [activeId, setActiveId] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <section className="section-padding bg-[#f8f5f0] overflow-hidden">
            <div className="lux-container">
                {/* Header Section */}
                <div className="text-center mb-20 animate-fade-up">
                    <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                        Explore the Area
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-luxury-black max-w-2xl mx-auto">
                        Location <span className="text-gold italic">Highlights</span>
                    </h2>
                </div>

                {/* Modern Expandable Image Grid (Bento Style) */}
                <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[500px] animate-fade-up animate-delay-1">
                    {locations.map((loc) => {
                        const isActive = activeId === loc.id;
                        return (
                            <div 
                                key={loc.id}
                                onMouseEnter={() => setActiveId(loc.id)}
                                className={`group relative flex flex-col lg:flex-row transition-all duration-700 ease-in-out cursor-pointer overflow-hidden rounded-[4px] ${
                                    isActive ? 'lg:flex-[2]' : 'lg:flex-1'
                                }`}
                            >
                                {/* Image Part */}
                                <div className="relative h-[250px] lg:h-full w-full lg:min-w-[200px] overflow-hidden">
                                    <img 
                                        src={loc.img} 
                                        alt={loc.title}
                                        className={`w-full h-full object-cover transition-transform duration-1000 ${
                                            isActive ? 'scale-110' : 'scale-100'
                                        }`}
                                    />
                                    {/* Dark Overlay */}
                                    <div className={`absolute inset-0 transition-colors duration-500 ${
                                        isActive ? 'bg-black/40' : 'bg-black/20'
                                    }`}></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
                                        <h3 className="text-white font-heading text-3xl tracking-wide drop-shadow-lg">
                                            {loc.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Info Div (Slides out when active) */}
                                <div className={`bg-white transition-all duration-700 ease-in-out overflow-hidden flex flex-col justify-center items-start flex-shrink-0 ${
                                    isActive 
                                        ? 'w-full lg:w-[320px] px-6 h-auto lg:h-full py-8 lg:py-0' 
                                        : 'w-full lg:w-0 px-0 h-0 lg:h-full py-0'
                                }`}>
                                    <div className={`w-full transition-opacity duration-500 delay-300 ${
                                        isActive ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                        {/* Icon */}
                                        <div className="mb-4">
                                            {loc.icon}
                                        </div>
                                        <div className="w-12 h-[1px] bg-gold mb-4"></div>
                                        
                                        <span className="text-gold text-[11px] font-bold tracking-[0.2em] mb-2 block uppercase">
                                            {loc.tag}
                                        </span>
                                        <h4 className="text-2xl font-heading text-luxury-black mb-4">
                                            Nearby {loc.title}
                                        </h4>
                                        
                                        <div className="space-y-3 mb-2">
                                            {loc.places.map((place, pIdx) => (
                                                <div key={pIdx} className="flex flex-row items-center justify-between gap-4 group/item border-b border-gray-100 pb-2 last:border-0">
                                                    <span className="text-[15px] text-luxury-text font-sans group-hover/item:text-luxury-black transition-colors duration-300">
                                                        {place.name}
                                                    </span>
                                                    <span className="text-[13px] font-bold text-gold font-sans whitespace-nowrap">
                                                        {place.dist}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Action Row */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-up">
                    <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap w-full md:w-auto">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>View Walkthrough</span>
                    </button>
                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default LocationHighlights;
