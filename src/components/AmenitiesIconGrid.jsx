import React from 'react';

const AmenitiesIconGrid = () => {
    // 6 Premium amenities mirroring the structure
    const allAmenities = [
        {
            title: "Outdoor gym",
            description: "Stay fit with our state-of-the-art open-air fitness equipment.",
        },
        {
            title: "Mini-half basket ball hoop",
            description: "Perfect your game or enjoy a casual shootaround.",
        },
        {
            title: "Multi-purpose gathering zone",
            description: "A versatile space for community events and social interactions.",
        },
        {
            title: "Multi-purpose play court",
            description: "Designed for various sports activities and active living.",
        },
        {
            title: "Kids play area",
            description: "A safe and fun environment for children to explore and play.",
        },
        {
            title: "Sand pit",
            description: "A dedicated creative play space where young imaginations run free.",
        }
    ];

    return (
        <section id="features" className="section-padding bg-white relative">
            <div className="lux-container max-w-[1300px] relative z-10">
                
                {/* Asymmetric Split Layout */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
                    
                    {/* Left Column: Info & Button */}
                    <div className="w-full lg:w-[35%] animate-fade-up">

                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-luxury-black mb-6">
                            AMENITIES
                        </h2>
                        
                        <p className="text-xl text-luxury-text leading-relaxed mb-10 max-w-sm">
                            Discover a world of thoughtfully curated amenities designed to bring comfort, convenience, and luxury to your modern lifestyle.
                        </p>
                        
                        <button className="relative px-8 py-4 bg-gold text-white font-medium uppercase tracking-[0.2em] text-xs cursor-pointer flex items-center justify-center gap-3 whitespace-nowrap hover:bg-[#6d6d6d] transition-all duration-500">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>View Amenities</span>
                        </button>
                    </div>

                    {/* Right Column: Grid of Exactly 6 Cards */}
                    <div className="w-full lg:w-[65%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animate-delay-1">
                            {allAmenities.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-[#f8f5f0] rounded-[4px] min-h-[220px] p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#9b7a44] hover:-translate-y-2 cursor-pointer shadow-sm relative overflow-hidden"
                                >
                                    <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                                        {/* Standard Capitalized Title */}
                                        <h4 className="text-[17px] font-heading font-normal text-[#222222] group-hover:text-white transition-colors duration-500 tracking-wide px-4">
                                            {item.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-0 right-0 px-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <p className="!text-white text-[13px] font-sans leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AmenitiesIconGrid;
