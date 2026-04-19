import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

const Contact = () => {
  return (
    <section id="contact" className="section-contact" style={{ textAlign: 'center' }}>
      <div className="container" style={{ paddingBottom: '8rem' }}>
        <FadeIn>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:mesamtamaark@gmail.com" className="btn btn-primary">Say Hello</a>
        </FadeIn>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
