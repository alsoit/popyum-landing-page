'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PopupSignupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void>;
}

export default function PopupSignup({ isOpen, onClose, onSubmit }: PopupSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{message: string; isError: boolean} | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with the transition duration
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await onSubmit(email);
      setEmail('');
      setSubmitStatus({ message: 'Thank you for subscribing!', isError: false });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch {
      setSubmitStatus({ message: 'Failed to subscribe. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center px-4 transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-[#CCF5F1] rounded-[25px] relative max-w-[500px] w-full overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* Header section with darker background */}
        <div className="bg-[#B4EBE6] h-[60px] relative">
          <button 
            onClick={onClose}
            className="absolute right-6 top-4 text-2xl font-bold text-[#4E9F9B] hover:opacity-80 transition-opacity"
          >
            ✕
          </button>
        </div>
        
        <div className="text-center p-8">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ 
            fontFamily: 'Contempora Sans, Impact, sans-serif',
            letterSpacing: '0.02em',
            fontWeight: 'normal'
          }}>
            POP YOUR EMAIL IN.
          </h2>
          
          <p className="text-xl md:text-2xl mb-2" style={{ 
            fontFamily: 'Contempora Sans, Impact, sans-serif',
            letterSpacing: '0.02em',
            fontWeight: 'normal'
          }}>
            YOU&apos;LL LIKE IT HERE. (PROMISE)
          </p>
          
          <p className="text-xl md:text-2xl mb-8" style={{ 
            fontFamily: 'Contempora Sans, Impact, sans-serif',
            letterSpacing: '0.02em',
            fontWeight: 'normal'
          }}>
            SIGN UP FOR EARLY ACCESS, DISCOUNTS<br />
            AND OCCASIONAL CHAOS.
          </p>

          <form onSubmit={handleSubmit} className="relative w-full max-w-[400px] mx-auto mb-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white text-[#8F8F8F] text-base outline-none"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
              }}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-8 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Impact, sans-serif',
                letterSpacing: '0.04em'
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SIGNING UP...' : 'SIGN UP'}
            </button>
          </form>

          {submitStatus && (
            <div 
              className={`text-sm mt-2 ${submitStatus.isError ? 'text-red-600' : 'text-black'}`}
              style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif',
                letterSpacing: '0.02em',
                fontWeight: 'normal',
                fontSize: '1.2rem',
                textTransform: 'uppercase'
              }}
            >
              {submitStatus.message}
            </div>
          )}

          <p style={{ 
            fontFamily: 'Poppins, sans-serif', 
            fontWeight: '500',
            fontSize: '16px',
            marginTop: '20px'
          }}>
            By submitting your email you&apos;re agreeing to our <Link href="/terms-conditions" className="underline hover:text-gray-700 transition-colors">T&C&apos;s</Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 