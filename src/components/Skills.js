// src/components/Skills.js

import React from 'react';

const skills = [
  'Python',
  'SQL',
  'Power BI',
  'Matplotlib',
  'Seaborn',
  'TensorFlow',
  'PyTorch',
  'AWS (SageMaker, EC2)',
  'NLTK',
  'SpaCy',
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
