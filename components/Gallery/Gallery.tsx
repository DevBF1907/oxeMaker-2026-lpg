
import React from 'react';
import { GALLERY } from '../../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-cyber-dark px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-2 uppercase italic">Galeria de <span className="text-cyber-orange">Evolução</span></h2>
            <p className="text-white/50">Momentos marcantes das edições anteriores.</p>
          </div>
          <button className="text-sm font-bold text-cyber-blue uppercase tracking-widest border-b-2 border-cyber-blue/20 hover:border-cyber-blue transition-all pb-1">
            Ver todas as fotos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-cyber-blue uppercase tracking-widest mb-1">Destaque</span>
                <h4 className="text-xl font-display font-bold text-white uppercase italic">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
