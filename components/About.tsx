import React from 'react';
import { Wrench, CheckCircle2, Factory } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Chi Siamo</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Esperienza e precisione al servizio della tua azienda
              </h3>
              <div className="w-20 h-1.5 bg-frigo-main rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ci occupiamo principalmente di assistenza tecnica di impianti frigoriferi industriali adibiti al raffreddamento di olio/acqua per macchine utensili, laser taglio tubo e lamiera.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  <Wrench className="w-6 h-6 text-frigo-main" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Manutenzione Specializzata</h4>
                  <p className="mt-1 text-gray-500">Interventi mirati per garantire la massima efficienza dei vostri impianti.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  <Factory className="w-6 h-6 text-frigo-main" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Macchinari Industriali</h4>
                  <p className="mt-1 text-gray-500">Profonda conoscenza di sistemi Primapower, Adige, Bystronic e tanti altri.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -top-4 -left-4 w-72 h-72 bg-frigo-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
             
             <img 
               src="/assets/images/Affidabilità.png" 
               alt="Tecnico al lavoro" 
               className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px] bg-gray-100"
             />
             
             <div className="absolute bottom-10 -left-10 z-20 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs border-l-4 border-frigo-main">
               <div className="flex items-center gap-2 mb-2">
                 <CheckCircle2 className="text-green-500" />
                 <span className="font-bold text-gray-800">Affidabilità</span>
               </div>
               <p className="text-sm text-gray-600">
                 Interventi rapidi e risolutivi per minimizzare i tempi di fermo macchina.
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
