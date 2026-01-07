import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/Hero.png" 
          alt="Industrial Machinery" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-8 lg:px-12 text-center transform scale-110">
        <h2 className="text-frigo-light font-semibold tracking-wider uppercase mb-4 text-sm md:text-base animate-fade-in-up">
          Assistenza Tecnica Professionale
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Impianti Frigoriferi <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-frigo-light to-frigo-main">
            Industriali
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Specialisti nel raffreddamento di olio e acqua per macchine utensili, laser taglio tubo e lamiera.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
          <a 
            href="#contatti" 
            className="px-8 py-4 bg-frigo-main hover:bg-sky-500 text-white font-semibold rounded-md transition-all transform hover:scale-105 shadow-lg shadow-sky-500/30"
          >
            Richiedi Assistenza
          </a>
          <a 
            href="#servizi" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-md transition-all"
          >
            I Nostri Servizi
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
