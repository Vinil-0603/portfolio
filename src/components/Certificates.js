// src/components/Certificates.js

import React from 'react';
import AWSImage from '../assests/aws.png';
import googleImage from '../assests/google.png';
import SMImage from '../assests/sm.png';
// Import more images as needed

const certificates = [
  {
    image: AWSImage,
    title: 'AWS Fundamentals',
    description: 'Specialization that consists AWS Cloud Technical Essentials, Migrating to the AWS Cloud and Architecting Solutions on AWS',
    link:'https://www.coursera.org/account/accomplishments/specialization/9Q3C5Y87WZFY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n'
  },
  {
    image: googleImage,
    title: 'Google Crash Course on Python',
    description: 'Completed comprehensive Python programming course',
    link: 'https://www.coursera.org/account/accomplishments/verify/6RK284C9Y7PA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    image: SMImage,
    title: 'Social Media Data Analytics',
    description: 'Completed Social Media Data Analytics course',
    link: 'https://www.coursera.org/account/accomplishments/verify/UXACMYDHFEGS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <section id="certificates" data-aos="fade-up">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>
            </a>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;