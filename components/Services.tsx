import React from 'react';
import { Brand } from '../types';
import { Settings, Server, Cpu, Snowflake } from 'lucide-react';
const primapowerLogo = '/assets/brands/primapower.png';
const bmlgroupLogo = '/assets/brands/BLM_group.png';
const schneebergerLogo = '/assets/brands/schneeberger.png';
const bystronicLogo = '/assets/brands/bystronicLogo.png';
const rittalLogo = '/assets/brands/rittal.png';
const cosmotecLogo = '/assets/brands/cosmotec.png';
const stulzLogo = '/assets/brands/stulz.png';
const hyfraLogo = '/assets/brands/hyfra.png';
const efcoolingLogo = '/assets/brands/efcooling.png';
const riedelLogo = '/assets/brands/riedel.png';


const supportedMachines: Brand[] = [
  { name: 'Prima_Power', website: 'primapower.com', logo: primapowerLogo },
  { name: 'BLM_GROUP', website: 'blmgroup.com/it/', logo: bmlgroupLogo },
  { name: 'Schneeberger', website: 'schneeberger.swiss', logo: schneebergerLogo },
  { name: 'Bystronic', website: 'bystronic.com', logo: bystronicLogo },
];

const supportedBrands: Brand[] = [
  { name: 'Rittal', website: 'rittal.it', logo: rittalLogo },
  { name: 'Cosmotec', website: 'cosmotec.it', logo: cosmotecLogo },
  { name: 'Stulz', website: 'stulz.it', logo: stulzLogo },
  { name: 'Hyfra', website: 'hyfra.com', logo: hyfraLogo },
  { name: 'Efcooling', website: 'efcooling.com', logo: efcoolingLogo },
  { name: 'Riedel Kooling', website: 'riedel-kooling.com', logo: riedelLogo },
];

export const Services: React.FC = () => {
  const withProtocol = (website: string) =>
    website.startsWith('http://') || website.startsWith('https://')
      ? website
      : `https://${website}`;

  return (
    <section id="servizi" className="relative py-24 bg-slate-50 scroll-mt-20">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/assets/images/Servizi.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/95"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Cosa Facciamo</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#C4F5FC]">
            Soluzioni complete per il freddo industriale
          </h3>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors">
                <Snowflake className="text-frigo-main group-hover:text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Assistenza Impianti</h4>
            </div>
            <p className="text-gray-600">
              Riparazione e manutenzione di chiller e sistemi di raffreddamento per acqua e olio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors">
                <Settings className="text-frigo-main group-hover:text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Macchine Utensili</h4>
            </div>
            <p className="text-gray-600">
              Specializzazione su sistemi integrati in macchine a controllo numerico e laser.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-frigo-main transition-colors">
                <Cpu className="text-frigo-main group-hover:text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Diagnostica</h4>
            </div>
            <p className="text-gray-600">
              Analisi approfondita per identificare guasti e ottimizzare le performance energetiche.
            </p>
          </div>
        </div>

        {/* Brands Sections */}
        <div className="flex flex-col gap-12">
          
          {/* Machines Context */}
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border-t-4 border-frigo-main">
            <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Server className="text-frigo-main" />
                Sistemi su cui operiamo
              </h4>
              <p className="text-gray-600 text-lg">
                Forniamo assistenza tecnica su impianti frigoriferi integrati in macchinari di produttori leader come:
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedMachines.map((m) => (
                <li key={m.name}>
                  <a
                    href={withProtocol(m.website)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visita il sito ufficiale di ${m.name}`}
                    className="group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-frigo-main/20 bg-white px-2 py-2 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-frigo-main/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frigo-main"
                    style={{ aspectRatio: '4 / 3' }}
                  >
                    {m.logo ? (
                      <div
                        className="absolute inset-0 opacity-100"
                        style={{
                          backgroundImage: `url(${m.logo})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundSize: '90%',
                        }}
                      />
                    ) : null}
                    <div aria-hidden="true"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cooling Brands */}
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border-t-4 border-gray-800">
            <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Snowflake className="text-gray-800" />
                Marchi Assistiti
              </h4>
              <p className="text-gray-600 text-lg">
                Siamo specializzati nella riparazione e manutenzione dei seguenti brand di refrigerazione:
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportedBrands.map((b) => (
                <li key={b.name}>
                  <a
                    href={withProtocol(b.website)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visita il sito ufficiale di ${b.name}`}
                    className="group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-gray-800/20 bg-white px-4 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-gray-800/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
                    style={{ aspectRatio: '4 / 3' }}
                  >
                    {b.logo ? (
                      <div
                        className="absolute inset-0 opacity-100"
                        style={{
                          backgroundImage: `url(${b.logo})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundSize: '80%',
                        }}
                      />
                    ) : null}
                    <div aria-hidden="true"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
