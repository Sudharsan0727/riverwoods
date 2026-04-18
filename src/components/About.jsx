import React from 'react';
const exteriorImg = "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop";

const About = () => {
  return (
    <section id="about" className="section-padding bg-luxury-gray">
      <div className="lux-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <span className="section-title-sub">Who We Are</span>
            <h2 className="section-title-main">
              Quality Construction <br /> <span className="text-gold italic">Expertise</span>
            </h2>
            <p className="mb-8">
              We are a premier construction firm specializing in residential and commercial 
              developments. With decades of experience, we bring architectural visions 
              to life with precision, integrity, and unmatched craftsmanship.
            </p>
            <p className="mb-10 text-sm italic">
              "Building the future with safety, quality, and a commitment to excellence in every structure we create."
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-3xl font-heading text-gold mb-2">15+</h4>
                <span className="text-xs uppercase tracking-widest font-bold">Years of Excellence</span>
              </div>
              <div>
                <h4 className="text-3xl font-heading text-gold mb-2">200+</h4>
                <span className="text-xs uppercase tracking-widest font-bold">Projects Completed</span>
              </div>
            </div>
            
            <button className="btn-gold">Read More</button>
          </div>

          {/* Image Side */}
          <div className="relative group animate-fade-up animate-delay-1">
            <div className="absolute -inset-4 border border-gold/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="relative overflow-hidden">
              <img 
                src={exteriorImg} 
                alt="Hotel Exterior" 
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
