import React from 'react';
import FadeIn from './FadeIn';

const Projects = () => {
  const projectList = [
    {
      title: 'RootShift',
      description: 'RootShift is a minimal version control system in Go that mimics core Git features. It is designed for learning, simplicity, and university labs, not production environments.',
      tags: ["Go", "Educational", "Version Control System", "CLI"],
      link: 'https://github.com/mesametamaarkhan/rootshift'
    },
    {
      title: 'Archivist',
      description: 'Archivist is an encrypted backup tool written in Rust that supports deduplication and snapshots. It focuses on privacy, incremental backups, and reliable, production-ready storage for modern systems.',
      tags: ['Rust', 'Backup', 'CLI', 'Encrypted'],
      link: 'https://github.com/mesametamaarkhan/archivist'
    },
    {
      title: 'TheekKarDo',
      description: 'TheekKarDo is a web app connecting vehicle owners with nearby mechanics in real-time. It enables service requests, GPS tracking, scheduling, payments, and ratings for reliable maintenance and support.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Tailwind'],
      link: 'https://github.com/mesametamaarkhan/theekkardo'
    }
  ];

  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <FadeIn>
          <h2 style={styles.sectionTitle}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </FadeIn>
        <div style={styles.grid}>
          {projectList.map((project, index) => (
            <FadeIn key={index} className="glass-card" style={styles.card} delay={index * 0.15 + 0.1}>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                View Project
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  sectionTitle: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  description: {
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    background: 'rgba(250, 204, 21, 0.15)',
    color: 'var(--primary-color)',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
  }
};

export default Projects;
