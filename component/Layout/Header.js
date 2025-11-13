import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            SolarStore
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-orange-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-orange-500 transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500 transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-orange-500 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-orange-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-orange-500 transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-white hover:text-orange-500 transition-colors font-medium">
                Products
              </Link>
              <Link href="/about" className="text-white hover:text-orange-500 transition-colors font-medium">
                About
              </Link>
              <Link href="/blog" className="text-white hover:text-orange-500 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-orange-500 transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}