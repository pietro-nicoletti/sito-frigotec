import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Galleria', href: '#galleria' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 hover:text-frigo-main transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-frigo-main transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-frigo-main p-2 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 max-h-96' : 'opacity-0 scale-y-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-frigo-main hover:bg-blue-50 rounded-lg transition-colors border-l-4 border-transparent hover:border-frigo-main"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};