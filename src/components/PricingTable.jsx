import React, { useState } from 'react';
import PhoneInputField from './PhoneInputField';

const PricingTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState('');

    const pricingData = [
        {
            unitType: "2BHK + 2T",
            area: "1356 Sq.ft. to 1400 Sq.ft.",
        },
        {
            unitType: "3BHK + 2T",
            area: "1714 Sq.ft. to 1720 Sq.ft.",
        },
        {
            unitType: "3BHK + 3T",
            area: "1919 Sq.ft. to 2171 Sq.ft.",
        },
        {
            unitType: "4BHK + 4T",
            area: "2618 Sq.ft. to 2711 Sq.ft.",
        }
    ];

    return (
        <section id="pricing" className="section-padding bg-white relative">
            <div className="lux-container">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-up">

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading mb-10 leading-[1.1] text-luxury-black">
                        Pricing <span className="text-gold italic">Table</span>
                    </h2>
                </div>

                {/* Desktop-Style Table on all screens */}
                <div className="max-w-[70rem] mx-auto animate-fade-up animate-delay-1 overflow-x-auto hide-scroll">
                    <div className="min-w-[320px] md:min-w-[800px] border border-gray-200">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-[#9b7a44] text-white">
                            <div className="py-3 md:py-4 text-center font-normal text-[10px] md:text-lg border-r border-white/20 tracking-widest uppercase">
                                Unit Type
                            </div>
                            <div className="py-3 md:py-4 text-center font-normal text-[10px] md:text-lg border-r border-white/20 tracking-widest uppercase">
                                Built up area
                            </div>
                            <div className="py-3 md:py-4 text-center font-normal text-[10px] md:text-lg tracking-widest uppercase">
                                Price
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="bg-white">
                            {pricingData.map((row, index) => (
                                <div 
                                    key={index} 
                                    className="grid grid-cols-3 items-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="py-4 md:py-5 px-1 md:px-0 text-center text-[11px] md:text-lg font-medium text-gray-700 border-r border-gray-200">
                                        {row.unitType}
                                    </div>
                                    <div className="py-4 md:py-5 px-1 md:px-0 text-center text-[10px] md:text-lg text-gray-600 border-r border-gray-200">
                                        {row.area}
                                    </div>
                                    <div className="py-4 md:py-5 px-1 md:px-2 flex justify-center">
                                        <button 
                                            onClick={() => setIsModalOpen(true)}
                                            className="btn-gold !py-2 !px-2 md:!py-3 md:!px-6 !text-[9px] md:!text-xs !shadow-none hover:!translate-y-0 transition-all duration-300 flex items-center gap-1 md:gap-2"
                                        >
                                            <svg className="hidden md:block w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                            </svg>
                                            View pricing
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Form Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-modal-overlay">
                    <div className="bg-white max-w-md w-full mx-4 rounded-xl shadow-2xl relative animate-modal-content">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-luxury-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-heading text-luxury-black mb-2">Request Details</h3>
                                <p className="text-luxury-text text-sm">Please fill out this form to instantly receive the pricing details and brochure.</p>
                            </div>
                            
                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                // Handle form submit action here
                                alert("Thank you! Our team will contact you shortly.");
                                setIsModalOpen(false);
                            }}>
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder="Full Name *" 
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded outline-none focus:border-gold transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <PhoneInputField theme="modal" value={phone} onChange={setPhone} />
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        placeholder="Email Address *" 
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded outline-none focus:border-gold transition-colors text-sm"
                                    />
                                </div>
                                
                                <button type="submit" className="w-full mt-4 bg-[#6d6d6d] text-white hover:bg-gold transition-colors duration-300 py-3 rounded font-bold uppercase tracking-widest text-xs">
                                    Submit
                                </button>
                                
                                <p className="text-center text-[10px] text-gray-400 mt-4">
                                    Your information is secure. We will only contact you regarding your inquiry.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PricingTable;
