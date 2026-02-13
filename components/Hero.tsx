
import React from 'react';
import Countdown from './Countdown';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden px-6">
      {/* Decorative Blueprint elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 border-2 border-dashed border-oxe-blue rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 border-2 border-oxe-orange rotate-45"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-10">
           <Logo className="w-64 h-64 md:w-80 md:h-80" />
        </div>
        
        <div className="inline-block mb-6">
          <span className="tape text-white font-mono text-sm uppercase font-bold shadow-lg">
             // status: pronto_para_buildar.exe
          </span>
        </div>
        
        <h1 className="font-logo text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
          <span className="text-white drop-shadow-[4px_4px_0px_#d15e14]">VIDA, ESCOLA</span><br/>
          <span className="text-oxe-blue drop-shadow-[4px_4px_0px_#ffffff]">& COMUNIDADE</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-oxe-sand font-mono leading-relaxed mb-12">
          Hackeando o futuro com as mãos, <br className="hidden md:block"/>
          porque aprender é buildar a própria realidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button className="maker-button w-full sm:w-auto px-10 py-5 bg-oxe-orange text-white font-logo text-3xl uppercase rounded-sm transition-all hover:-translate-y-1">
            Bora Buildar!
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-logo text-3xl uppercase rounded-sm hover:bg-white/5 transition-colors">
            O Plano de Ação
          </button>
        </div>

        <div className="bg-black/20 p-4 rounded-sm border border-white/5 inline-block">
          <Countdown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
