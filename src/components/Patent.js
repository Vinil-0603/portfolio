// src/components/Patent.js

import React from 'react';
import patentImage from '../assests/patent.png';

const Patent = () => {
  return (
    <section id="patent" className="patent-section" data-aos="fade-up">
      <h2>Patent Achievement</h2>
      <div className="patent-content">
        <div className="patent-info">
          <h3>Integrated Structural Health Monitoring System and Method</h3>
          <p>
            I'm proud to be one of the inventors of a patented system for structural health
            monitoring. This achievement underscores my commitment to innovation in technology and
            engineering.
          </p>
          <div className="patent-details">
            <h4>Patent Details:</h4>
            <p>
              <strong>Patent No:</strong> 520866
            </p>
            <p>
              <strong>Application No:</strong> 202241039812
            </p>
            <p>
              <strong>Date of Filing:</strong> July 11, 2022
            </p>
            <p>
              <strong>Date of Grant:</strong> March 6, 2024
            </p>
            <p>
              <strong>Patentee:</strong> Woxsen University
            </p>
          </div>
          <a
            href="https://woxsen.edu.in/news/patent-granted-for-integrated-structural-health-monitoring-system-and-method-school-of-technology/"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="patent-image">
          <img src={patentImage} alt="Patent Certificate" />
        </div>
      </div>
    </section>
  );
};

export default Patent;
