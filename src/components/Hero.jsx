import React, { useState } from 'react';
import PhoneInputField from './PhoneInputField';
const heroBg = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";

const Hero = () => {
  const [phone, setPhone] = useState('');

  return (
    <section id="home" className="relative min-h-[75vh] pt-32 md:pt-40 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110 animate-[zoom_20s_infinite_alternate] z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 lux-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Title and Buttons */}
          <div className="hidden lg:col-span-7 text-left text-white">
            <span className="section-title-sub text-white/80 mb-6 animate-fade-up block">Premium Construction & Design</span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading mb-10 leading-[1.1] animate-fade-up animate-delay-1">
              Building Your <br /> <span className="text-gold italic">Vision</span>
            </h1>
            <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-up animate-delay-3">
              <button className="btn-gold">View Projects</button>
              <button className="px-8 py-4 bg-white text-luxury-black font-medium hover:bg-gold hover:text-white transition-all duration-500 uppercase tracking-widest text-xs">
                Our Services
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 mt-4 lg:mt-8">
            <div className="bg-white/10 backdrop-blur-[40px] border border-white/20 p-6 md:p-8 rounded-sm relative z-10 shadow-2xl">
              <h3 className="text-2xl font-heading text-white mb-6 text-center italic">Enquiry Now</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 block">Full Name *</label>
                  <input type="text" required placeholder="Your Name" className="w-full bg-white/5 border border-white/20 px-4 py-2 text-white placeholder:text-white/80 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 block">Phone Number *</label>
                  <PhoneInputField theme="dark" value={phone} onChange={setPhone} />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 block">Email Address *</label>
                  <input type="email" required placeholder="email@example.com" className="w-full bg-white/5 border border-white/20 px-4 py-2 text-white placeholder:text-white/80 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <button type="submit" className="w-full btn-gold !py-3 shadow-xl mt-2">Submit</button>
                <p className="text-[10px] !text-white opacity-100 font-medium text-center mt-3 leading-tight">
                  Your information is secure. We will only contact you regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
    </section>
  );
};

export default Hero;
