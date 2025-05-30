'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [typedText, setTypedText] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{message: string; isError: boolean} | null>(null);
  const fullText = '';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new URLSearchParams();
      formData.append('cmd', 'frappe.website.doctype.web_form.web_form.accept');
      formData.append('web_form', 'popyum-newsletter');
      formData.append('for_payment', 'false');
      formData.append('data', JSON.stringify({
        email: email,
        email_group: 'PopYum',
        unsubscribed: 0,
        doctype: 'Email Group Member',
        web_form_name: 'popyum-newsletter'
      }));

      const response = await fetch('https://frappe.appsatile.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Frappe-CMD': 'frappe.website.doctype.web_form.web_form.accept'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      // Clear the input after successful submission
      setEmail('');
      setSubmitStatus({ message: 'Thank you for subscribing!', isError: false });
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus({ message: 'Failed to subscribe. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full overflow-x-hidden font-sans bg-white text-black">
      {/* Header Navigation - keeps its existing styles */}
      <header className="header-nav py-4 md:py-6 px-4 md:px-6 flex items-center justify-between header-gradient relative min-h-[80px] md:min-h-[100px]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-white text-3xl md:text-4xl z-50"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
        <div className="flex justify-center absolute left-1/2 -translate-x-1/2">
          <Image 
            src="/images/logo.png" 
            alt="Pop Yum Logo" 
            width={90}
            height={60}
            className="h-auto w-[90px] md:w-[118px]"
            priority
          />
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <a href="https://www.instagram.com/popyumfoods/" className="text-white">
            <Image 
              src="/images/instagram.png" 
              alt="Follow Pop Yum on Instagram" 
              width={24}
              height={24}
              className="h-auto w-[24px] md:w-[32px]"
            />
          </a>
          <a href="https://www.tiktok.com/@popyumfoods" className="text-white">
            <Image 
              src="/images/tiktok.png" 
              alt="Follow Pop Yum on TikTok" 
              width={24}
              height={24}
              className="h-auto w-[24px] md:w-[32px]"
            />
          </a>
          <a href="https://www.facebook.com/PopYumFoods/" className="text-white">
            <Image 
              src="/images/facebook.png" 
              alt="Follow Pop Yum on Facebook" 
              width={24}
              height={24}
              className="h-auto w-[24px] md:w-[32px]"
            />
          </a>
          <a href="https://www.linkedin.com/company/pop-yum-ltd/" className="text-white">
            <Image 
              src="/images/linkedin.png" 
              alt="Follow Pop Yum on LinkedIn" 
              width={24}
              height={24}
              className="h-auto w-[24px] md:w-[32px]"
            />
          </a>
        </div>
      </header>

      {/* Menu Overlay */}
      <div className={`backdrop ${isMenuOpen ? 'active' : ''}`}></div>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="menu-close text-6xl text-white"
          >
            ×
          </button>
          <Image 
            src="/images/logo.png"
            alt="Pop Yum Logo - Menu"
            width={150}
            height={80}
            className="proper-logo mt-8"
          />
          <nav className="flex flex-col mt-8">
            <a href="https://www.amazon.co.uk/stores/PopYum/page/7CCB063A-B3D4-40B2-812B-735C0D040828?lp_asin=B0BD9FK79H&ref_=ast_bln" className="menu-item">Popcorn</a>
            <a href="#" className="menu-item">More Coming Soon...</a>
          </nav>
        </div>
      </div>

      {/* Hero Banner with typed text display */}
      <section className="relative w-full" style={{
        background: '#00CAB8'
      }}>
        <Image 
          src="/images/hero-banner.png" 
          alt="Pop Yum Popcorn - Delicious and Healthy Snacks" 
          width={800}
          height={150}
          className="w-full h-auto"
        />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          {typedText}
        </div>
        {/* Add overflowing popcorn */}
        <div className="absolute bottom-[-200px] left-[75%] transform -translate-x-1/2 z-10 hidden md:block">
          <Image 
            src="/images/popcorn-overflow.png"
            alt="Decorative Popcorn Overflow"
            width={600}
            height={1000}
            className="h-auto"
          />
        </div>
      </section>
      {/* White space */}
      <div className="bg-[#CCF5F1] py-8">
        {/* Product Packets Section */}
        <div className="max-w-[90%] mx-auto mt-20">
          <h2 className="text-black text-[50px] md:text-7xl font-extrabold text-center mb-12 uppercase" style={{ 
            fontFamily: 'Contempora Sans, Impact, sans-serif',
            letterSpacing: '0.02em',
            fontWeight: 'normal'
          }}>
            GRAB YOUR BAG
          </h2>
          {/* Remove the popcorn image that was here */}
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center gap-2 flex-nowrap mb-12">
            <Image 
              src="/images/blueberry-popcorn.png"
              alt="Blueberry Popcorn"
              width={200}
              height={300}
              className="h-auto transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/raspberry-popcorn.png"
              alt="Raspberry Popcorn"
              width={200}
              height={300}
              className="h-auto transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/red-popcorn.png"
              alt="Red Popcorn"
              width={200}
              height={300}
              className="h-auto transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/orange-popcorn.png"
              alt="Orange Popcorn"
              width={200}
              height={300}
              className="h-auto transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/green-popcorn.png"
              alt="Green Popcorn"
              width={200}
              height={300}
              className="h-auto transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/teal-popcorn.png"
              alt="Teal Popcorn"
              width={200}
              height={300}
              className="h-auto transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Mobile Grid Layout */}
          <div className="grid grid-cols-2 gap-4 mb-12 px-4 md:hidden">
            <Image 
              src="/images/blueberry-popcorn.png"
              alt="Blueberry Popcorn"
              width={250}
              height={333}
              className="h-auto w-full transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/raspberry-popcorn.png"
              alt="Raspberry Popcorn"
              width={250}
              height={333}
              className="h-auto w-full transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/red-popcorn.png"
              alt="Red Popcorn"
              width={250}
              height={333}
              className="h-auto w-full transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/orange-popcorn.png"
              alt="Orange Popcorn"
              width={250}
              height={333}
              className="h-auto w-full transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/green-popcorn.png"
              alt="Green Popcorn"
              width={250}
              height={333}
              className="h-auto w-full transform hover:scale-110 transition-transform duration-300"
            />
            <Image 
              src="/images/teal-popcorn.png"
              alt="Teal Popcorn"
              width={250}
              height={333}
              className="h-auto w-full transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="text-center mb-10 mt-14">
          <a href="https://www.amazon.co.uk/stores/PopYum/page/7CCB063A-B3D4-40B2-812B-735C0D040828?lp_asin=B0BD9FK79H&ref_=ast_bln" target="_blank" rel="noopener noreferrer">
            <button 
              className="bg-black text-white border-none py-4 px-16 rounded-[10px] cursor-pointer text-[15px] md:text-[20px] hover:bg-gray-800 transition-colors duration-300"
              style={{ 
                fontFamily: 'Impact, sans-serif',
                letterSpacing: '0.04em'
              }}
            >
              SHOP ON AMAZON
            </button>
          </a>
        </div>
      </div>
     
 {/* Bold statement section */}
      <section className="bg-[#FF507B] py-8 text-center overflow-visible relative">
        {/* Add popcorn kernel image */}
        <Image
          src="/images/popcorn-kernel-3.png"
          alt="Popcorn Kernel"
          width={150}
          height={150}
          className="absolute left-0 -bottom-40 transform -rotate-0"  // Changed from -top-1 to -top-20
        />
        <div className="marquee-container relative" style={{ zIndex: 2 }}>
          <div className="marquee-content">
            {Array(10).fill(0).map((_, index) => (
              <span key={index} className="marquee-item">
                <h2 className="text-[50px] md:text-5xl font-extrabold text-white uppercase whitespace-nowrap" style={{ 
                  fontFamily: 'Contempora Sans, Impact, sans-serif',
                  letterSpacing: '0.02em',
                  fontWeight: 'normal'
                }}>
                  <span className="text-black">SOMETHING</span> BOLD <span className="text-black">SOMETHING</span> EXCITING <span className="text-black">SOMETHING</span> BETTER
                </h2>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-28 bg-[#CCF5F1] text-center">
        <div className="max-w-[95%] mx-auto">
          {/* Mobile Layout */}
          <div className="grid grid-cols-1 gap-4 px-4 md:hidden">
            {/* First box */}
            <div className="bg-[#FFDF00] text-black p-6 rounded-[25px] font-bold text-center w-full h-[200px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/grain-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="text-4xl uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>GLUTEN<br/>FREE</span>
            </div>
            
            {/* Natural Recipe box */}
            <div className="bg-[#66e0d6] p-6 rounded-[25px] font-bold text-center w-full h-[200px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/natural-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="text-4xl uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>NATURAL<br/>RECIPE</span>
            </div>
            
            {/* Calories box */}
            <div className="bg-[#FFDF00] p-6 rounded-[25px] font-bold text-center w-full h-[200px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/calorie-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>
                <span className="text-xl">ONLY</span><br/>
                <span className="text-4xl">120 KCAL</span><br/>
                <span className="text-xl">PER PACK</span>
              </span>
            </div>
            
            {/* Vegan box */}
            <div className="bg-[#66e0d6] p-6 rounded-[25px] font-bold text-center w-full h-[200px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/vegan-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="text-4xl uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>VEGAN</span>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Copy of the same boxes but with desktop styling */}
            {/* First box */}
            <div className="bg-[#FFDF00] text-black p-6 rounded-[25px] font-bold text-center w-[250px] h-[250px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/grain-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="text-5xl uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>GLUTEN<br/>FREE</span>
            </div>
            
            {/* Natural Recipe box */}
            <div className="bg-[#66e0d6] p-6 rounded-[25px] font-bold text-center w-[250px] h-[250px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/natural-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="text-5xl uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>NATURAL<br/>RECIPE</span>
            </div>
            
            {/* Calories box */}
            <div className="bg-[#FFDF00] p-6 rounded-[25px] font-bold text-center w-[250px] h-[250px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/calorie-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>
                <span className="text-2xl">ONLY</span><br/>
                <span className="text-5xl">120 KCAL</span><br/>
                <span className="text-2xl">PER PACK</span>
              </span>
            </div>
            
            {/* Vegan box */}
            <div className="bg-[#66e0d6] p-6 rounded-[25px] font-bold text-center w-[250px] h-[250px] flex flex-col justify-center items-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-100">
                <img 
                  src="/images/vegan-texture.png" 
                  alt=""
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              <span className="text-5xl uppercase text-black leading-none z-10" style={{ 
                fontFamily: '"Contempora Sans", Impact, sans-serif', 
                letterSpacing: '0.02em',
                fontWeight: 'normal'
              }}>VEGAN</span>
            </div>
          </div>
        </div>
      </section>

     
      

      {/* Footer */}
      <footer className="bg-[#66E1D5] py-16 px-5 text-black relative">
        {/* Right popcorn overflow - Add new image, visible on large screens */}
        <div className="absolute right-[-10px] top-[-80px] hidden lg:block" style={{ zIndex: 1 }}>
          <Image 
            src="/images/popcorn-kernel-2.png"
            alt="Popcorn Kernel"
            width={150}
            height={250}
            className="h-auto"
          />
        </div>

        <div className="container mx-auto max-w-[90%] relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Section */}
            <div>
              <h3 className="footer-section-title uppercase mb-6">CONTACT</h3>
              <div className="space-y-2 text-black" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                <p>Pop Yum Foods LTD</p>
                <p>163 Alexandra Road</p>
                <p>Gateshead, NE8 1RB</p>
                <p className="mt-6">+44 (0) 3301 226 200</p>
              </div>
            </div>
            
            {/* Terms Section */}
            <div>
              <h3 className="footer-section-title uppercase mb-6">TERMS</h3>
              <div className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                <p><Link href="/cookie-policy" className="hover:text-gray-700 transition-colors">Cookie Policy</Link></p>
                <p><Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link></p>
                <p><Link href="/terms-conditions" className="hover:text-gray-700 transition-colors">Terms & Conditions</Link></p>
              </div>
            </div>
            
            {/* Drop Us A Line Section */}
            <div>
              <h3 className="footer-section-title uppercase mb-6">POP ONTO OUR LIST</h3>
              <div className="space-y-4">
                <form onSubmit={handleEmailSubmit} className="relative w-full max-w-[500px]">
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
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
