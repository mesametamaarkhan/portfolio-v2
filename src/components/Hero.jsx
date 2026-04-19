import React from 'react';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section id="hero" className="section-hero">
      <div style={styles.hero} className="container">
        <div style={styles.content}>
          <FadeIn>
            <h2 style={styles.subtitle}>Hi there! I am</h2>
            <h1 style={styles.title}>
              <span className="text-gradient">Mesam E Tamaar Khan</span>
            </h1>
            <h3 style={styles.role}>Software Engineer</h3>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={styles.description}>
              I'm a developer who enjoys building smart systems and web apps that solve real problems. Currently focused on cybersecurity and agent-based architectures, I like working on projects where automation meets intelligence. Always exploring new tools, ideas, and ways to make systems more proactive and resilient.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} style={styles.actions}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
  },
  content: {
    maxWidth: '800px',
  },
  subtitle: {
    color: 'var(--secondary-color)',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '5rem',
    marginBottom: '0.5rem',
  },
  role: {
    fontSize: '2rem',
    color: 'var(--text-color)',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
  },
  actions: {
    display: 'flex',
    gap: '1.5rem',
  }
};

export default Hero;
