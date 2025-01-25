// src/components/ProjectCard.js

import React, { useState } from 'react';

const ProjectCard = ({ title, description, githubLink }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`project-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} className="button" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
