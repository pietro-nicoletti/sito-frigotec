import React from 'react';
const footerLogo = '/assets/logo/frigotec logo_white.png';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src={footerLogo}
              alt="FrigoTec"
              className="h-14 w-auto"
            />
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              FrigoTec Sas di Donaera Andrea.<br/>
              Assistenza tecnica impianti frigoriferi industriali per macchine utensili e laser.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Contatti</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-frigo-main flex-shrink-0" />
                <span>
                  Strada San Pietro, 21<br/>
                  46040 Monzambano (MN)<br/>
                  Italia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-frigo-main flex-shrink-0" />
                <a href="tel:+390376800692" className="hover:text-white transition-colors">
                  +39 0376 800692
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-frigo-main flex-shrink-0" />
                <a href="mailto:info@frigotec.it" className="hover:text-white transition-colors">
                  info@frigotec.it
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Navigazione</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-frigo-main transition-colors">Home</a></li>
              <li><a href="#chi-sono" className="hover:text-frigo-main transition-colors">Chi Sono</a></li>
              <li><a href="#servizi" className="hover:text-frigo-main transition-colors">Servizi</a></li>
              <li><a href="#galleria" className="hover:text-frigo-main transition-colors">Galleria</a></li>
              <li><a href="#contatti" className="hover:text-frigo-main transition-colors">Richiedi Assistenza</a></li>
            </ul>
          </div>

           {/* Hours/Info Column */}
           <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Info Aziendali</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>FrigoTec di Donaera Andrea C. Sas</li>
              <li>P.IVA: 02099520203</li>
              <li>Responsabile: Donaera Andrea</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {currentYear} FrigoTec Sas. Tutti i diritti riservati.</p>
          <p>Advanced Air Conditioning Systems</p>
        </div>
      </div>
    </footer>
  );
};
