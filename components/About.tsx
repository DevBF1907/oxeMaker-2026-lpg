
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="maker-card p-4 rotate-2">
                <img 
                  src="https://picsum.photos/800/600?random=40" 
                  alt="Maker Working" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all"
                />
                <div className="mt-4 font-mono text-xs text-oxe-orange uppercase font-bold">
                  log_entry: oficina_comunitaria_01.jpg
                </div>
             </div>
             {/* Floating component sticker */}
             <div className="absolute -bottom-8 -right-8 bg-oxe-green p-4 font-logo text-2xl text-white rounded-lg -rotate-6 shadow-xl">
                MAKER DE RAÇA!
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-logo text-6xl md:text-8xl font-black mb-8 leading-tight uppercase text-white">
              O <span className="text-oxe-orange">CORRE</span>
            </h2>
            <div className="space-y-6 text-oxe-sand/90 text-xl font-medium leading-relaxed">
              <p>
                O **ÔXE-MAKER** não é palestra de gravata. É mutirão! 
                A gente junta quem sabe com quem quer aprender pra resolver o aperreio da comunidade usando bit e parafuso.
              </p>
              <p>
                Nossa escola é a bancada. Nossa linguagem é o código. Nossa meta? **Justiça Socioambiental** na prática, 
                mostrando que o povo da Metropolitana Norte tem o DNA da invenção.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 font-mono text-sm">
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-blue">
                   <span className="text-oxe-blue font-bold">01_</span> Vidas reais
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-green">
                   <span className="text-oxe-green font-bold">02_</span> Escolas Makers
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-yellow">
                   <span className="text-oxe-yellow font-bold">03_</span> Comunidade Unida
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-orange">
                   <span className="text-oxe-orange font-bold">04_</span> Justiça pra Todos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
