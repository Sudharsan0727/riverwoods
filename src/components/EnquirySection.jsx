import React, { useState } from 'react';
import PhoneInputField from './PhoneInputField';
import enquiry1 from '../assets/img/Enquiry1.jpg';
import enquiry2 from '../assets/img/Enquiry2.jpg';

const EnquirySection = () => {
    const [phone, setPhone] = useState('');

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="lux-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Left Images Column (Like About Us Section) */}
                    <div className="flex gap-4 md:gap-8 animate-fade-up h-[350px] md:h-[450px] lg:h-[500px] items-center order-2 lg:order-1">
                        {/* First Image - Floating Up/Down */}
                        <div className="flex-1 h-[90%] md:h-[80%] overflow-hidden rounded-2xl shadow-lg mt-12 bg-luxury-gray animate-float">
                            <img 
                                src={enquiry1} 
                                alt="Luxury Interior" 
                                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                        
                        {/* Second Image - Floating Up/Down Staggered */}
                        <div className="flex-1 h-[90%] md:h-[80%] overflow-hidden rounded-2xl shadow-lg mb-12 bg-luxury-gray animate-float-delayed">
                            <img 
                                src={enquiry2} 
                                alt="Building Exterior" 
                                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="animate-fade-up animate-delay-2 order-1 lg:order-2">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            GET IN TOUCH
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading mb-10 leading-[1.1] text-luxury-black">
                            Start Your <br /> <span className="text-gold italic">New Journey</span>
                        </h2>

                        <div className="bg-[#f8f5f0] p-8 md:p-10 rounded-sm shadow-sm border border-luxury-gray/30">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/60 mb-2 block font-bold">Full Name *</label>
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="Your Name" 
                                            className="w-full bg-white border border-luxury-gray px-4 py-3 text-luxury-black placeholder:text-luxury-text/40 text-sm focus:outline-none focus:border-gold transition-colors" 
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/60 mb-2 block font-bold">Phone Number *</label>
                                        <PhoneInputField theme="light" value={phone} onChange={setPhone} />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/60 mb-2 block font-bold">Email Address *</label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="email@example.com" 
                                        className="w-full bg-white border border-luxury-gray px-4 py-3 text-luxury-black placeholder:text-luxury-text/40 text-sm focus:outline-none focus:border-gold transition-colors" 
                                    />
                                </div>

                                <button type="submit" className="w-full relative px-8 py-4 bg-gold text-white font-medium uppercase tracking-[0.2em] text-xs cursor-pointer flex items-center justify-center gap-3 whitespace-nowrap hover:bg-[#6d6d6d] transition-all duration-500">
                                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Book a Site Visit</span>
                                </button>
                                
                                <p className="text-[10px] text-luxury-text text-center mt-4 italic">
                                    Our relationship manager will get back to you within 24 hours.
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EnquirySection;
