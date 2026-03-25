import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const PricingTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const pricingData = [
        {
            unitType: "1BHK + 1T",
            area: "696 - 711 Sq.ft.",
        },
        {
            unitType: "2BHK + 2T",
            area: "1062 - 1160 Sq.ft",
        },
        {
            unitType: "3BHK + 2T",
            area: "1388 - 1411 Sq.ft.",
        },
        {
            unitType: "3BHK + 3T",
            area: "1525 - 1560 Sq.ft.",
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
                        <div className="grid grid-cols-3 bg-[#002A22] text-white">
                            <div className="py-4 md:py-5 text-center font-normal text-[16px] md:text-lg border-r border-white/20 tracking-widest uppercase">
                                Unit Type
                            </div>
                            <div className="py-4 md:py-5 text-center font-normal text-[16px] md:text-lg border-r border-white/20 tracking-widest uppercase">
                                Built up area
                            </div>
                            <div className="py-4 md:py-5 text-center font-normal text-[16px] md:text-lg tracking-widest uppercase">
                                Unit Plan
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="bg-white">
                            {pricingData.map((row, index) => (
                                <div 
                                    key={index} 
                                    className="grid grid-cols-3 items-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="py-5 md:py-6 px-1 md:px-0 text-center text-[17px] md:text-lg font-medium text-gray-700 border-r border-gray-200">
                                        {row.unitType}
                                    </div>
                                    <div className="py-5 md:py-6 px-1 md:px-0 text-center text-[16px] md:text-lg text-gray-600 border-r border-gray-200">
                                        {row.area}
                                    </div>
                                    <div className="py-4 md:py-5 px-1 md:px-2 flex justify-center">
                                        <button 
                                            onClick={() => setIsModalOpen(true)}
                                            className="btn-gold !py-2 md:!py-3 !px-2 md:!px-6 !text-[12px] md:!text-xs !shadow-none hover:!translate-y-0 transition-all duration-300 flex items-center justify-center text-center gap-1.5 md:gap-2.5"
                                        >
                                            <svg className="hidden md:block w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M3 20h18" />
                                            </svg>
                                            <span className="leading-tight">
                                                Download <br className="md:hidden" /> Unit Plan
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default PricingTable;
