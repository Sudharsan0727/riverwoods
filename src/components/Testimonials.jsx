import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Deepak Naidu",
        role: "Resident",
        quote: "The project location and floor plan is too good, Construction quality with luxury specifications also is pretty good, I wanted to express my gratitude for the outstanding service.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya John",
        role: "Resident",
        quote: "Recently booked a flat. Entire process was very smooth and transparent . Thanks Radiance team for the support. Really appreciate",
        rating: 5,
    },
    {
        id: 3,
        name: "Deepti Goyal",
        role: "Resident",
        quote: "Great Staff very friendly and cooperative so far one of the best experience.",
        rating: 5,
    }
];

const StarIcon = () => (
    <svg className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goTo = (index) => {
        if (animating) return;
        setAnimating(true);
        setCurrent(index);
        setTimeout(() => setAnimating(false), 600);
    };

    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
    const next = () => goTo((current + 1) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(c => (c + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const active = testimonials[current];

    return (
        <section className="section-padding bg-[#fff1f2] overflow-hidden">
            <div className="lux-container">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                        Client Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-luxury-black w-full mx-auto mb-6 whitespace-nowrap">
                        What Our <span className="text-gold italic">Residents Say</span>
                    </h2>
                    
                    {/* Google Review Badge - Global Section */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 w-max mx-auto mt-2">
                        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            <path fill="none" d="M0 0h48v48H0z"/>
                        </svg>
                        <div className="flex items-baseline gap-1.5 ml-1">
                            <span className="text-base md:text-xl text-black font-medium tracking-tight whitespace-nowrap">Google Reviews</span>
                            <span className="text-2xl md:text-3xl font-normal text-black leading-none tracking-tight">4.9</span>
                        </div>
                        <div className="flex gap-[2px] md:gap-1 ml-2 md:ml-4 bg-[#EEF2FF] px-2 py-1.5 md:px-3 md:py-2 rounded-md items-center">
                            {/* 4 Full Stars */}
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#fbc02d] fill-[#fbc02d]" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            {/* 1 Partial/Half Star (4.9) */}
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#fbc02d]" viewBox="0 0 20 20">
                                <defs>
                                    <linearGradient id="partialStar" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="90%" stopColor="#fbc02d" />
                                        <stop offset="90%" stopColor="#e5e7eb" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#partialStar)" stroke="currentColor" strokeWidth="1" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-xl mx-auto animate-fade-up animate-delay-1">
                    <div
                        key={active.id}
                        className="relative bg-white rounded-[4px] shadow-xl p-8 md:p-10 transition-all duration-500 flex flex-col items-center text-center"
                    >
                        {/* Author - Now at top */}
                        <div className="mb-6">
                            <h4 className="font-heading text-2xl text-luxury-black mb-1">{active.name}</h4>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {Array.from({ length: active.rating }).map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="text-lg text-luxury-text italic leading-relaxed relative z-10 whitespace-pre-line">
                            "{active.quote}"
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-10">
                        {/* Dots */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    className={`transition-all duration-300 rounded-full ${
                                        idx === current
                                            ? 'w-8 h-2 bg-gold'
                                            : 'w-2 h-2 bg-luxury-text/20 hover:bg-gold/50'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={prev}
                                className="w-12 h-12 flex items-center justify-center border border-luxury-text/20 hover:border-gold hover:bg-gold group transition-all duration-300 rounded-[2px]"
                            >
                                <svg className="w-4 h-4 text-luxury-text group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 flex items-center justify-center border border-luxury-text/20 hover:border-gold hover:bg-gold group transition-all duration-300 rounded-[2px]"
                            >
                                <svg className="w-4 h-4 text-luxury-text group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Testimonials;
