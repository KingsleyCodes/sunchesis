import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartItemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-gray-200/50 py-3' 
        : 'bg-white py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - BIGGER AND WIDER */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Larger and Wider Logo */}
            <img 
              src="/sunchesislogo.png" 
              alt="SolarStore Logo" 
              className="h-12 w-auto md:h-20 lg:h-16 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="hidden sm:block text-xs text-gray-500 font-medium tracking-wider">POWERING THE FUTURE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Products', href: '/products' },
              { name: 'Solutions', href: '/solutions' },
              { name: 'Projects', href: '/projects' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Icon */}
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {getCartItemsCount()}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Get Quote Button - Desktop */}
            <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Get Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'Solutions', href: '/solutions' },
                { name: 'Projects', href: '/projects' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:from-cyan-600 hover:to-blue-700 transition-colors duration-300">
                  Get Free Consultation
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}