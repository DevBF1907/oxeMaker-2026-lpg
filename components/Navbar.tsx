
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oxe-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-4">
          <Logo className="w-16 h-16" showText={false} />
          <div className="hidden sm:block font-logo text-2xl uppercase tracking-tighter">
            <span className="text-white">ÔXE</span><span className="text-oxe-orange">MAKER</span>
          </div>
        </a>
        
        <div className="hidden md:flex space-x-6 font-mono text-[10px] uppercase font-bold text-white/50">
          <a href="#sobre" className="hover:text-oxe-orange transition-colors">01_CORRE</a>
          <a href="#atividades" className="hover:text-oxe-green transition-colors">02_MASSA</a>
          <a href="#programacao" className="hover:text-oxe-blue transition-colors">03_PLANO</a>
          <a href="#galeria" className="hover:text-oxe-yellow transition-colors">04_MEMORIA</a>
        </div>

        <button className="maker-button bg-oxe-orange text-white px-5 py-2 font-logo text-xl uppercase rounded-sm shadow-md">
          Buildar!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
