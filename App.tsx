import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import InteractiveGridBackground from './components/UI/InteractiveGridBackground';
import About from './components/Sections/About';
import Vision from './components/Sections/Vision';
import Work from './components/Sections/Work';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden text-brand-text">
      <InteractiveGridBackground />
      <Navbar />

      <main className="relative z-10">
        {/* HOME */}
        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-32">
          <About />
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-32">
          <Work />
          <Vision/>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-32">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
