import React from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contatti" className="py-24 bg-gray-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-frigo-main rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-frigo-light rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Contatti</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">FrigoTec Sas</h3>
            <p className="text-xl text-gray-300 mb-6">Impianti Frigoriferi Industriali</p>
            
            <p className="text-gray-400 mb-10 text-lg leading-relaxed border-l-2 border-frigo-main pl-4">
              Assistenza tecnica specializzata per il raffreddamento industriale.
              <br />
              Siamo pronti ad intervenire per garantire la continuità della tua produzione.
            </p>

            <div className="space-y-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Responsabile Tecnico</p>
                  <span className="text-lg font-medium text-white">
                    Donaera Andrea
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Sede Operativa</p>
                  <address className="text-lg font-medium not-italic">
                    Strada San Pietro, 21<br />
                    46040 Monzambano (MN)
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefono</p>
                  <a href="tel:+390376800692" className="text-lg font-medium hover:text-frigo-light transition-colors">
                    +39 0376 800692
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@frigotec.it" className="text-lg font-medium hover:text-frigo-light transition-colors">
                    info@frigotec.it
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800">Richiedi Intervento</h4>
              <p className="text-gray-500 text-sm">Compila il modulo per essere ricontattato</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Referente</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-frigo-main focus:border-transparent outline-none transition-shadow bg-gray-50" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Ragione Sociale</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-frigo-main focus:border-transparent outline-none transition-shadow bg-gray-50" placeholder="Azienda Srl" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-frigo-main focus:border-transparent outline-none transition-shadow bg-gray-50" placeholder="+39 ..." />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-frigo-main focus:border-transparent outline-none transition-shadow bg-gray-50" placeholder="email@azienda.it" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Dettagli Richiesta</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-frigo-main focus:border-transparent outline-none transition-shadow bg-gray-50" placeholder="Descrivi il tipo di impianto e il problema riscontrato..."></textarea>
              </div>

              <button type="submit" className="w-full bg-frigo-main hover:bg-sky-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                Invia Richiesta
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
