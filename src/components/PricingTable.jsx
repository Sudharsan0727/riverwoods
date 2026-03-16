import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const PricingTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

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
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default PricingTable;
