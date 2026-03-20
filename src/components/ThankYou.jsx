import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import thankYouBg from '../assets/img/platinum/Cam_04.jpg';

const ThankYou = () => {
    useEffect(() => {
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

    const handleDownload = async (e) => {
        e.preventDefault();
        const pdfUrl = "https://www.radiancerealty.in/images/pdf/radiance_riverwoods_brochure.pdf";
        const fileName = "radiance_riverwoods_brochure.pdf";

        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed, falling back to standard link:", error);
            window.open(pdfUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main
                className="relative flex items-center justify-center min-h-[90vh] pt-20 bg-cover bg-center"
                style={{ backgroundImage: `url("${thankYouBg}")` }}
            >
                {/* Standard Light Overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>

                <div className="lux-container relative z-10 text-center max-w-4xl mx-auto px-4">
                    {/* Icon/Success Message */}
                    <div className="mb-8 animate-fade-up">
                        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading text-luxury-black mb-6 leading-tight">
                            Thank <span className="text-gold italic">You!</span>
                        </h1>
                        <p className="text-xl text-luxury-black max-w-2xl mx-auto leading-relaxed font-medium">
                            Your inquiry has been successfully received. Our property advisor will get in touch with you shortly to assist with your journey to a luxury home.
                        </p>
                    </div>

                    {/* Action Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up animate-delay-1 mt-12">
                        {/* Route Map Video */}
                        <a 
                            href="https://www.youtube.com/watch?v=AKVrvOVASz0" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group bg-[#f8f5f0] p-8 rounded-sm border border-gray-100 transition-all duration-500 hover:bg-[#B57C3C] hover:-translate-y-2 cursor-pointer shadow-sm flex flex-col items-center no-underline"
                        >
                            <div className="text-gold group-hover:text-white transition-colors duration-500 mb-6 flex justify-center">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h4 className="text-[17px] font-heading font-normal text-luxury-black group-hover:text-white transition-colors duration-500 tracking-wide mb-2 uppercase">
                                Route Map
                            </h4>
                            <p className="text-xs text-luxury-text group-hover:!text-white transition-colors duration-500 mb-6">
                                Visualize the connected location.
                            </p>
                            <span className="mt-auto text-[10px] uppercase tracking-widest font-bold text-gold group-hover:text-white border-b border-gold group-hover:border-white pb-1 transition-all duration-300">
                                Watch Video
                            </span>
                        </a>

                        {/* Walkthrough */}
                        <a 
                            href="https://www.youtube.com/watch?v=Fut9aw5cJ0M&t=124s" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group bg-[#f8f5f0] p-8 rounded-sm border border-gray-100 transition-all duration-500 hover:bg-[#B57C3C] hover:-translate-y-2 cursor-pointer shadow-sm flex flex-col items-center no-underline"
                        >
                            <div className="text-gold group-hover:text-white transition-colors duration-500 mb-6 flex justify-center">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-[17px] font-heading font-normal text-luxury-black group-hover:text-white transition-colors duration-500 tracking-wide mb-2 uppercase">
                                Walkthrough
                            </h4>
                            <p className="text-xs text-luxury-text group-hover:!text-white transition-colors duration-500 mb-6">
                                Experience the real living spaces.
                            </p>
                            <span className="mt-auto text-[10px] uppercase tracking-widest font-bold text-gold group-hover:text-white border-b border-gold group-hover:border-white pb-1 transition-all duration-300">
                                Watch Now
                            </span>
                        </a>

                        {/* Download Brochure */}
                        <button 
                            onClick={handleDownload}
                            className="group bg-[#f8f5f0] p-8 rounded-sm border border-gray-100 transition-all duration-500 hover:bg-[#B57C3C] hover:-translate-y-2 cursor-pointer shadow-sm flex flex-col items-center no-underline w-full"
                        >
                            <div className="text-gold group-hover:text-white transition-colors duration-500 mb-6 flex justify-center">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                            <h4 className="text-[17px] font-heading font-normal text-luxury-black group-hover:text-white transition-colors duration-500 tracking-wide mb-2 uppercase">
                                Download Brochure
                            </h4>
                            <p className="text-xs text-luxury-text group-hover:!text-white transition-colors duration-500 mb-6">
                                Get all the details instantly.
                            </p>
                            <span className="mt-auto text-[10px] uppercase tracking-widest font-bold text-gold group-hover:text-white border-b border-gold group-hover:border-white pb-1 transition-all duration-300">
                                Download PDF
                            </span>
                        </button>
                    </div>

                    {/* Back Link */}
                    <div className="mt-12 animate-fade-up animate-delay-2">
                        <Link to="/" className="text-gold hover:text-luxury-black transition-colors font-medium flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYou;
