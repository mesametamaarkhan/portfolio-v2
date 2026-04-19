import React from 'react';
import FadeIn from './FadeIn';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Languages',
      skills: [
        'JavaScript',
        'Go, Rust',
        'C, C++, C#',
        'HTML, CSS',
        'React, TailwindCSS'
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        'Node.js, Express.js',
        'REST APIs',
        'Auth & Authorization',
        'PostgreSQL, MySQL',
        'MongoDB, Supabase'
      ]
    },
    {
      title: 'Systems & Tools',
      skills: [
        'Linux',
        'Git/GitHub',
        'Postman',
        'Docker',
        'Bash Scripting'
      ]
    }
  ];

  return (
    <section id="skills" className="section-skills">
      <div className="container">
        <FadeIn>
          <h2 style={styles.sectionTitle}>
            My <span className="text-gradient">Skills</span>
          </h2>
        </FadeIn>
        <div style={styles.grid}>
          {skillCategories.map((category, index) => (
            <FadeIn key={index} className="glass-card" style={styles.card} delay={index * 0.15 + 0.1}>
              <h3 style={styles.categoryTitle}>{category.title}</h3>
              <ul style={styles.skillList}>
                {category.skills.map(skill => (
                  <li key={skill} style={styles.skillItem}>
                    <span style={styles.bullet}></span>
                    {skill}
                  </li>
                ))}
              </ul>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '2rem',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: 'var(--text-color)',
  },
  skillList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  skillItem: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  bullet: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--primary-color)',
    display: 'inline-block',
  }
};

export default Skills;
