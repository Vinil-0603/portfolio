// src/components/Intro.js

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section id="home" className="intro">
      <h1>Gurram Sai Vinil</h1>
      <TypeAnimation
        sequence={[
          'Passionate about leveraging data science to solve complex business challenges',
          500,
          'Experienced in Python, TensorFlow, PyTorch, Power BI, and AWS',
          500,
        ]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
      />
      <p>Welcome to my personal portfolio, where I showcase my projects, skills, and experience in artificial intelligence, data science, and cloud technologies. I am committed to delivering innovative, data-driven solutions to tackle real-world challenges.</p>
      <a href="#contact" className="button">
        Contact Me
      </a>
    </section>
  );
};

export default Intro;