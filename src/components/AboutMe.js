// src/components/AboutMe.js

import React from 'react';
import profileImage from '../assests/profile.jpg';

const AboutMe = () => {
  return (
    <section id="about-me" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="profile">
        <img src={profileImage} alt="Profile" />
        <p>
          Hi, I am Gurram Sai Vinil, an AI and Data Science enthusiast passionate about
          cutting-edge technologies. I'm constantly exploring new advancements in machine learning
          and deep learning, with a keen interest in developing innovative solutions that leverage
          the power of data.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
