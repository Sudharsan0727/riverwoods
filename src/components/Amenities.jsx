import React from 'react';

const AmenityItem = ({ title, icon, description, delay }) => (
  <div className={`p-10 border border-luxury-gray hover:border-gold/30 transition-colors duration-500 animate-fade-up ${delay}`}>
    <div className="text-gold mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-heading mb-4">{title}</h3>
    <p className="text-sm leading-relaxed">{description}</p>
  </div>
);

const Amenities = () => {
  const services = [
    {
      title: "General Contracting",
      description: "Comprehensive management and execution of construction projects from start to finish.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      delay: "animate-delay-1"
    },
    {
      title: "Project Planning",
      description: "Meticulous architectural planning and engineering consultation for your specific needs.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      delay: "animate-delay-2"
    },
    {
      title: "Interior Design",
      description: "Exquisite interior finishes and spatial design to complement world-class architecture.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      delay: "animate-delay-3"
    },
  ];

  return (
    <section id="services" className="section-padding bg-luxury-gray">
      <div className="lux-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="section-title-sub">What We Offer</span>
          <h2 className="section-title-main">Our <span className="text-gold italic">Services</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <AmenityItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
