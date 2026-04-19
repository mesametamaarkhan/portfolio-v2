import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <a href="#" style={styles.logo} className="text-gradient"> &gt; Mesam E Tamaar</a>
        <ul style={styles.navLinks}>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '1.5rem 0',
    background: 'rgba(28, 25, 23, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--card-border)',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '800',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  }
};

export default Navbar;
