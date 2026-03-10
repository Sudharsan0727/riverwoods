import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Rooms from './components/Rooms';
import ProjectHighlights from './components/ProjectHighlights';
import AmenitiesIconGrid from './components/AmenitiesIconGrid';
import LocationHighlights from './components/LocationHighlights';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import EnquirySection from './components/EnquirySection';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ProjectHighlights />
        <PricingTable />
        <Rooms />
        <AmenitiesIconGrid />
        <LocationHighlights />
        <Gallery />
        <Testimonials />
        <EnquirySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
