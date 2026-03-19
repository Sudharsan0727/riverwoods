import React, { useState, useEffect, useCallback, useRef } from 'react';

import img1 from '../assets/img/platinum/1 (1).jpg';
import img2 from '../assets/img/platinum/1 (2).jpg';
import img3 from '../assets/img/platinum/1 (3).jpg';
import img4 from '../assets/img/platinum/1 (4).jpg';
import img5 from '../assets/img/platinum/1 (5).jpg';
import img6 from '../assets/img/platinum/1 (6).jpg';
import img7 from '../assets/img/platinum/1 (7).jpg';
import img8 from '../assets/img/platinum/1 (8).jpg';
import img9 from '../assets/img/platinum/1 (9).jpg';
import img10 from '../assets/img/platinum/2 (1).jpg';
import img11 from '../assets/img/platinum/2 (2).jpg';
import img12 from '../assets/img/platinum/2 (3).jpg';
import img13 from '../assets/img/platinum/2 (4).jpg';
import img14 from '../assets/img/platinum/2 (5).jpg';
import img15 from '../assets/img/platinum/2 (6).jpg';
import img16 from '../assets/img/platinum/2 (7).jpg';
import img17 from '../assets/img/platinum/2 (8).jpg';
import img18 from '../assets/img/platinum/2 (9).jpg';
import img19 from '../assets/img/platinum/Cam_21.jpg';

const slides = [
    // 1. BUILDING ELEVATION (ARCHITECTURE)
    { id: 1, img: img1, title: "Building Exterior", tag: "ARCHITECTURE" },
    { id: 2, img: img2, title: "Modern Design", tag: "ARCHITECTURE" },
    { id: 19, img: img19, title: "Project View", tag: "ARCHITECTURE" },
    { id: 4, img: img4, title: "Grand Entrance", tag: "ARCHITECTURE" },

    // 2. PROJECT INTERIORS
    { id: 5, img: img5, title: "Luxury Living", tag: "INTERIORS" },
    { id: 6, img: img6, title: "Modern Interior", tag: "INTERIORS" },
    { id: 7, img: img7, title: "Spacious Rooms", tag: "INTERIORS" },
    { id: 8, img: img8, title: "Dining Space", tag: "INTERIORS" },
    { id: 9, img: img9, title: "Elegant Hall", tag: "INTERIORS" },
    { id: 10, img: img10, title: "Premium Suite", tag: "INTERIORS" },
    { id: 11, img: img11, title: "Cozy Bedroom", tag: "INTERIORS" },
    { id: 12, img: img12, title: "Master Suite", tag: "INTERIORS" },
    { id: 13, img: img13, title: "Kitchen area", tag: "INTERIORS" },
    { id: 15, img: img15, title: "Interior view", tag: "INTERIORS" },

    // 3. AMENITIES & LIFESTYLE
    { id: 16, img: img16, title: "Amenity view", tag: "AMENITIES" },
    { id: 17, img: img17, title: "Clubhouse", tag: "AMENITIES" },
    { id: 18, img: img18, title: "Entertainment", tag: "AMENITIES" },
    { id: 3, img: img3, title: "Landscaped Areas", tag: "LIFESTYLE" },
    { id: 14, img: img14, title: "Premium Living", tag: "LIFESTYLE" },
];

const Gallery = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const thumbRef = useRef(null);
    const isInitialMount = useRef(true);

    // Sync thumbnail scroll (Safer way that doesn't jump the whole page)
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        if (thumbRef.current) {
            const container = thumbRef.current;
            const activeThumb = container.children[current];
            
            if (activeThumb) {
                const scrollLeft = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [current]);

    const goTo = useCallback((index) => {
        if (animating) return;
        setAnimating(true);
        setCurrent(index);
        setTimeout(() => setAnimating(false), 700);
    }, [animating]);

    const prev = () => goTo((current - 1 + slides.length) % slides.length);
    const next = () => goTo((current + 1) % slides.length);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="gallery" className="section-padding bg-luxury-black overflow-hidden">
            <div className="lux-container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-6 animate-fade-up">
                    <div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-white max-w-2xl">
                            Project <span className="text-gold italic">Gallery</span>
                        </h2>
                    </div>
                    {/* Slide counter */}
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-heading text-white">
                            {String(current + 1).padStart(2, '0')}
                        </span>
                        <div className="w-16 h-[1px] bg-gold/40"></div>
                        <span className="text-lg font-heading text-white/30">
                            {String(slides.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Main Slider */}
                <div className="relative w-full h-[220px] md:h-[450px] overflow-hidden rounded-[4px] mb-6 animate-fade-up animate-delay-1">
                    {slides.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                idx === current
                                    ? 'opacity-100 scale-100 z-10'
                                    : 'opacity-0 scale-105 z-0'
                            }`}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>


                        </div>
                    ))}

                    {/* Prev / Next Arrow Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-gold backdrop-blur-sm border border-white/20 transition-all duration-300 rounded-[2px]"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-gold backdrop-blur-sm border border-white/20 transition-all duration-300 rounded-[2px]"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Thumbnail Strip */}
                <div 
                    ref={thumbRef}
                    className="flex gap-3 overflow-x-auto pb-4 hide-scroll animate-fade-up animate-delay-1"
                >
                    {slides.map((slide, idx) => (
                        <button
                            key={slide.id}
                            onClick={() => goTo(idx)}
                            className={`flex-shrink-0 relative w-24 h-16 md:w-32 md:h-20 overflow-hidden rounded-[2px] transition-all duration-300 ${
                                idx === current
                                    ? 'ring-2 ring-gold opacity-100'
                                    : 'opacity-40 hover:opacity-70'
                            }`}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`transition-all duration-300 rounded-full ${
                                idx === current
                                    ? 'w-8 h-2 bg-gold'
                                    : 'w-2 h-2 bg-white/20 hover:bg-white/50'
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
