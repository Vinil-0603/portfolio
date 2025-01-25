// src/components/Projects.js

import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Fitness & Nutrition Chatbot',
    description:
      'Built a chatbot powered by the Gemini API to answer questions related to fitness and nutrition.',
    githubLink: 'https://github.com/Vinil-0603',
  },
  {
    title: 'Multilingual YouTube Summarization',
    description:
      'Developed a Python-based system to process and summarize YouTube videos using NLP models.',
    githubLink: 'https://github.com/Vinil-0603',
  },
  {
    title: 'Face Recognition Attendance System',
    description:
      'A system using computer vision to manage student registration and track attendance in real-time.',
    githubLink: 'https://github.com/Vinil-0603',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
