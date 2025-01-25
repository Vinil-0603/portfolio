// src/components/Experience.js

import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const experiences = [
  {
    role: 'Data Scientist Intern - Cyient',
    duration: 'January 2024 - May 2024 | Hyderabad, Telangana',
    responsibilities: [
      'Developed statistical methods for engine performance analysis.',
      'Created a deployable Streamlit dashboard for data visualization.',
    ],
    certificate: 'https://drive.google.com/file/d/1HC5hB8_VIzr-A9dmaAGeufR4wrg5675d/view',
  },
  {
    role: 'Research Intern - AppsTek Corp',
    duration: 'February 2023 - July 2023 | Hyderabad, Telangana',
    responsibilities: [
      'Worked on enhancing image quality using deep learning models.',
      'Led super-resolution initiatives for image upscaling.',
    ],
    certificate: 'https://drive.google.com/file/d/156HxGmB05AxPs_gs-GotwT6hp6pYq80L/view?usp=sharing',
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-entry">
          <h3>{exp.role}</h3>
          <p>{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {exp.certificate && (
            <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="pdf-link" aria-label="Internship Completion Letter">
              <FaFilePdf size={20} />
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;