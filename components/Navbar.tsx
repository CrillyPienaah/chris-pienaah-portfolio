'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Work' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
            : 'bg-black/80 backdrop-blur-sm border-b border-gray-800/30'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link 
            href="/" 
            className="font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors relative group"
          >
            CCP.
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-400"></span>
                  )}
                </Link>
              );
            })}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30 font-semibold"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-semibold transition-colors ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="block w-12 h-0.5 bg-blue-400 mx-auto mt-2"></span>
                )}
              </Link>
            );
          })}
          <a 
            href="#contact" 
            className="mt-4 px-8 py-3 bg-white text-black rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}