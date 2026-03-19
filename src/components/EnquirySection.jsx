import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import enquiry1 from '../assets/img/Enquiry1.jpg';
import enquiry2 from '../assets/img/Enquiry2.jpg';
import { submitLead } from '../utils/submitLead';

import SuccessModal from './SuccessModal';

const EnquirySection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate position relative to viewport
                const distance = windowHeight - rect.top;
                const totalDistance = windowHeight + rect.height;
                const progress = Math.max(0, Math.min(1, distance / totalDistance));
                
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Design-matched Parallax Logic
    const innerMoveX_Back = -30 + scrollProgress * 60;
    const innerMoveY_Back = -20 + scrollProgress * 40;
    const innerMoveX_Front = 40 - scrollProgress * 80;
    const innerMoveY_Front = 30 - scrollProgress * 60;
    const zoomImg = 1.1 + scrollProgress * 0.15;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        submitLead({
            ...formData,
            mobile: phone
        });

        setIsSubmitting(false);
        setShowSuccess(true);
        setTimeout(() => {
            navigate('/thank-you');
        }, 1200);
    };

    return (
        <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
            <div className="lux-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Left Images Column (Matched About Us Style & Parallax) */}
                    <div className="relative hidden lg:block order-2 lg:order-1 w-full flex-1">
                        <div className="relative w-full max-w-[420px] h-[480px] mx-auto lg:max-w-[450px] lg:h-[520px]">
                            {/* Decorative Gold Frame */}
                            <div className="absolute top-[10%] right-[5%] w-[50%] h-[45%] lg:top-[12%] lg:right-[15px] lg:w-[250px] lg:h-[320px] border-[3px] border-gold lg:border-[4px] z-0 opacity-80"></div>
                            
                            {/* Back Image (Top-Left) */}
                            <div className="absolute top-0 left-0 w-[70%] h-[70%] lg:w-[320px] lg:h-[420px] overflow-hidden shadow-xl z-10 animate-fade-up">
                                <img 
                                    src={enquiry2} 
                                    alt="Building Exterior" 
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform"
                                    style={{ 
                                        transform: `scale(${zoomImg + 0.1}) translate(${innerMoveX_Back}px, ${innerMoveY_Back}px)` 
                                    }}
                                />
                            </div>
                            
                            {/* Front Image (Bottom-Right) */}
                            <div className="absolute bottom-0 right-[5%] w-[70%] h-[70%] lg:-bottom-[20px] lg:-right-[20px] lg:w-[320px] lg:h-[420px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 animate-fade-up animate-delay-1">
                                <img 
                                    src={enquiry1} 
                                    alt="Luxury Interior" 
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform"
                                    style={{ 
                                        transform: `scale(${zoomImg + 0.15}) translate(${innerMoveX_Front}px, ${innerMoveY_Front}px)` 
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="animate-fade-up animate-delay-2 order-1 lg:order-2">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            GET IN TOUCH
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading mb-10 leading-[1.1] text-luxury-black">
                            Start Your <br /> <span className="text-gold italic">Property Journey</span>
                        </h2>

                        <div className="bg-[#fff1f2] p-8 md:p-10 rounded-sm shadow-sm border border-luxury-gray/30">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/60 mb-2 block font-bold">Full Name *</label>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required 
                                            placeholder="Your Name" 
                                            className="w-full bg-white border border-luxury-gray px-4 py-3 text-luxury-black placeholder:text-gray-400 text-sm focus:outline-none focus:border-gold transition-colors" 
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/60 mb-2 block font-bold">Phone Number</label>
                                        <PhoneInputField theme="light" value={phone} onChange={setPhone} required={false} placeholder="Phone Number" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/60 mb-2 block font-bold">Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required 
                                        placeholder="email@example.com" 
                                        className="w-full bg-white border border-luxury-gray px-4 py-3 text-luxury-black placeholder:text-gray-400 text-sm focus:outline-none focus:border-gold transition-colors" 
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full relative px-8 py-4 bg-gold text-white font-medium uppercase tracking-[0.2em] text-xs cursor-pointer flex items-center justify-center gap-3 whitespace-nowrap hover:bg-luxury-black transition-all duration-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{isSubmitting ? 'Submitting...' : 'Book a Site Visit'}</span>
                                </button>
                                
                                <p className="text-[10px] text-luxury-text text-center mt-4 italic">
                                    Your information is secure. We will only contact you regarding your inquiry.
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <SuccessModal 
                isOpen={showSuccess} 
                onClose={() => setShowSuccess(false)} 
                message="Lead submitted successfully" 
            />
        </section>
    );
};

export default EnquirySection;
