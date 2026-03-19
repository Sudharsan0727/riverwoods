import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';
import about1 from '../assets/img/about1.jpg';
import about2 from '../assets/img/about2.jpg';

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate position relative to viewport (0 = enters bottom, 1 = leaves top)
                const distance = windowHeight - rect.top;
                const totalDistance = windowHeight + rect.height;
                const progress = Math.max(0, Math.min(1, distance / totalDistance));
                
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // "Inner Move" Parallax (Image moves inside the fixed container)
    // We scale the image up (e.g. 1.3) so it has "room" to move inside its overflow-hidden box
    const innerMoveX_Back = -30 + scrollProgress * 60;   // Moves inside the container
    const innerMoveY_Back = -20 + scrollProgress * 40;
    
    const innerMoveX_Front = 40 - scrollProgress * 80;   // Moves opposite inside the container
    const innerMoveY_Front = 30 - scrollProgress * 60;

    const zoomImg = 1.1 + scrollProgress * 0.15; // Base scale for the "window" effect

    return (
        <section id="about" ref={sectionRef} className="section-padding py-24 bg-white overflow-hidden">
            <div className="lux-container max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    
                    {/* Left Column: Overlapping Images (Uniform Size Model) */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:block">
                        <div className="relative w-full max-w-[550px] h-[700px] md:h-[750px]">
                            {/* Decorative Gold Frame (Aligned to Uniform Size) */}
                            <div className="absolute top-[30px] right-[40px] w-[325px] h-[580px] border-[2px] border-gold/40 z-0"></div>
                            
                            {/* Back Image (Top-Left Window) - Uniform size */}
                            <div className="absolute top-[20px] left-[20px] w-[325px] h-[580px] overflow-hidden shadow-2xl z-10 animate-fade-up">
                                <img 
                                    src={about2} 
                                    alt="Solitaire Building Exterior" 
                                    className="w-full h-full object-cover grayscale-[0.1] transition-transform duration-500 ease-out will-change-transform"
                                    style={{ 
                                        transform: `scale(${zoomImg + 0.2}) translate(${innerMoveX_Back}px, ${innerMoveY_Back}px)` 
                                    }}
                                />
                            </div>
                            
                            {/* Front Image (Bottom-Right Window) - Uniform size */}
                            <div className="absolute top-[100px] left-[160px] w-[325px] h-[580px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-20 border-[12px] border-white bg-white animate-fade-up animate-delay-1">
                                <img 
                                    src={about1} 
                                    alt="Luxury Interior" 
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out font-bold will-change-transform"
                                    style={{ 
                                        transform: `scale(${zoomImg + 0.25}) translate(${innerMoveX_Front}px, ${innerMoveY_Front}px)` 
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Structured Text content (Reduced Sizing) */}
                    <div className="order-1 lg:order-2 animate-fade-up">
                        <span className="font-condensed text-gold uppercase tracking-[0.3em] text-[13px] mb-3 block">
                            ABOUT RADIANCE SOLITAIRE
                        </span>
                        
                        <h2 className="text-[32px] md:text-[40px] font-heading mb-5 leading-[1.2] text-luxury-black">
                            Timeless Elegance, <br /> <span className="text-gold italic">Refined Living</span>
                        </h2>
                        
                        <div className="mb-6">
                            <p className="text-[19px] md:text-[21px] font-heading text-gold leading-[1.4] mb-4">
                                Step into a world where sophistication meets thoughtful design—where every detail is crafted to perfection.
                            </p>
                            <p className="font-body text-[15px] text-luxury-text leading-[1.7] mb-6">
                                Inspired by the brilliance of a solitaire, these homes offer a seamless blend of modern architecture and functional luxury. From striking exteriors to warm, well-planned interiors, every space reflects superior quality, intelligent design, and an abundance of natural light. More than just a home, it’s a statement of style, comfort, and enduring value for generations to cherish.
                            </p>
                        </div>

                        {/* Feature List (Compact) */}
                        <div className="space-y-3 mb-8">
                            {[
                                { label: "Type", value: "2, 2.5, 3 & 4 BHK Apartments & Penthouses" },
                                { label: "Blocks", value: "A & B (G+17), C (G+14), D (Clubhouse)" },
                                { label: "Development", value: "5.37 Acres | 660 Units" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-body text-[15px] text-luxury-black font-medium tracking-wide">
                                        <span className="text-luxury-text font-normal opacity-80">{item.label}:</span> {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex">
                            <button 
                                onClick={() => setIsModalOpen(true)} 
                                className="bg-gold text-white font-body px-10 py-3.5 text-[13px] uppercase tracking-[0.2em] hover:bg-luxury-black transition-all duration-500 shadow-2xl hover:-translate-y-1 active:translate-y-0"
                            >
                                Contact Us
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

export default AboutUs;
