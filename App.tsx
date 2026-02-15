
import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Schedule from './components/Schedule/Schedule';
import Sponsors from './components/Sponsors/Sponsors';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white font-sans selection:bg-cyber-purple selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Sobre o Evento */}
        <About />

        {/* 3. O que haverá em 2026 (Atividades) */}
        <Features />

        {/* 4. Galeria de Fotos */}
        <Gallery />

        {/* 5. Programação (Cronograma) */}
        <Schedule />

        {/* 6. Patrocinadores */}
        <Sponsors />

        {/* 7. Seção Final CTA */}
        <FinalCTA />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default App;
