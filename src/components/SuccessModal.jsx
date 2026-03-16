import React, { useEffect } from 'react';

const SuccessModal = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-modal-overlay">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center transform animate-modal-content border border-gold/20">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading text-luxury-black mb-2 italic">Success!</h3>
        <p className="text-gray-600 mb-6 font-medium">
          {message || "Lead submitted successfully"}
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-gold text-white py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-luxury-black transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
