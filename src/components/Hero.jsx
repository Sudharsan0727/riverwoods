import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import heroBg from '../assets/img/RADIANCE_banner.jpeg';
import heroMobileBg from '../assets/img/Mobile-banner.jpeg';
import { submitLead } from '../utils/submitLead';

import SuccessModal from './SuccessModal';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Start submission in the background (no-wait for snappy UI)
        submitLead({
            ...formData,
            mobile: phone
        });

        // Show success and move forward immediately for a snappy feel
        setIsSubmitting(false);
        setShowSuccess(true);
        setTimeout(() => {
            navigate('/thank-you');
        }, 1500);
    };




  return (
    <section id="home" className="relative flex flex-col lg:block h-auto lg:h-[85vh] 2xl:h-[90vh] pt-[72px] lg:pt-0 overflow-hidden bg-[#f8f5f0] lg:bg-white">
      {/* Background Image - Desktop */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:h-full z-0">
        <img 
          src={heroBg} 
          alt="Radiance Solitaire" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Banner Image - Mobile (Full Width View) */}
      <div className="lg:hidden w-full relative z-0 mt-0 overflow-hidden shadow-sm">
        <img 
          src={heroMobileBg} 
          alt="Radiance Solitaire Banner" 
          className="w-full h-auto block"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 lux-container w-full py-6 lg:py-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:right-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Form Side: Below image on mobile */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="bg-white p-6 md:p-8 rounded-sm relative z-10 shadow-xl lg:shadow-2xl border border-gray-100 lg:border-none mx-auto max-w-lg lg:max-w-none">
              <h3 className="text-2xl font-heading text-luxury-black mb-6 text-center italic">Enquiry Now</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required 
                    placeholder="Your Name" 
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-2 text-luxury-black placeholder:text-gray-400 text-sm focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block">Phone Number</label>
                  <PhoneInputField theme="light" value={phone} onChange={setPhone} required={false} placeholder="Phone Number" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="email@example.com" 
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-2 text-luxury-black placeholder:text-gray-400 text-sm focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full btn-gold !py-3 shadow-xl mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <p className="text-[10px] text-gray-500 opacity-100 font-medium text-center mt-3 leading-tight">
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


export default Hero;

