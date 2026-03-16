import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import { submitLead } from '../utils/submitLead';
import SuccessModal from './SuccessModal';

const EnquiryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    if (!isOpen && !showSuccess) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Background submission (no-wait for snappy UI)
        submitLead({
            ...formData,
            mobile: phone
        });

        // Instant feedback
        setIsSubmitting(false);
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            onClose();
            navigate('/thank-you');
        }, 1200);
    };



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-modal-overlay">
                    <div className="bg-white max-w-md w-full mx-4 rounded-xl shadow-2xl relative animate-modal-content">
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-luxury-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-heading text-luxury-black mb-2 italic">Request Details</h3>
                            </div>
                            
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block font-bold">Full Name *</label>
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
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block font-bold">Phone Number *</label>
                                    <PhoneInputField theme="light" value={phone} onChange={setPhone} required />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block font-bold">Email Address *</label>
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
                                    className={`w-full btn-gold !py-3 shadow-xl mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                                
                                <p className="text-center text-[10px] text-gray-400 mt-4 leading-tight">
                                    Your information is secure. We will only contact you regarding your inquiry.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <SuccessModal 
                isOpen={showSuccess} 
                onClose={() => setShowSuccess(false)} 
                message="Lead submitted successfully" 
            />
        </>
    );
};

export default EnquiryModal;


