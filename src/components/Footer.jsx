import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} Mesam E Tamaar Khan. All rights reserved.</p>
        <div style={styles.links}>
          <a href="https://github.com/mesametamaarkhan" style={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/mesam-tamaar-khan/" style={styles.link}>LinkedIn</a>
          {/* <a href="#" style={styles.link}>Twitter</a> */}
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '3rem 0',
    background: '#0c0a09',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  text: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    transition: 'var(--transition)',
  }
};

export default Footer;
