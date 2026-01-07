import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export const Gallery: React.FC = () => {
  return (
    <section id="galleria" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Galleria</h2>
          <h3 className="text-3xl font-bold text-gray-900">Interventi e Macchinari</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={src} 
                alt={`Lavoro ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Assistenza Tecnica</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
