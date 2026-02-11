import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contatti" className="py-24 bg-gray-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-frigo-main rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-frigo-light rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Contatti</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">FrigoTec</h3>
            <p className="text-xl text-gray-300 mb-6">Impianti Frigoriferi Industriali</p>
            
            <p className="text-gray-400 mb-10 text-lg leading-relaxed border-l-2 border-frigo-main pl-4">
              Assistenza tecnica specializzata per il raffreddamento industriale.
              <br />
              Siamo pronti ad intervenire per garantire la continuità della tua produzione.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Sede Operativa</p>
                  <p className="text-lg font-semibold text-white">Monzambano (MN)</p>
                </div>
              </div>
              <address className="text-gray-300 not-italic leading-relaxed">
                Strada San Pietro, 21<br />
                46040 Monzambano (MN)
              </address>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefono</p>
                  <p className="text-lg font-semibold text-white">Contattaci subito</p>
                </div>
              </div>
              <a href="tel:+390376800692" className="inline-flex items-center gap-2 text-lg font-medium text-frigo-light hover:text-white transition-colors">
                +39 0376 800692
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold text-white">Scrivici</p>
                </div>
              </div>
              <a href="mailto:info@frigotec.it" className="inline-flex items-center gap-2 text-lg font-medium text-frigo-light hover:text-white transition-colors">
                info@frigotec.it
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
